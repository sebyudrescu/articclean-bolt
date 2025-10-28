declare module 'vite-plugin-compression' {
  import type { Plugin } from 'vite';
  export default function compression(options?: any): Plugin;
}

declare module 'vite-plugin-webfont-dl' {
  import type { Plugin } from 'vite';
  export default function webfontDownload(options?: any): Plugin;
}
