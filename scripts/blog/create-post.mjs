#!/usr/bin/env node

import { promises as fs } from 'node:fs';
import path from 'node:path';

const args = process.argv.slice(2);
const options = {};

args.forEach((arg) => {
  const [key, value] = arg.split('=');
  if (key.startsWith('--')) {
    options[key.slice(2)] = value;
  }
});

const title = options.title;
const services = options.services ? options.services.split(',').map((s) => s.trim()).filter(Boolean) : [];
const heroImage = options.hero || '';
const excerpt = options.excerpt || "Testo introduttivo dell'articolo. Aggiorna questo campo dopo la generazione.";
const metaDescription = options.description || excerpt;

if (!title) {
  console.error('❌  Specifica un titolo con --title="Titolo dell\'articolo"');
  process.exit(1);
}

if (!services.length) {
  console.error('❌  Specifica almeno un serviceId valido con --services=service-id');
  process.exit(1);
}

const slugify = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');

const slug = options.slug ? slugify(options.slug) : slugify(title);
const postsPath = path.resolve('content/blog/posts.json');

const loadPosts = async () => {
  const raw = await fs.readFile(postsPath, 'utf8');
  return JSON.parse(raw);
};

const savePosts = async (posts) => {
  await fs.writeFile(postsPath, `${JSON.stringify(posts, null, 2)}\n`, 'utf8');
};

const main = async () => {
  const posts = await loadPosts();

  if (posts.some((post) => post.slug === slug)) {
    console.error(`❌  Esiste già un post con lo slug "${slug}".`);
    process.exit(1);
  }

  const today = new Date().toISOString().split('T')[0];
  const newPost = {
    title,
    slug,
    excerpt,
    metaDescription,
    heroImage: heroImage || 'https://source.unsplash.com/1280x720/?cleaning',
    publishedAt: today,
    readingTimeMinutes: Number(options.time || 5),
    serviceIds: services,
    keywords: (options.keywords ? options.keywords.split(',') : []).map((keyword) => keyword.trim()).filter(Boolean),
    content: [
      "Introduzione: sostituisci questo paragrafo con l'apertura del tuo articolo.",
      'Sviluppo: approfondisci il tema con esempi legati ai servizi Artic Pulizie.',
      'Conclusione: invita il lettore a richiedere un preventivo o a scoprire servizi correlati.'
    ]
  };

  const updatedPosts = [newPost, ...posts];
  await savePosts(updatedPosts);

  console.log('✅  Nuovo post creato in content/blog/posts.json');
  console.log(`    Titolo: ${title}`);
  console.log(`    Slug: ${slug}`);
  console.log(`    Servizi collegati: ${services.join(', ')}`);
};

main().catch((error) => {
  console.error('Errore durante la generazione del post:', error);
  process.exit(1);
});
