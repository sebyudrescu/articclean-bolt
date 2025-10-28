import fs from 'fs';
import path from 'path';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { siteMetadata } from '../src/data/siteMetadata';
import { services, locations } from '../src/data/servicesData';
import { getAllLocalPages } from '../src/data/localContent';
import blogPosts from '../content/blog/posts.json' assert { type: 'json' };

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type SitemapUrl = {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
};

type BlogPost = {
  slug: string;
  publishedAt?: string;
};

const DOMAIN = siteMetadata.baseUrl.replace(/\/$/, '');
const today = new Date().toISOString().split('T')[0];

const buildStaticPages = (): SitemapUrl[] => ([
  { path: '/', changefreq: 'daily', priority: '1.0' },
  { path: '/chi-siamo', changefreq: 'monthly', priority: '0.8' },
  { path: '/come-lavoriamo', changefreq: 'monthly', priority: '0.8' },
  { path: '/recensioni', changefreq: 'weekly', priority: '0.7' },
  { path: '/servizi', changefreq: 'weekly', priority: '0.9' },
  { path: '/dove-operiamo', changefreq: 'monthly', priority: '0.8' },
  { path: '/faq', changefreq: 'monthly', priority: '0.7' },
  { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  { path: '/privacy-policy', changefreq: 'yearly', priority: '0.3' },
  { path: '/richiedi-preventivo', changefreq: 'monthly', priority: '0.9' }
]).map((item) => ({
  loc: `${DOMAIN}${item.path}`,
  lastmod: today,
  changefreq: item.changefreq,
  priority: item.priority
}));

const buildServicePages = (): SitemapUrl[] =>
  services.map((service) => ({
    loc: `${DOMAIN}/servizi/${service.slug}`,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.8'
  }));

const buildBlogPages = (): SitemapUrl[] =>
  (blogPosts as BlogPost[]).map((post) => ({
    loc: `${DOMAIN}/blog/${post.slug}`,
    lastmod: (post.publishedAt ?? today).split('T')[0],
    changefreq: 'weekly',
    priority: '0.6'
  }));

const buildLocalServicePages = (): SitemapUrl[] => {
  const serviceSlugById = new Map(services.map((service) => [service.id, service.slug]));
  const locationSlugById = new Map(locations.map((location) => [location.id, location.slug]));

  return getAllLocalPages()
    .map((page) => {
      const serviceSlug = serviceSlugById.get(page.serviceId);
      const locationSlug = locationSlugById.get(page.locationId);

      if (!serviceSlug || !locationSlug) {
        return null;
      }

      return {
        loc: `${DOMAIN}/servizi/${serviceSlug}/${locationSlug}`,
        lastmod: today,
        changefreq: 'monthly',
        priority: '0.7'
      };
    })
    .filter((entry): entry is SitemapUrl => entry !== null);
};

const generateSitemap = () => {
  console.log('📍 Generating sitemap.xml...');

  const urls = [
    ...buildStaticPages(),
    ...buildServicePages(),
    ...buildBlogPages(),
    ...buildLocalServicePages()
  ];

  const uniqueUrls = Array.from(
    urls.reduce((map, url) => map.set(url.loc, url), new Map<string, SitemapUrl>()).values()
  ).sort((a, b) => a.loc.localeCompare(b.loc));

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${uniqueUrls
    .map(
      (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
    )
    .join('\n')}
</urlset>`;

  const publicDir = resolve(__dirname, '../public');
  const sitemapPath = path.join(publicDir, 'sitemap.xml');

  fs.writeFileSync(sitemapPath, sitemapXml, 'utf-8');

  console.log(`✅ Sitemap generated successfully: ${sitemapPath}`);
  console.log(`📊 Total URLs: ${uniqueUrls.length}`);
};

generateSitemap();
