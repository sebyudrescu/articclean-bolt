# Report Performance Artic Pulizie

Questa cartella raccoglie i risultati delle analisi tecniche e dei test Lighthouse richiesti dal PRD (Parte 2).

## Script disponibili

- `npm run optimize:images` &rarr; comprime le immagini grezze presenti nella cartella `immagini/` producendo versioni WebP ottimizzate in `public/assets/images/generated`.
- `npm run perf:images` &rarr; verifica che tutte le immagini in `public/assets/` siano sotto la soglia di 200 KB.
- `npm run perf:alt` &rarr; controlla che ogni `<img />` nei componenti React abbia l'attributo `alt`.
- `npm run perf:lighthouse` &rarr; genera i report Lighthouse (formati JSON + HTML) nella cartella `reports/performance/`.
- `npm run perf:sitemap` &rarr; aggiorna automaticamente il file `public/sitemap.xml` leggendo le rotte definite in `src/App.tsx`.
- `npm run seo:audit` &rarr; esegue in sequenza i check principali (immagini, alt text, sitemap) e registra l’esito in `reports/seo/`.

Per ottenere le metriche Lighthouse locali è necessario avviare un server (ad esempio `npm run preview`) e passare l'URL allo script:

```bash
npm run perf:lighthouse -- http://localhost:4173
```

## Report correnti

- `performance-implementation-2025-02-28.md`
