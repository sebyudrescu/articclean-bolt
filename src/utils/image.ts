export interface ImageOptions {
  width?: number;
  height?: number;
  quality?: number;
  fit?: 'cover' | 'contain' | 'inside' | 'outside';
}

/**
 * Restituisce un URL ottimizzato (WebP, compressione e dimensioni)
 * utilizzando il CDN images.weserv.nl per servire asset remoti.
 * Mantiene invariata la sorgente originale, ma la veicola in modo più leggero.
 */
export const cdnImage = (url: string, options: ImageOptions = {}) => {
  const { width, height, quality = 80, fit } = options;
  const normalized = url.replace(/^https?:\/\//, '');
  const params = new URLSearchParams({
    url: `ssl:${normalized}`,
    output: 'webp',
    dpr: '1',
    default: `ssl:${normalized}`
  });

  if (width) params.set('w', String(width));
  if (height) params.set('h', String(height));
  if (quality) params.set('q', String(quality));
  if (fit) params.set('fit', fit);

  return `https://images.weserv.nl/?${params.toString()}`;
};
