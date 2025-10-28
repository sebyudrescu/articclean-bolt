import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

interface ContentVariation {
  intro: string[];
  whyChooseUs: string[][];
  problems: string[][];
  ctas: Array<{ text: string; subtext: string }>;
  h2Variations: Record<string, string[]>;
}

const contentVariations: Record<string, ContentVariation> = {
  'pulizie-uffici': {
    intro: [
      'Garantiamo ambienti di lavoro impeccabili per {location}, con interventi programmati che rispettano le esigenze operative dei vostri uffici.',
      'Il nostro team opera su {location} con protocolli certificati per uffici, studi professionali e spazi direzionali.',
      'Supportiamo la produttività delle aziende di {location} con servizi di pulizia professionale per ambienti lavorativi.',
    ],
    whyChooseUs: [
      ['Turni flessibili mattutini, serali o notturni per non interferire con l\'attività', 'Personale formato su protocolli per ambienti professionali', 'Gestione accessi con badge per sedi con sicurezza controllata', 'Pulizia certificata di postazioni, bagni e sale riunioni'],
      ['Interventi programmati negli orari più comodi per la vostra attività', 'Check-list digitali per tracciare ogni intervento di pulizia', 'Prodotti ecologici certificati per la salute dei dipendenti', 'Team dedicato che conosce le specifiche del vostro ufficio'],
      ['Sopralluogo gratuito per definire frequenze e aree critiche', 'Flessibilità negli orari per rispettare le riunioni e le attività', 'Materiali professionali per ogni tipo di superficie', 'Report periodici sugli interventi effettuati'],
    ],
    problems: [
      ['Polvere accumulata su scrivanie e arredi', 'Bagni aziendali non igienizzati correttamente', 'Vetrate opache che riducono la luminosità degli spazi', 'Tappeti e pavimenti macchiati dal traffico quotidiano'],
      ['Cestini che si riempiono rapidamente nelle giornate operative', 'Sale riunioni non pronte per accogliere clienti', 'Aree break con stoviglie e superfici sporche', 'Corridoi e atri che danno un\'immagine trascurata'],
      ['Superfici tecniche (schermi, tastiere) cariche di batteri', 'Angoli difficili da raggiungere con polvere stratificata', 'Pavimentazioni che perdono brillantezza nel tempo', 'Odori sgradevoli nei bagni o negli spazi comuni'],
    ],
    ctas: [
      { text: 'Richiedi un sopralluogo gratuito', subtext: 'Risposta entro 24 ore via email o WhatsApp' },
      { text: 'Preventivo personalizzato in giornata', subtext: 'Sopralluogo e consulenza senza impegno' },
      { text: 'Contattaci per un piano di pulizie su misura', subtext: 'Team disponibile anche per urgenze' },
    ],
    h2Variations: {
      whyChoose: ['Perché sceglierci a {location}', 'I vantaggi di Artic Clean a {location}', 'Cosa ci rende diversi a {location}'],
      coverage: ['Aree coperte a {location}', 'Zone servite a {location}', 'Dove operiamo a {location}'],
      problems: ['Problemi tipici a {location}', 'Sfide comuni degli uffici a {location}', 'Cosa risolviamo a {location}'],
      detailed: ['Cosa facciamo nel dettaglio', 'I nostri interventi', 'Servizi specifici per uffici'],
      standards: ['Standard e garanzie', 'I nostri impegni', 'Qualità certificata'],
    },
  },
  'pulizie-condomini': {
    intro: [
      'Manteniamo scale, androni e aree comuni sempre accoglienti per i condomini di {location}, con interventi programmati e flessibili.',
      'Supportiamo amministratori e condomini a {location} con servizi professionali per la pulizia delle parti comuni.',
      'Gestiamo la pulizia condominiale a {location} con frequenze personalizzate e attenzione ai dettagli.',
    ],
    whyChooseUs: [
      ['Frequenze flessibili: settimanali, bisettimanali o su chiamata', 'Interventi su scale, androni, cortili e aree verdi', 'Gestione coordinata con amministratori di condominio', 'Pulizia straordinaria prima di assemblee o eventi'],
      ['Personale affidabile con riferimenti verificabili', 'Rispetto degli orari concordati con i residenti', 'Prodotti specifici per marmi, pietra e superfici delicate', 'Report fotografici prima e dopo gli interventi'],
      ['Servizio di emergenza per situazioni impreviste', 'Pulizia vetrate comuni e lucernari', 'Rimozione foglie e detriti da cortili e aree esterne', 'Contratti annuali con tariffe competitive'],
    ],
    problems: [
      ['Scale con polvere e impronte visibili', 'Androni trascurati che danno cattiva impressione', 'Cortili con foglie e rifiuti accumulati', 'Ascensori con vetri sporchi e pulsantiere non igienizzate'],
      ['Aree comuni che peggiorano l\'immagine del palazzo', 'Accumulo di sporco negli angoli difficili da raggiungere', 'Vetrate opache che riducono la luminosità', 'Pavimentazioni scivolose dopo la pioggia'],
      ['Residui di cantieri o traslochi non rimossi', 'Atrii con polvere e macchie persistenti', 'Aree esterne invase da erbacce', 'Cestini dei rifiuti maleodoranti'],
    ],
    ctas: [
      { text: 'Sopralluogo condominiale gratuito', subtext: 'Preventivo trasparente per l\'amministratore' },
      { text: 'Piano pulizie personalizzato', subtext: 'Adatto alle esigenze del condominio' },
      { text: 'Richiedi un preventivo oggi', subtext: 'Risposta rapida entro 24 ore' },
    ],
    h2Variations: {
      whyChoose: ['Perché sceglierci per il condominio', 'I vantaggi per amministratori e residenti', 'Affidabilità a {location}'],
      coverage: ['Aree servite a {location}', 'Dove interveniamo', 'Zone coperte'],
      problems: ['Problemi comuni nei condomini', 'Cosa risolviamo', 'Sfide tipiche a {location}'],
      detailed: ['Servizi per condomini', 'Cosa include il nostro servizio', 'Interventi dettagliati'],
      standards: ['Garanzie e standard', 'Il nostro impegno', 'Qualità assicurata'],
    },
  },
  'pulizie-industriali': {
    intro: [
      'Puliamo capannoni e aree produttive a {location} con macchinari professionali e protocolli di sicurezza certificati.',
      'Supportiamo le industrie di {location} con interventi di pulizia per pavimenti industriali, spogliatoi e aree operative.',
      'Gestiamo la pulizia di ambienti produttivi a {location} con squadre specializzate e attrezzature dedicate.',
    ],
    whyChooseUs: [
      ['Lavasciuga industriali per grandi superfici', 'Pulizia di pavimenti in resina, cemento e gres', 'Interventi su spogliatoi, mense e aree di servizio', 'Turni notturni o festivi per non bloccare la produzione'],
      ['Rimozione di oli, grassi e residui industriali', 'Sanificazione di aree sensibili e ambienti controllati', 'Gestione rifiuti speciali in conformità alle normative', 'Squadre formate sulla sicurezza in ambienti produttivi'],
      ['Pulizia aree carico/scarico e magazzini', 'Depolverazione di scaffalature e macchinari', 'Interventi programmati con report dettagliati', 'Disponibilità per emergenze e situazioni straordinarie'],
    ],
    problems: [
      ['Pavimenti industriali opachi e unti', 'Polveri e residui che si accumulano sulle linee produttive', 'Spogliatoi e bagni aziendali non igienizzati', 'Aree carico/scarico con detriti e sporco'],
      ['Oli e grassi che rendono scivolose le superfici', 'Accumulo di materiali nelle zone di transito', 'Vetrate sporche che riducono la luminosità naturale', 'Aree esterne con fango e residui'],
      ['Mancanza di manutenzione ordinaria che danneggia i pavimenti', 'Sporco ostinato nelle fughe e negli angoli', 'Cattivi odori negli spazi comuni', 'Superfici non conformi agli audit di qualità'],
    ],
    ctas: [
      { text: 'Sopralluogo tecnico gratuito', subtext: 'Valutiamo le esigenze del vostro capannone' },
      { text: 'Preventivo per pulizie industriali', subtext: 'Soluzioni su misura per la produzione' },
      { text: 'Contattaci per un piano personalizzato', subtext: 'Interventi programmati senza fermi' },
    ],
    h2Variations: {
      whyChoose: ['Perché sceglierci per capannoni industriali', 'Vantaggi per aziende produttive', 'Esperienza a {location}'],
      coverage: ['Aree industriali servite', 'Zone coperte a {location}', 'Dove operiamo'],
      problems: ['Sfide tipiche degli ambienti industriali', 'Problemi comuni a {location}', 'Cosa risolviamo'],
      detailed: ['Servizi per capannoni', 'Interventi specifici', 'Cosa facciamo nel dettaglio'],
      standards: ['Standard di sicurezza', 'Garanzie e certificazioni', 'Il nostro impegno'],
    },
  },
  'pulizie-post-cantiere': {
    intro: [
      'Interveniamo dopo lavori edili a {location} per rimuovere detriti, polveri e residui, consegnando ambienti pronti all\'uso.',
      'Supportiamo imprese edili e privati a {location} con pulizie post-ristrutturazione certificate e puntuali.',
      'Rimuoviamo tracce di cantiere a {location} con attrezzature professionali e prodotti specifici.',
    ],
    whyChooseUs: [
      ['Rimozione di polveri, calcinacci e residui di stucco', 'Pulizia accurata di vetri e infissi nuovi', 'Trattamento di pavimenti in ceramica, parquet o resina', 'Sanificazione completa prima della consegna'],
      ['Interventi rapidi per rispettare le scadenze di cantiere', 'Squadre attrezzate con aspiratori industriali e detergenti specifici', 'Pulizia di bagni, cucine e impianti sanitari nuovi', 'Rimozione di etichette, adesivi e protezioni'],
      ['Disponibilità anche nei weekend per consegne urgenti', 'Coordinamento con capocantiere e direttori lavori', 'Pulizia finale certificata per passaggi di proprietà', 'Interventi su abitazioni, uffici e spazi commerciali'],
    ],
    problems: [
      ['Polvere di cantiere su ogni superficie', 'Residui di stucco e cemento su pavimenti e vetri', 'Finestre e infissi imbrattati durante i lavori', 'Bagni con tracce di silicone e materiali edili'],
      ['Pavimenti opachi ricoperti di sporco ostinato', 'Macchie di vernice su vetri e serramenti', 'Odori di materiali edili persistenti', 'Protezioni e nastri adesivi difficili da rimuovere'],
      ['Ambienti non presentabili per i nuovi occupanti', 'Calcinacci e detriti negli angoli', 'Superfici delicate danneggiate da pulizie improvvisate', 'Tempi stretti per la riconsegna'],
    ],
    ctas: [
      { text: 'Sopralluogo post-cantiere gratuito', subtext: 'Preventivo in giornata per interventi rapidi' },
      { text: 'Pulizia finale certificata', subtext: 'Ambienti pronti per la consegna' },
      { text: 'Richiedi un intervento urgente', subtext: 'Disponibili anche nei weekend' },
    ],
    h2Variations: {
      whyChoose: ['Perché sceglierci dopo i lavori', 'Affidabilità post-cantiere a {location}', 'Vantaggi del nostro servizio'],
      coverage: ['Dove interveniamo a {location}', 'Zone coperte', 'Aree servite'],
      problems: ['Problemi tipici dopo ristrutturazioni', 'Sfide comuni a {location}', 'Cosa risolviamo'],
      detailed: ['Servizi post-cantiere dettagliati', 'Cosa include la pulizia finale', 'I nostri interventi'],
      standards: ['Garanzie e certificazioni', 'Standard di qualità', 'Il nostro impegno'],
    },
  },
  'sanificazione-ambienti': {
    intro: [
      'Sanifichiamo ambienti a {location} con prodotti certificati e protocolli che garantiscono igiene profonda e sicurezza.',
      'Interveniamo a {location} per sanificazioni certificate di uffici, condomini, negozi e spazi pubblici.',
      'Garantiamo ambienti sicuri a {location} con trattamenti di sanificazione professionale e documentati.',
    ],
    whyChooseUs: [
      ['Prodotti virucidi e battericidi certificati', 'Nebulizzazione con atomizzatori professionali', 'Sanificazione di superfici, arredi e sistemi di aerazione', 'Certificazioni rilasciate al termine dell\'intervento'],
      ['Interventi programmati o su chiamata per emergenze sanitarie', 'Personale formato sui protocolli di sanificazione', 'Trattamenti specifici per ambienti sensibili (scuole, studi medici)', 'Rispetto delle normative vigenti in materia di igiene'],
      ['Sanificazione post-contagio o in caso di focolai', 'Pulizia e disinfezione di condizionatori e filtri', 'Interventi rapidi entro 24 ore dalla richiesta', 'Report dettagliati con foto e schede tecniche dei prodotti'],
    ],
    problems: [
      ['Ambienti con rischio di contaminazione batterica', 'Necessità di certificare l\'igiene per clienti o ispettori', 'Spazi chiusi con aria viziata e potenziali patogeni', 'Eventi improvvisi che richiedono sanificazione urgente'],
      ['Uffici con alta frequentazione che necessitano di igienizzazione periodica', 'Condomini con casi sospetti o accertati di malattie infettive', 'Negozi che devono rispettare protocolli igienici stringenti', 'Ambienti dove si lavora con alimenti o prodotti sensibili'],
      ['Superfici ad alto contatto (maniglie, pulsantiere) non disinfettate', 'Impianti di condizionamento che diffondono batteri', 'Mancanza di documentazione per audit o controlli', 'Cattivi odori persistenti dovuti a contaminazioni'],
    ],
    ctas: [
      { text: 'Richiedi una sanificazione certificata', subtext: 'Intervento rapido con documentazione completa' },
      { text: 'Preventivo sanificazione urgente', subtext: 'Disponibili anche in 24 ore' },
      { text: 'Sopralluogo gratuito per ambienti sensibili', subtext: 'Protocolli personalizzati certificati' },
    ],
    h2Variations: {
      whyChoose: ['Perché scegliere Artic Clean per la sanificazione', 'Affidabilità e certificazioni a {location}', 'I vantaggi della sanificazione professionale'],
      coverage: ['Dove sanifichiamo a {location}', 'Aree e ambienti serviti', 'Zone coperte'],
      problems: ['Quando serve una sanificazione professionale', 'Problemi comuni a {location}', 'Situazioni che richiedono intervento'],
      detailed: ['Cosa include la sanificazione', 'Protocolli e prodotti utilizzati', 'I nostri interventi'],
      standards: ['Certificazioni e garanzie', 'Standard igienici', 'Normative rispettate'],
    },
  },
  'pulizia-vetri': {
    intro: [
      'Puliamo vetrate e finestre a {location} con attrezzature professionali per risultati senza aloni e massima trasparenza.',
      'Interveniamo su vetrate di uffici, negozi e condomini a {location} con tecniche certificate e prodotti specifici.',
      'Garantiamo vetri impeccabili a {location} con pulizia interna ed esterna, anche per grandi altezze.',
    ],
    whyChooseUs: [
      ['Pulizia di vetrate esterne anche ai piani alti', 'Prodotti specifici che non lasciano aloni', 'Interventi su vetrine di negozi per massima visibilità', 'Pulizia di lucernari e vetrate difficili da raggiungere'],
      ['Attrezzature telescopiche e piattaforme per accessi difficili', 'Frequenze personalizzate: mensili, trimestrali o su chiamata', 'Pulizia coordinata con altri servizi condominiali', 'Interventi anche in orari serali per attività commerciali'],
      ['Rimozione di tracce di pioggia, smog e depositi atmosferici', 'Trattamento di vetri opacizzati dal tempo', 'Pulizia di telai e guarnizioni', 'Risultati certificati con garanzia di rifacimento'],
    ],
    problems: [
      ['Vetrate opache che riducono la luminosità degli interni', 'Aloni e striature visibili dopo pioggia o pulizie improvvisate', 'Vetrine di negozi sporche che danneggiano l\'immagine', 'Finestre ai piani alti difficili da raggiungere'],
      ['Depositi di smog e polveri sottili sulle superfici', 'Vetri interni sporchi per impronte e residui', 'Lucernari coperti da foglie e detriti', 'Perdita di trasparenza dovuta a trattamenti errati'],
      ['Vetrate condominiali trascurate da anni', 'Sporco ostinato da cantieri o lavori stradali', 'Superfici vetrate esposte a zone trafficate', 'Mancanza di manutenzione programmata'],
    ],
    ctas: [
      { text: 'Sopralluogo gratuito per vetrate', subtext: 'Preventivo trasparente in giornata' },
      { text: 'Preventivo pulizia vetri', subtext: 'Interventi programmati o singoli' },
      { text: 'Richiedi un intervento oggi', subtext: 'Vetri impeccabili senza aloni' },
    ],
    h2Variations: {
      whyChoose: ['Perché sceglierci per la pulizia vetri', 'Vantaggi a {location}', 'Esperienza e professionalità'],
      coverage: ['Dove operiamo a {location}', 'Aree servite', 'Zone coperte'],
      problems: ['Problemi comuni con le vetrate', 'Sfide tipiche a {location}', 'Cosa risolviamo'],
      detailed: ['Servizi per vetri', 'Cosa include il nostro intervento', 'Tecniche e prodotti'],
      standards: ['Garanzie e qualità', 'Il nostro impegno', 'Standard professionali'],
    },
  },
  'gestione-carrellati': {
    intro: [
      'Gestiamo bidoni e raccolta differenziata per condomini a {location}, con servizi di lavaggio e posizionamento programmato.',
      'Supportiamo amministratori condominiali a {location} nella gestione dei carrellati e nel rispetto delle normative ambientali.',
      'Coordiniamo il servizio bidoni a {location} per mantenere aree comuni pulite e organizzate.',
    ],
    whyChooseUs: [
      ['Posizionamento e ritiro dei bidoni nei giorni di raccolta', 'Lavaggio periodico con prodotti igienizzanti', 'Gestione corretta dei rifiuti secondo normative locali', 'Interventi su richiesta per bidoni straordinari'],
      ['Coordinamento con i calendari comunali di raccolta', 'Rimozione di rifiuti abbandonati vicino ai carrellati', 'Sanificazione anti-odori e anti-insetti', 'Servizio affidabile per amministratori e residenti'],
      ['Monitoraggio dello stato dei bidoni e segnalazioni', 'Sostituzione di carrellati danneggiati in coordinamento con il comune', 'Pulizia delle aree di stoccaggio', 'Contratti annuali con tariffe competitive'],
    ],
    problems: [
      ['Bidoni maleodoranti che disturbano i residenti', 'Rifiuti abbandonati vicino ai carrellati', 'Disorganizzazione nella gestione della raccolta', 'Aree bidoni sporche e poco igieniche'],
      ['Residenti che non rispettano i giorni di raccolta', 'Bidoni non lavati che attirano insetti', 'Mancanza di coordinamento con il servizio comunale', 'Lamentele condominiali per cattivi odori'],
      ['Carrellati posizionati in modo disordinato', 'Accumulo di rifiuti ingombranti non ritirati', 'Contenitori danneggiati o rotti', 'Spazi comuni degradati dalla presenza dei bidoni'],
    ],
    ctas: [
      { text: 'Attiva il servizio carrellati', subtext: 'Gestione completa per il condominio' },
      { text: 'Preventivo gestione bidoni', subtext: 'Tariffe mensili trasparenti' },
      { text: 'Sopralluogo condominiale gratuito', subtext: 'Organizziamo il servizio raccolta' },
    ],
    h2Variations: {
      whyChoose: ['Perché affidare i carrellati ad Artic Clean', 'Vantaggi per condomini a {location}', 'Gestione professionale'],
      coverage: ['Dove gestiamo carrellati', 'Aree servite a {location}', 'Zone coperte'],
      problems: ['Problemi comuni con i bidoni', 'Sfide tipiche a {location}', 'Cosa risolviamo'],
      detailed: ['Servizi inclusi', 'Cosa facciamo per i carrellati', 'Gestione completa'],
      standards: ['Garanzie e impegni', 'Rispetto delle normative', 'Il nostro servizio'],
    },
  },
  'giardinaggio': {
    intro: [
      'Curiamo aree verdi condominiali a {location} con interventi di sfalcio, potatura e manutenzione programmata.',
      'Manteniamo giardini e spazi esterni a {location} per condomini che desiderano aree verdi curate tutto l\'anno.',
      'Gestiamo la manutenzione del verde a {location} con squadre specializzate e attrezzature professionali.',
    ],
    whyChooseUs: [
      ['Sfalcio prati con raccolta e smaltimento dell\'erba', 'Potatura di siepi, alberi e arbusti ornamentali', 'Pulizia di aiuole e rimozione erbacce', 'Trattamenti antiparassitari e fertilizzazioni stagionali'],
      ['Interventi programmati mensili o stagionali', 'Pulizia foglie in autunno e manutenzione invernale', 'Sistemazione di vialetti e bordure', 'Squadre con esperienza in giardinaggio condominiale'],
      ['Gestione rifiuti verdi secondo normative', 'Coordinamento con amministratori condominiali', 'Disponibilità per interventi straordinari pre-eventi', 'Contratti annuali con calendario stabilito'],
    ],
    problems: [
      ['Prati incolti e disordinati che peggiorano l\'immagine del condominio', 'Siepi non potate che invadono marciapiedi o parcheggi', 'Accumulo di foglie e detriti vegetali', 'Erbacce che rovinano aiuole e vialetti'],
      ['Piante secche o malate non trattate', 'Aree verdi trascurate che abbassano il valore immobiliare', 'Necessità di interventi stagionali coordinati', 'Mancanza di manutenzione che causa degrado'],
      ['Giardini invasi da vegetazione incontrollata', 'Alberi con rami pericolanti', 'Vialetti ricoperti da muschio e sporco', 'Problemi di decoro segnalati dai residenti'],
    ],
    ctas: [
      { text: 'Sopralluogo aree verdi gratuito', subtext: 'Piano manutenzione personalizzato' },
      { text: 'Preventivo giardinaggio condominiale', subtext: 'Interventi programmati o singoli' },
      { text: 'Attiva il servizio verde', subtext: 'Giardini curati tutto l\'anno' },
    ],
    h2Variations: {
      whyChoose: ['Perché sceglierci per il verde', 'Vantaggi per condomini a {location}', 'Esperienza nel giardinaggio'],
      coverage: ['Dove curiamo aree verdi', 'Zone servite a {location}', 'Aree coperte'],
      problems: ['Problemi comuni nelle aree verdi', 'Sfide tipiche a {location}', 'Cosa risolviamo'],
      detailed: ['Servizi per il verde', 'Cosa include la manutenzione', 'I nostri interventi'],
      standards: ['Garanzie e impegni', 'Standard di cura', 'Il nostro servizio'],
    },
  },
};

