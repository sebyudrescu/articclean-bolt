#!/usr/bin/env node

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const REPORT_DIR = path.resolve('reports/seo');

const tasks = [
  { name: 'perf:images', command: ['npm', 'run', 'perf:images'] },
  { name: 'perf:alt', command: ['npm', 'run', 'perf:alt'] },
  { name: 'perf:sitemap', command: ['npm', 'run', 'perf:sitemap'] }
];

const runCommand = (command, args) => {
  return new Promise((resolve) => {
    const child = spawn(command, args, { stdio: 'inherit' });
    child.on('close', (code) => {
      resolve(code === 0);
    });
  });
};

const main = async () => {
  await fs.mkdir(REPORT_DIR, { recursive: true });
  const results = [];

  for (const task of tasks) {
    const [command, ...args] = task.command;
    console.log(`\n▶️  Avvio ${task.name}...`);
    const success = await runCommand(command, args);
    results.push({
      task: task.name,
      success
    });
    console.log(success ? `✅  ${task.name} completato` : `❌  ${task.name} ha restituito un errore`);
  }

  const timestamp = new Date().toISOString();
  const reportPath = path.join(REPORT_DIR, `seo-audit-${timestamp.split('T')[0]}.json`);

  await fs.writeFile(reportPath, JSON.stringify({
    generatedAt: timestamp,
    results
  }, null, 2));

  console.log(`\n📄  Report SEO salvato in ${reportPath}`);
};

main().catch((error) => {
  console.error('Errore durante l\'audit SEO:', error);
  process.exit(1);
});
