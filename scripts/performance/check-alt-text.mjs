#!/usr/bin/env node

/**
 * Verifica la presenza dell'attributo alt nelle immagini statiche (<img />)
 * e segnala eventuali occorrenze mancanti nelle pagine React.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';

const SOURCE_DIR = path.resolve('src');
const IMG_TAG_REGEX = /<img\s+([^>]+)>/gi;

const getSourceFiles = async (dir) => {
  const files = [];
  const entries = await fs.readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await getSourceFiles(fullPath));
    } else if (entry.name.endsWith('.tsx') || entry.name.endsWith('.jsx')) {
      files.push(fullPath);
    }
  }
  return files;
};

const analyzeFile = async (filePath) => {
  const content = await fs.readFile(filePath, 'utf8');
  const matches = content.matchAll(IMG_TAG_REGEX);

  const missingAlt = [];
  for (const match of matches) {
    const tagContent = match[1];
    if (!/\salt=/.test(tagContent)) {
      missingAlt.push(match[0].trim());
    }
  }

  return missingAlt;
};

const main = async () => {
  const files = await getSourceFiles(SOURCE_DIR);
  let hasWarnings = false;

  for (const file of files) {
    const missing = await analyzeFile(file);
    if (missing.length) {
      hasWarnings = true;
      console.warn(`\n⚠️  Mancano attributi alt in ${path.relative(process.cwd(), file)}:`);
      missing.forEach((tag) => console.warn(`   → ${tag}`));
    }
  }

  if (!hasWarnings) {
    console.log('✨ Tutte le immagini statiche includono un attributo alt.');
  } else {
    process.exitCode = 1;
  }
};

main().catch((error) => {
  console.error('Errore durante il controllo degli attributi alt:', error);
  process.exit(1);
});
