import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';
import webfontDownload from 'vite-plugin-webfont-dl';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEV_PORT = Number(process.env.PORT ?? process.env.VITE_PORT ?? 5173) || 5173;
const PREVIEW_PORT = Number(process.env.PREVIEW_PORT ?? 4173) || 4173;
const HMR_HOST = process.env.VITE_HMR_HOST;
const SUPABASE_ANALYTICS_VIRTUAL_ID = '\0supabase-storage-analytics-stub';
const resolveSupabaseStorageAnalytics = () => ({
  name: 'resolve-supabase-storage-analytics',
  enforce: 'pre' as const,
  resolveId(source: string, importer?: string) {
    if (
      source === './packages/StorageAnalyticsApi' &&
      importer?.includes('@supabase/storage-js/dist/module')
    ) {
      const baseDir = path.dirname(importer);
      const extensions = ['.js', '.mjs', '.cjs'];
      for (const ext of extensions) {
        const candidate = path.resolve(baseDir, `packages/StorageAnalyticsApi${ext}`);
        if (fs.existsSync(candidate)) {
          return candidate;
        }
      }
      return SUPABASE_ANALYTICS_VIRTUAL_ID;
    }
    return null;
  },
  load(id: string) {
    if (id === SUPABASE_ANALYTICS_VIRTUAL_ID) {
      return `
        class StorageAnalyticsApi {
          constructor() {
            throw new Error('StorageAnalyticsApi is not available in this environment.');
          }
          throwOnError() { return this; }
          async createBucket() { throw new Error('StorageAnalyticsApi is not available in this environment.'); }
          async listBuckets() { throw new Error('StorageAnalyticsApi is not available in this environment.'); }
          async deleteBucket() { throw new Error('StorageAnalyticsApi is not available in this environment.'); }
        }
        export { StorageAnalyticsApi };
        export default StorageAnalyticsApi;
      `;
    }
    return null;
  },
});

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    resolveSupabaseStorageAnalytics(),
    compression({ algorithm: 'brotliCompress' }),
    compression({ algorithm: 'gzip' }),
    // ⬇️ il plugin accetta un SOLO oggetto opzioni
    webfontDownload({
      injectAsStyleTag: true,
      minifyCss: mode === 'production',
    }),
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
  server: {
    host: '0.0.0.0',
    port: DEV_PORT,
    strictPort: false,
    hmr: HMR_HOST ? { host: HMR_HOST, protocol: 'ws' } : undefined,
  },
  preview: {
    host: '0.0.0.0',
    port: PREVIEW_PORT,
    strictPort: false,
  },
  build: { sourcemap: mode !== 'production' },
}));
