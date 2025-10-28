# Report SEO Automation

Questa directory contiene i risultati generati da `npm run seo:audit`, uno script che esegue automaticamente:

1. `npm run perf:images` – controllo dimensioni immagini.
2. `npm run perf:alt` – verifica attributi `alt` sui tag `<img />`.
3. `npm run perf:sitemap` – aggiornamento della sitemap basato sulle rotte attuali (incluse le pagine blog).

Ogni esecuzione produce un file `seo-audit-YYYY-MM-DD.json` con l’esito dei task. Utilizzalo per documentare i check periodici previsti dalla fase di automazione SEO (Parte 3 del PRD).