function generateLocalContent(
  serviceSlug: string,
  locationName: string,
  locationSlug: string,
  localReferences: string[],
  variationIndex: number
): any {
  const variations = contentVariations[serviceSlug];
  if (!variations) {
    throw new Error(`No variations found for service: ${serviceSlug}`);
  }

  const introIndex = variationIndex % variations.intro.length;
  const whyIndex = variationIndex % variations.whyChooseUs.length;
  const problemsIndex = variationIndex % variations.problems.length;
  const ctaIndex = variationIndex % variations.ctas.length;

  const usedReferences = localReferences.slice(0, 3);
  const coverageAreas = [...usedReferences, `aree limitrofe di ${locationName}`];

  const introText = variations.intro[introIndex]
    .replace(/{location}/g, locationName);

  const whyChooseUs = variations.whyChooseUs[whyIndex];
  const typicalProblems = variations.problems[problemsIndex];
  const cta = variations.ctas[ctaIndex];

  const h2Keys = Object.keys(variations.h2Variations);
  const h2Titles: Record<string, string> = {};
  h2Keys.forEach((key) => {
    const options = variations.h2Variations[key];
    const index = variationIndex % options.length;
    h2Titles[key] = options[index].replace(/{location}/g, locationName);
  });

  const sectionOrders = [
    ['whyChoose', 'coverage', 'problems', 'detailed', 'standards'],
    ['coverage', 'whyChoose', 'detailed', 'problems', 'standards'],
    ['whyChoose', 'problems', 'coverage', 'detailed', 'standards'],
  ];
  const sectionOrder = sectionOrders[variationIndex % sectionOrders.length];

  return {
    intro_text: introText,
    why_choose_us: whyChooseUs,
    coverage_areas: coverageAreas,
    typical_problems: typicalProblems,
    cta_text: cta.text,
    cta_subtext: cta.subtext,
    section_order: sectionOrder,
    h2_titles: h2Titles,
  };
}

