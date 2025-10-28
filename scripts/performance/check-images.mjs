#!/usr/bin/env node

/**
 * Controlla il peso dei file immagine ottimizzati
 * e segnala eventuali file superiori alla soglia definita.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';

const IMAGE_DIRS = [
  path.resolve('public/assets'),
  path.resolve('src/assets')
];

const MAX_BYTES = 200 * 1024; // 200 KB
const IMAGE_EXT = new Set(['.png', '.jpg', '.jpeg', '.webp', '.svg', '.avif']);

const listFiles = async (dir) => {
  const results = [];
  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        results.push(...await listFiles(fullPath));
      } else if (IMAGE_EXT.has(path.extname(entry.name).toLowerCase())) {
        results.push(fullPath);
      }
    }
  } catch {
    // directory may not exist; ignore
  }
  return results;
};

const main = async () => {
  let hasWarnings = false;
  for (const dir of IMAGE_DIRS) {
    const files = await listFiles(dir);
    if (!files.length) continue;

    console.log(`\n🔍 Analisi immagini in: ${dir}`);

    for (const file of files) {
      const stats = await fs.stat(file);
      const relative = path.relative(process.cwd(), file);
      const sizeKB = (stats.size / 1024).toFixed(1);

      if (stats.size > MAX_BYTES) {
        hasWarnings = true;
        console.warn(`  ⚠️  ${relative} - ${sizeKB} KB (supera ${MAX_BYTES / 1024} KB)`);
      } else {
        console.log(`  ✅  ${relative} - ${sizeKB} KB`);
      }
    }
  }

  if (hasWarnings) {
    process.exitCode = 1;
    console.warn('\n❗ Alcune immagini superano la dimensione consigliata. Valuta ulteriori ottimizzazioni.');
  } else {
    console.log('\n✨ Tutte le immagini rispettano la soglia dimensionale consigliata.');
  }
};

main().catch((error) => {
  console.error('Errore durante il controllo delle immagini:', error);
  process.exit(1);
});
