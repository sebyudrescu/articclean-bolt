#!/usr/bin/env node

/**
 * Ottimizza le immagini presenti nella cartella `immagini/`
 * utilizzando @squoosh/cli (installato al volo tramite npx).
 * Vengono generati file WebP ottimizzati nella cartella
 * `public/assets/images/generated`.
 */

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const RAW_DIR = path.resolve('immagini');
const OUTPUT_DIR = path.resolve('public/assets/images/generated');
const SUPPORTED_EXT = ['.jpg', '.jpeg', '.png'];

const ensureDir = async (dir) => {
  await fs.mkdir(dir, { recursive: true });
};

const getRawImages = async () => {
  try {
    const entries = await fs.readdir(RAW_DIR, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && SUPPORTED_EXT.includes(path.extname(entry.name).toLowerCase()))
      .map((entry) => path.join(RAW_DIR, entry.name));
  } catch (error) {
    console.warn(`⚠️  Nessuna cartella '${RAW_DIR}' trovata o nessun file immagine disponibile.`);
    return [];
  }
};

const optimizeImage = (filePath) => {
  return new Promise((resolve, reject) => {
    const fileName = path.basename(filePath);
    const process = spawn(
      'npx',
      [
        '@squoosh/cli',
        filePath,
        '--webp',
        '{"quality":80}',
        '--mozjpeg',
        '{"quality":82,"progressive":true}',
        '--output-dir',
        OUTPUT_DIR
      ],
      { stdio: 'inherit' }
    );

    process.on('close', (code) => {
      if (code === 0) {
        console.log(`✅  Ottimizzazione completata: ${fileName}`);
        resolve();
      } else {
        reject(new Error(`Ottimizzazione fallita per ${fileName} (codice ${code})`));
      }
    });
  });
};

const main = async () => {
  await ensureDir(OUTPUT_DIR);

  const images = await getRawImages();
  if (!images.length) {
    console.log('ℹ️  Nessuna immagine da ottimizzare.');
    return;
  }

  for (const image of images) {
    try {
      await optimizeImage(image);
    } catch (error) {
      console.error(error instanceof Error ? error.message : error);
    }
  }

  console.log(`📁  File ottimizzati disponibili in: ${OUTPUT_DIR}`);
};

main().catch((error) => {
  console.error('❌  Errore inaspettato durante l\'ottimizzazione delle immagini:', error);
  process.exit(1);
});