async function seedLocalPages() {
  console.log('🌱 Starting local pages seeding...');

  const { data: services } = await supabase.from('services').select('*');
  const { data: locations } = await supabase.from('locations').select('*');

  if (!services || !locations) {
    console.error('❌ Failed to fetch services or locations');
    return;
  }

  console.log(`✅ Found ${services.length} services and ${locations.length} locations`);

  let createdCount = 0;
  let variationIndex = 0;

  for (const service of services) {
    for (const location of locations) {
      const slug = `${service.slug}/${location.slug}`;

      const { data: existing } = await supabase
        .from('local_service_pages')
        .select('id')
        .eq('slug', slug)
        .maybeSingle();

      if (existing) {
        console.log(`⏭️  Skipping existing page: ${slug}`);
        continue;
      }

      const content = generateLocalContent(
        service.slug,
        location.name,
        location.slug,
        location.local_references as string[],
        variationIndex
      );

      const h1Title = `${service.name} a ${location.name} – Servizio Professionale Certificato`;
      const metaTitle = `${service.name} ${location.name} | Artic Clean`;
      const metaDescription = `${service.name} professionali a ${location.name}. Sopralluogo gratuito entro 24h. Preventivo trasparente e servizio certificato.`;

      const detailedServices = getDetailedServicesForService(service.slug);
      const standardsGuarantees = getStandardsText();

      const wordCount = calculateWordCount(content, detailedServices, standardsGuarantees);

      const { error } = await supabase.from('local_service_pages').insert({
        service_id: service.id,
        location_id: location.id,
        slug,
        h1_title: h1Title,
        meta_title: metaTitle,
        meta_description: metaDescription,
        intro_text: content.intro_text,
        why_choose_us: content.why_choose_us,
        coverage_areas: content.coverage_areas,
        typical_problems: content.typical_problems,
        detailed_services: detailedServices,
        standards_guarantees: standardsGuarantees,
        cta_text: content.cta_text,
        cta_subtext: content.cta_subtext,
        word_count: wordCount,
        section_order: content.section_order,
        h2_titles: content.h2_titles,
        published: true,
      });

      if (error) {
        console.error(`❌ Error creating page ${slug}:`, error.message);
      } else {
        createdCount++;
        console.log(`✅ Created page ${createdCount}: ${slug}`);
      }

      variationIndex++;
    }
  }

  console.log(`\n🎉 Seeding complete! Created ${createdCount} pages.`);
}

