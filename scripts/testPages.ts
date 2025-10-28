import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

async function testPages() {
  console.log('🧪 Testing Page Generation System\n');

  const { data: services } = await supabase.from('services').select('*');
  const { data: locations } = await supabase.from('locations').select('*');
  const { data: pages } = await supabase.from('local_service_pages').select('*');

  console.log('📊 DATABASE STATISTICS:');
  console.log(`   Services: ${services?.length || 0}`);
  console.log(`   Locations: ${locations?.length || 0}`);
  console.log(`   Pages Generated: ${pages?.length || 0}`);
  console.log(`   Expected Pages: ${(services?.length || 0) * (locations?.length || 0)}`);
  console.log();

  if (pages && pages.length > 0) {
    const randomPage = pages[Math.floor(Math.random() * pages.length)];

    const { data: fullPage } = await supabase
      .from('local_service_pages')
      .select(`
        *,
        service:services(*),
        location:locations(*)
      `)
      .eq('id', randomPage.id)
      .maybeSingle();

    if (fullPage) {
      const service = fullPage.service as any;
      const location = fullPage.location as any;

      console.log('🔍 RANDOM PAGE SAMPLE:');
      console.log(`   URL: /servizi/${fullPage.slug}`);
      console.log(`   Service: ${service?.name}`);
      console.log(`   Location: ${location?.name}`);
      console.log(`   H1: ${fullPage.h1_title}`);
      console.log(`   Meta Title: ${fullPage.meta_title} (${fullPage.meta_title.length} chars)`);
      console.log(`   Meta Desc: ${fullPage.meta_description.substring(0, 80)}... (${fullPage.meta_description.length} chars)`);
      console.log(`   Word Count: ${fullPage.word_count}`);
      console.log(`   Published: ${fullPage.published ? '✅ Yes' : '❌ No'}`);
      console.log();

      console.log('📄 CONTENT SECTIONS:');
      console.log(`   Why Choose Us: ${fullPage.why_choose_us.length} points`);
      console.log(`   Coverage Areas: ${fullPage.coverage_areas.length} areas`);
      console.log(`   Typical Problems: ${fullPage.typical_problems.length} problems`);
      console.log(`   Detailed Services: ${Object.keys(fullPage.detailed_services).length} services`);
      console.log(`   Section Order: ${fullPage.section_order.join(' → ')}`);
      console.log();

      if (location?.nearby_locations) {
        console.log('🔗 INTERNAL LINKING:');
        console.log(`   Nearby Locations: ${(location.nearby_locations as string[]).length} links`);
        console.log(`   → ${(location.nearby_locations as string[]).slice(0, 4).join(', ')}`);
        console.log();
      }
    }
  }

  console.log('🌐 SAMPLE URLs TO TEST:');
  if (services && locations) {
    const sampleServices = services.slice(0, 3);
    const sampleLocations = locations.slice(0, 3);

    sampleServices.forEach(service => {
      sampleLocations.forEach(location => {
        console.log(`   http://localhost:5173/servizi/${service.slug}/${location.slug}`);
      });
    });
  }
  console.log();

  console.log('✅ Test Complete!');
  console.log('\n💡 NEXT STEPS:');
  console.log('   1. Run: npm run dev');
  console.log('   2. Visit any URL above');
  console.log('   3. Check SEO metadata in browser DevTools');
  console.log('   4. Verify internal links work correctly');
}

testPages().catch(console.error);
