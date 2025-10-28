# Bolt.new Import Guide

Questo documento descrive come mantenere una versione “light” del progetto pronta per l’import su [Bolt.new](https://bolt.new) evitando l’errore `Project size exceeded`.

## 1. Riepilogo ricerca
- Ho tentato di consultare la documentazione ufficiale (`curl -I https://bolt.new`), ma il dominio restituisce `403 Forbidden` quando interrogato da ambienti headless. Si consiglia di verificare manualmente da un browser desktop se sono disponibili linee guida aggiornate sui limiti di dimensione e su eventuali file di ignore dedicati.
- In assenza di una sorgente ufficiale accessibile, ho usato le policy note di StackBlitz/Bolt per privilegiare progetti con dimensioni ridotte, pochi asset statici e assenza di dipendenze installate.

## 2. Strategia di riduzione
Per garantire l’import liscio su Bolt è sufficiente mantenere solo i file utili all’avvio locale dell’applicazione Vite/React. Tutto ciò che è pesante, derivato o puramente documentale viene escluso tramite il nuovo file `.boltignore`.

### File e cartelle da **includere**
- `src/`, `public/`, `index.html`, `vite.config.ts`, `tailwind.config.js`, `postcss.config.js`, `tsconfig*.json`
- `package.json` e `package-lock.json`
- `vite-env.d.ts`, eventuali file di configurazione runtime leggeri

### File e cartelle da **escludere**
L’elenco completo è mantenuto in `.boltignore`. In sintesi vengono filtrati:
- directory rigenerabili (`node_modules/`, `dist/`, `.vite/`, `.vercel/`)
- asset e report voluminosi (`immagini/`, `reports/`, `qa-report.csv`)
- documentazione ad alto volume (`IMPLEMENTATION_SUMMARY.md`, `project.md*`, `artic-seo-audit.md`, ecc.)
- script operativi non necessari in Bolt (`scripts/`, `supabase/`)

Questa selezione mantiene l’app funzionante su Bolt (installazione dipendenze + `npm run dev`) ma riduce drasticamente il numero di file trasferiti.

## 3. Preparare una copia “Bolt ready”
1. Assicurati di avere l’ultima versione del branch principale.
2. Crea un branch dedicato (es. `bolt-lite`) oppure una working tree secondaria:  
   ```bash
   git checkout -b bolt-lite
   ```
3. Verifica che `.boltignore` sia presente e committato.
4. Dal branch `bolt-lite`, forza un push sul repository remoto. Bolt clonerà solo i file non ignorati.
5. In alternativa è possibile creare un archivio manuale pronto per Bolt utilizzando `tar` o `rsync` con le esclusioni definite in `.boltignore`:
   ```bash
   tar --exclude-from=.boltignore -czf bolt-lite.tar.gz .
   ```
   L’archivio risultante contiene solo i file ammessi e può essere caricato direttamente nella UI di Bolt.

## 4. Verifica dell’import
- L’ambiente di esercitazione non consente di effettuare l’import diretto su Bolt; è quindi necessario completare il test manualmente.
- Dopo il primo import, controlla la console di Bolt: se segnala ancora superamenti di quota, aggiungi nuove esclusioni in `.boltignore` e ripeti l’operazione.

## 5. Mantenimento futuro
- Ogni volta che si aggiungono asset pesanti, chiedersi se sono indispensabili in Bolt. In caso contrario aggiorna `.boltignore`.
- Mantieni `public/assets/` ottimizzato (immagini WebP < 200 KB). Gli asset extra dovrebbero restare nella cartella `immagini/` già esclusa.
- Aggiorna questo documento con eventuali nuove scoperte o linee guida ufficiali quando diventano accessibili.

## 6. Limitazioni note
- Gli script di audit (`scripts/`) e le migrazioni `supabase/` non vengono caricati su Bolt. Se servono in cloud, copiarli manualmente in una cartella condivisa o eseguirli localmente prima del deploy.
- Le informazioni contenute nei file di documentazione esclusi non sono disponibili in Bolt. Conserva un link al repository completo per la consultazione.

## 7. Fonti consultate
- Richiesta HTTP diretta al dominio ufficiale Bolt (`curl -I https://bolt.new`) → risposta `403 Forbidden` (vedi log degli esperimenti in locale). Nessun altro canale pubblico è stato raggiungibile dall’ambiente CLI.
