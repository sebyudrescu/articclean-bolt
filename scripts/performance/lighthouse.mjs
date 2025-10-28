#!/usr/bin/env node

/**
 * Esegue Lighthouse (via npx) contro un URL fornito
 * e salva i report in formato JSON e HTML nella cartella reports/performance.
 * Uso: node scripts/performance/lighthouse.mjs http://localhost:4173
 */

import { spawn } from 'node:child_process';
import { promises as fs } from 'node:fs';
import path from 'node:path';

const TARGET_URL = process.argv[2] ?? 'http://localhost:4173';
const REPORT_DIR = path.resolve('reports/performance');
const TIMESTAMP = new Date().toISOString().split('T')[0];
const JSON_PATH = path.join(REPORT_DIR, `lighthouse-${TIMESTAMP}.json`);

const ensureDir = async () => {
  await fs.mkdir(REPORT_DIR, { recursive: true });
};

const buildChromeArgs = () => {
  const flags = [
    '--headless=new',
    '--no-sandbox',
    '--disable-gpu',
    '--disable-dev-shm-usage'
  ];

  return `--chrome-flags=${flags.join(' ')}`;
};

const runLighthouse = () => {
  return new Promise((resolve, reject) => {
    const args = [
      'lighthouse',
      TARGET_URL,
      '--preset=desktop',
      '--output=json',
      `--output-path=${JSON_PATH}`,
      '--quiet',
      buildChromeArgs()
    ];

    if (process.env.CHROME_PATH) {
      args.push(`--chrome-path=${process.env.CHROME_PATH}`);
    }

    const proc = spawn('npx', args, { stdio: 'inherit' });

    proc.on('close', (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`Lighthouse ha restituito codice ${code}`));
      }
    });
  });
};

const main = async () => {
  await ensureDir();
  console.log(`🚀 Avvio Lighthouse su ${TARGET_URL}`);
  await runLighthouse();
  console.log(`📄 Report disponibili in ${REPORT_DIR}`);
};

main().catch((error) => {
  console.error('Errore durante l’esecuzione di Lighthouse:', error);
  process.exit(1);
});