function getDetailedServicesForService(serviceSlug: string): Record<string, string> {
  const servicesMap: Record<string, Record<string, string>> = {
    'pulizie-uffici': {
      'Postazioni di lavoro': 'Pulizia completa di scrivanie, monitor, tastiere e superfici operative',
      'Bagni aziendali': 'Sanificazione di sanitari, lavandini, specchi e distributori',
      'Sale riunioni': 'Pulizia tavoli, sedie, lavagne e superfici vetrate',
      'Aree comuni': 'Corridoi, atri, reception e sale d\'attesa',
      'Cucine e aree break': 'Pulizia elettrodomestici, piani cottura e stoviglie',
    },
    'pulizie-condomini': {
      'Scale condominiali': 'Pulizia gradini, corrimano e pianerottoli',
      'Androni e atri': 'Lavaggio pavimenti e superfici comuni',
      'Ascensori': 'Pulizia interna, vetri e pulsantiere',
      'Cortili e aree esterne': 'Spazzamento, rimozione foglie e detriti',
      'Vetrate comuni': 'Pulizia di portoni vetrati e finestre comuni',
    },
    'pulizie-industriali': {
      'Pavimenti industriali': 'Lavaggio con lavasciuga professionali per cemento, resina e gres',
      'Aree produttive': 'Depolverazione macchinari e linee di produzione',
      'Spogliatoi e bagni': 'Sanificazione completa per il personale',
      'Mense aziendali': 'Pulizia tavoli, sedie e aree di servizio',
      'Aree carico/scarico': 'Rimozione detriti e pulizia rampe',
    },
    'pulizie-post-cantiere': {
      'Rimozione detriti': 'Asportazione di calcinacci, polveri e residui edili',
      'Pulizia vetri e infissi': 'Rimozione di stucco, silicone e protezioni',
      'Pavimenti': 'Trattamento specifico per ceramica, parquet o resina',
      'Bagni e cucine': 'Sanificazione sanitari e superfici nuove',
      'Rimozione protezioni': 'Etichette, nastri adesivi e film protettivi',
    },
    'sanificazione-ambienti': {
      'Superfici e arredi': 'Nebulizzazione con prodotti virucidi certificati',
      'Sistemi di aerazione': 'Pulizia e disinfezione di condizionatori e filtri',
      'Aree ad alto contatto': 'Trattamento di maniglie, pulsantiere, corrimano',
      'Ambienti sensibili': 'Protocolli specifici per scuole, studi medici, negozi',
      'Certificazione': 'Rilascio documentazione e schede tecniche prodotti',
    },
    'pulizia-vetri': {
      'Vetrate esterne': 'Pulizia anche ai piani alti con attrezzature telescopiche',
      'Vetrate interne': 'Rimozione impronte e aloni',
      'Vetrine commerciali': 'Pulizia frequente per massima visibilità',
      'Lucernari': 'Pulizia di superfici difficili da raggiungere',
      'Telai e guarnizioni': 'Pulizia completa di cornici e accessori',
    },
    'gestione-carrellati': {
      'Posizionamento bidoni': 'Ritiro e collocazione nei giorni di raccolta',
      'Lavaggio carrellati': 'Igienizzazione periodica con prodotti specifici',
      'Gestione rifiuti': 'Coordinamento con calendario comunale',
      'Aree di stoccaggio': 'Pulizia e sanificazione spazi bidoni',
      'Monitoraggio': 'Controllo stato carrellati e segnalazioni',
    },
    'giardinaggio': {
      'Sfalcio prati': 'Taglio erba con raccolta e smaltimento',
      'Potatura': 'Siepi, alberi e arbusti ornamentali',
      'Pulizia aiuole': 'Rimozione erbacce e sistemazione bordure',
      'Pulizia foglie': 'Interventi stagionali autunnali',
      'Trattamenti': 'Fertilizzazioni e antiparassitari',
    },
  };

  return servicesMap[serviceSlug] || {};
}

function getStandardsText(): string {
  return `Il nostro servizio garantisce puntualità, personale formato e certificato, check-list digitali per ogni intervento. Offriamo sopralluoghi e preventivi gratuiti, disponibilità per urgenze (esclusa domenica) e contratti periodici o interventi singoli su richiesta.`;
}

function calculateWordCount(content: any, detailedServices: any, standards: string): number {
  let totalWords = 0;

  totalWords += content.intro_text.split(' ').length;
  content.why_choose_us.forEach((item: string) => {
    totalWords += item.split(' ').length;
  });
  content.coverage_areas.forEach((item: string) => {
    totalWords += item.split(' ').length;
  });
  content.typical_problems.forEach((item: string) => {
    totalWords += item.split(' ').length;
  });
  Object.values(detailedServices).forEach((desc: any) => {
    totalWords += desc.split(' ').length;
  });
  totalWords += standards.split(' ').length;
  totalWords += content.cta_text.split(' ').length;
  totalWords += content.cta_subtext.split(' ').length;

  return totalWords;
}

seedLocalPages().catch(console.error);
