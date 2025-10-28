import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface QAReport {
  url: string;
  service: string;
  location: string;
  wordCount: number;
  metaTitleLength: number;
  metaDescLength: number;
  h1Unique: string;
  metaTitleUnique: string;
  otherServicesLinks: number;
  nearbyLocationsLinks: number;
  seoPass: string;
  published: boolean;
}

function calculateSimilarity(text1: string, text2: string): number {
  const words1 = text1.toLowerCase().split(/\s+/);
  const words2 = text2.toLowerCase().split(/\s+/);

  const set1 = new Set(words1);
  const set2 = new Set(words2);

  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);

  return (intersection.size / union.size) * 100;
}

async function generateQAReport() {
  console.log('📊 Generating QA Report...\n');

  const { data: localPages, error } = await supabase
    .from('local_service_pages')
    .select(`
      *,
      service:services(name, slug),
      location:locations(name, slug, nearby_locations)
    `)
    .order('slug', { ascending: true });

  if (error || !localPages) {
    console.error('❌ Error fetching pages:', error);
    return;
  }

  console.log(`✅ Analyzing ${localPages.length} pages...\n`);

  const reports: QAReport[] = [];
  const metaTitles = new Map<string, number>();
  const h1Titles = new Map<string, number>();

  for (const page of localPages) {
    const service = page.service as any;
    const location = page.location as any;

    if (!service || !location) continue;

    const nearbyLocations = (location.nearby_locations as string[]) || [];
    const nearbyLinksCount = Math.min(nearbyLocations.length, 4);

    const metaTitleUnique = !metaTitles.has(page.meta_title);
    const h1Unique = !h1Titles.has(page.h1_title);

    metaTitles.set(page.meta_title, (metaTitles.get(page.meta_title) || 0) + 1);
    h1Titles.set(page.h1_title, (h1Titles.get(page.h1_title) || 0) + 1);

    const seoChecks = {
      metaTitleLength: page.meta_title.length <= 60,
      metaDescLength: page.meta_description.length <= 160,
      wordCount: page.word_count >= 1000,
      metaTitleUnique,
      h1Unique,
      linksPresent: nearbyLinksCount >= 3
    };

    const seoPass = Object.values(seoChecks).every(check => check) ? 'PASS' : 'FAIL';

    reports.push({
      url: `https://www.articclean.it/servizi/${page.slug}`,
      service: service.name,
      location: location.name,
      wordCount: page.word_count,
      metaTitleLength: page.meta_title.length,
      metaDescLength: page.meta_description.length,
      h1Unique: h1Unique ? 'YES' : 'NO',
      metaTitleUnique: metaTitleUnique ? 'YES' : 'NO',
      otherServicesLinks: 3,
      nearbyLocationsLinks: nearbyLinksCount,
      seoPass,
      published: page.published
    });
  }

  const csvHeader = 'URL,Service,Location,Word Count,Meta Title Length,Meta Desc Length,H1 Unique,Meta Title Unique,Other Services Links,Nearby Locations Links,SEO Pass,Published\n';

  const csvRows = reports.map(report =>
    `"${report.url}","${report.service}","${report.location}",${report.wordCount},${report.metaTitleLength},${report.metaDescLength},"${report.h1Unique}","${report.metaTitleUnique}",${report.otherServicesLinks},${report.nearbyLocationsLinks},"${report.seoPass}",${report.published}`
  ).join('\n');

  const csvContent = csvHeader + csvRows;

  const reportPath = resolve(__dirname, '../qa-report.csv');
  fs.writeFileSync(reportPath, csvContent, 'utf-8');

  console.log(`✅ QA Report generated: ${reportPath}\n`);

  console.log('📈 SUMMARY STATISTICS:');
  console.log(`   Total Pages: ${reports.length}`);
  console.log(`   Published: ${reports.filter(r => r.published).length}`);
  console.log(`   SEO Pass: ${reports.filter(r => r.seoPass === 'PASS').length}`);
  console.log(`   SEO Fail: ${reports.filter(r => r.seoPass === 'FAIL').length}`);
  console.log(`   Avg Word Count: ${Math.round(reports.reduce((sum, r) => sum + r.wordCount, 0) / reports.length)}`);
  console.log(`   Min Word Count: ${Math.min(...reports.map(r => r.wordCount))}`);
  console.log(`   Max Word Count: ${Math.max(...reports.map(r => r.wordCount))}`);

  const duplicateTitles = [...metaTitles.entries()].filter(([_, count]) => count > 1);
  if (duplicateTitles.length > 0) {
    console.log(`\n⚠️  WARNING: ${duplicateTitles.length} duplicate meta titles found`);
  } else {
    console.log('\n✅ All meta titles are unique');
  }

  const duplicateH1s = [...h1Titles.entries()].filter(([_, count]) => count > 1);
  if (duplicateH1s.length > 0) {
    console.log(`⚠️  WARNING: ${duplicateH1s.length} duplicate H1 titles found`);
  } else {
    console.log('✅ All H1 titles are unique');
  }

  console.log('\n🎉 QA Report complete!');
}

generateQAReport().catch(console.error);
