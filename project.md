# 🧩 PRD – Parte 1: Ottimizzazione SEO On-Page per www.articpulizie.it

## 🎯 Obiettivo
Ottimizzare ogni pagina del sito *www.articpulizie.it* per massimizzare la visibilità organica locale e settoriale (“impresa di pulizie Brescia”, “pulizie uffici Brescia”, “sanificazione ambienti”, ecc.), migliorando struttura, tag, e contenuti in ottica SEO.

---

## 🔖 1. Titoli e Meta Description

### Requisiti:
- Ogni pagina deve avere **un titolo unico** e ottimizzato per la keyword principale.
- Lunghezza: max **60 caratteri** per `<title>` e **160 caratteri** per `<meta description>`.
- Keyword principale deve apparire **all’inizio del titolo**.

### Formato standard:
<title>Pulizie [Servizio] a [Città] | Artic Pulizie</title> <meta name="description" content="Impresa di pulizie a [Città]. Servizi professionali di [Servizio]. Preventivo gratuito in 24 ore."> ```
Esempi:
Home:
Impresa di Pulizie a Brescia e Provincia | Artic Pulizie

Servizio:
Pulizie Uffici a Brescia | Artic Pulizie Professionali

Local page:
Sanificazione Ambienti a Chiari | Artic Pulizie Brescia

🧱 2. Heading Structure (H1-H3)
Obiettivi:
Migliorare leggibilità semantica e SEO.

Creare una gerarchia logica tra i titoli (un solo <h1> per pagina).

Regole:
Livello	Uso	Esempio
H1	Keyword principale	“Pulizie uffici a Brescia”
H2	Sottoargomenti o sezioni	“Perché scegliere Artic Pulizie”
H3	Dettagli o bullet point espansi	“I nostri prodotti certificati”

🧭 3. Canonical Tag e Robots Meta
Implementazione:
Aggiungere un tag canonical univoco per ogni pagina:

bash
Copy code
<link rel="canonical" href="https://www.articpulizie.it/[slug]" />
Robots:
php-template
Copy code
<meta name="robots" content="index, follow" />
Tutte le pagine devono essere indicizzabili, esclusi eventuali URL di test o parametrici.

🔗 4. Internal Linking Strategico
Regole:
Ogni pagina di servizio deve collegarsi ad almeno una pagina locale.

Ogni pagina locale deve collegarsi alla relativa pagina principale di servizio.

Il testo del link (anchor text) deve essere naturale e contenere keyword parziali.

Esempio:
“Scopri come funziona la nostra pulizia post-cantiere a Brescia.”

Pagine chiave da linkare sempre:
/servizi

/dove-operiamo

/richiedi-preventivo

/recensioni

🧩 5. Schema Markup (JSON-LD)
LocalBusiness Schema:
Implementare su tutte le pagine (specialmente sulla home e “Dove Operiamo”):

json
Copy code
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Artic Pulizie",
  "image": "https://www.articpulizie.it/assets/logo.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Via [INDIRIZZO]",
    "addressLocality": "Brescia",
    "postalCode": "25100",
    "addressCountry": "IT"
  },
  "telephone": "+39 [NUMERO]",
  "url": "https://www.articpulizie.it",
  "priceRange": "€€",
  "areaServed": "Brescia e provincia"
}
FAQ Schema:
Inserire in pagine FAQ e servizi principali:

json
Copy code
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Fate pulizie per uffici a Brescia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Sì, offriamo servizi completi di pulizie uffici a Brescia e provincia, con piani personalizzati per aziende di ogni dimensione."
      }
    }
  ]
}
Review Schema:
Nella pagina /recensioni, usare AggregateRating:

json
Copy code
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Artic Pulizie",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "87"
  }
}
📷 6. Immagini e Alt Tag
Ogni immagine deve avere alt descrittivo con parole chiave.

Nomi file ottimizzati SEO (es. pulizie-uffici-brescia.webp).

Tutte le immagini “above the fold” devono avere dimensione ottimizzata e width/height definiti.

📍 7. Dati Locali NAP
Il footer del sito deve sempre contenere il NAP coerente (Name, Address, Phone):

nginx
Copy code
Artic Pulizie Srl  
Via [indirizzo completo], 25100 Brescia  
Tel: +39 [numero]  
Email: info@articpulizie.it
Stesso formato in Google My Business, schema markup e pagina contatti.

📈 8. Obiettivo Finale
Dopo l’implementazione di questa Parte 1:

Tutte le pagine avranno SEO on-page perfetto (titoli, meta, heading, linking).

Google comprenderà chiaramente struttura e servizio di ogni URL.

Si otterrà una base solida per le ottimizzazioni tecniche e automatizzazioni SEO future (Parti 2 e 3).