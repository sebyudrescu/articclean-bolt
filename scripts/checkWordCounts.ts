import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.VITE_SUPABASE_URL || '',
  process.env.VITE_SUPABASE_ANON_KEY || ''
);

async function checkWordCounts() {
  const { data, error } = await supabase
    .from('local_service_pages')
    .select('slug, word_count, services(slug), locations(slug)')
    .order('word_count', { ascending: false })
    .limit(10);

  if (error) {
    console.error('Error:', error);
    return;
  }

  console.log('Top 10 pages by word count:');
  data?.forEach(page => {
    console.log(`${page.slug}: ${page.word_count} words`);
  });

  const { data: stats } = await supabase
    .from('local_service_pages')
    .select('word_count');

  const counts = stats?.map(p => p.word_count) || [];
  const avg = counts.reduce((a, b) => a + b, 0) / counts.length;
  const min = Math.min(...counts);
  const max = Math.max(...counts);

  console.log(`\nStatistics:`);
  console.log(`Total pages: ${counts.length}`);
  console.log(`Average: ${Math.round(avg)} words`);
  console.log(`Min: ${min} words`);
  console.log(`Max: ${max} words`);
  console.log(`\nPages with <500 words: ${counts.filter(c => c < 500).length}`);
  console.log(`Pages with 500-1000 words: ${counts.filter(c => c >= 500 && c < 1000).length}`);
  console.log(`Pages with 1000-1600 words: ${counts.filter(c => c >= 1000 && c <= 1600).length}`);
  console.log(`Pages with >1600 words: ${counts.filter(c => c > 1600).length}`);
}

checkWordCounts();
