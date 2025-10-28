# Bolt.new Import Optimization PRD

## Obiettivo
Rendere il progetto compatibile e importabile su **Bolt.new**, superando l’errore *"Project size exceeded"* che si verifica durante l’import tramite GitHub.  
L’obiettivo è ottenere una versione “light” del repository che mantenga la funzionalità essenziale e che possa essere utilizzata in modo stabile all’interno di Bolt.new.

---

## Motivazione
Bolt.new ha limiti di dimensione del progetto e di numero di file elaborabili.  
Progetti troppo grandi, contenenti build artifacts, asset multimediali o sottofolder non necessari, causano il blocco dell’import.  
Ottimizzare il repository non solo risolve il problema tecnico, ma migliora anche la velocità e la stabilità della collaborazione nel cloud environment di Bolt.

---

## Cosa deve fare Codex

### 1. Informarsi sul problema
- Cercare informazioni aggiornate sul limite di dimensione e sui messaggi di errore specifici (“Project size exceeded”) relativi a **Bolt.new**.  
- Verificare se esistono meccanismi ufficiali o file dedicati (ad esempio `.boltignore`) per escludere file dal caricamento.  
- Consultare la documentazione o i canali di supporto pubblico di Bolt su GitHub, Discord o blog tecnici.

### 2. Definire una strategia di riduzione del progetto
- Identificare quali file e directory sono **essenziali** per il funzionamento del codice e quali possono essere **esclusi**.  
- Creare un piano di esclusione basato su un file di ignore (`.boltignore` o equivalente) che mantenga la compatibilità con GitHub e Bolt.  
- Proporre un criterio chiaro di selezione: includere solo ciò che serve all’esecuzione, analisi o test su Bolt.

### 3. Preparare la versione “light”
- Generare un branch o una copia del repository ottimizzata per Bolt.new.  
- Rimuovere:
  - build directories (es. `dist/`, `build/`, `node_modules/`, `__pycache__/`);
  - asset pesanti (video, immagini, dataset, PDF);
  - file di test non essenziali o documenti di supporto voluminosi.  
- Mantenere l’integrità del progetto: il codice deve poter essere avviato o analizzato in Bolt senza errori.

### 4. Testare e confermare l’import
- Effettuare un nuovo tentativo di import su Bolt.new.  
- Annotare eventuali limiti residui o errori segnalati da Bolt.  
- Se necessario, iterare l’ottimizzazione fino al successo dell’import.

### 5. Documentare il risultato
- Creare un file `BOLT_GUIDE.md` nel repository contenente:
  - quali file sono stati esclusi e perché;
  - eventuali limitazioni note;
  - istruzioni per aggiornare la versione “light” in futuro.  
- Fornire un riepilogo delle fonti consultate e delle scelte progettuali effettuate.

---

## Criteri di successo
- Il progetto (o la versione “light”) viene importato su Bolt.new **senza errori di dimensione**.  
- L’ambiente in Bolt è pienamente utilizzabile per sviluppo, test e collaborazione.  
- Le esclusioni sono giustificate, reversibili e documentate.  
- La guida `BOLT_GUIDE.md` è chiara e aggiornata.

---

## Fonti di riferimento
- Documentazione ufficiale Bolt.new su limiti di progetto e file di esclusione.  
- Articoli tecnici o issue tracker di Bolt e Bolt DIY.  
- Discussioni su strategie di riduzione progetto e setup GitHub compatibile.  

---

## Note per Codex
- Non servono istruzioni tecniche passo-passo: **definisci il piano e i motivi**.  
- Il focus è **capire il problema e risolverlo in modo strategico**, non solo “comprimere” o “cancellare file”.  
- Lascia traccia delle scelte, così altri possono ripetere il processo in futuro.
