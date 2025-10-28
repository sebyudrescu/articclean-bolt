#!/usr/bin/env node

/**
 * Genera/aggiorna il file public/sitemap.xml estraendo i percorsi
 * statici dichiarati in src/App.tsx.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';

const APP_FILE = path.resolve('src/App.tsx');
const OUTPUT_FILE = path.resolve('public/sitemap.xml');
const BLOG_POSTS_FILE = path.resolve('content/blog/posts.json');
const BASE_URL = 'https://www.articpulizie.it';

const buildUrl = (route) => {
  if (route === '/') return BASE_URL;
  return `${BASE_URL}${route.startsWith('/') ? route : `/${route}`}`;
};

const getRoutes = async () => {
  const content = await fs.readFile(APP_FILE, 'utf8');
  const regex = /<Route\s+path="([^"]+)"/g;
  const routes = new Set(['/']);
  let match;

  while ((match = regex.exec(content)) !== null) {
    const raw = match[1];
    if (raw.includes(':')) {
      // ignora percorsi dinamici
      continue;
    }
    routes.add(raw);
  }

  try {
    const blogRaw = await fs.readFile(BLOG_POSTS_FILE, 'utf8');
    const blogPosts = JSON.parse(blogRaw);
    blogPosts.forEach((post) => {
      if (post.slug) {
        routes.add(`/blog/${post.slug}`);
      }
    });
  } catch (error) {
    console.warn('⚠️  Impossibile leggere i post del blog per la sitemap:', error.message);
  }

  return Array.from(routes).sort();
};

const generateSitemap = (routes) => {
  const today = new Date().toISOString().split('T')[0];
  const urls = routes.map((route) => `  <url>
    <loc>${buildUrl(route)}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${route === '/' ? 'daily' : 'monthly'}</changefreq>
    <priority>${route === '/' ? '1.0' : '0.8'}</priority>
  </url>`);

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urls.join('\n')}
</urlset>
`;
};

const main = async () => {
  const routes = await getRoutes();
  const xml = generateSitemap(routes);
  await fs.writeFile(OUTPUT_FILE, xml.trim() + '\n', 'utf8');
  console.log(`🗺️  sitemap.xml aggiornato con ${routes.length} percorsi.`);
};

main().catch((error) => {
  console.error('Errore durante la generazione della sitemap:', error);
  process.exit(1);
});
