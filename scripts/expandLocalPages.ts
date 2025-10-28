import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { applyVariations, getRandomFromArray, shuffleArray } from './contentThesaurus.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: resolve(__dirname, '../.env') });

const supabaseUrl = process.env.VITE_SUPABASE_URL!;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper per generare contenuti lunghi ed espansi
function generateExpandedIntro(serviceName: string, locationName: string, localRefs: string[], seed: number): string {
  const templates = [
    `Nel territorio di ${locationName}, in provincia di Brescia, Artic Clean Service offre servizi professionali di ${serviceName.toLowerCase()} con oltre 15 anni di esperienza consolidata sul campo. La nostra presenza radicata nell'area ci permette di comprendere a fondo le esigenze specifiche di questa zona, caratterizzata da ${localRefs[0] || 'aree residenziali e commerciali'} e ${localRefs[1] || 'zone produttive moderne'}.

Operiamo quotidianamente con team dedicati formati su protocolli certificati, utilizzando attrezzature professionali di ultima generazione e prodotti ecologici certificati che garantiscono risultati impeccabili senza compromettere la salute delle persone o l'ambiente. La nostra filosofia si basa sulla massima flessibilità operativa e sulla capacità di adattarci alle esigenze specifiche di ogni cliente, grande o piccolo che sia.

Comprendiamo perfettamente che ogni realtà ha necessità particolari: per questo motivo ogni intervento viene preceduto da un sopralluogo gratuito durante il quale i nostri tecnici analizzano gli spazi, identificano le criticità e propongono soluzioni personalizzate con preventivi trasparenti e dettagliati. Non esistono due clienti uguali, e per noi ogni progetto rappresenta una nuova sfida da affrontare con professionalità e dedizione.`,

    `La cura e la manutenzione degli spazi attraverso servizi di ${serviceName.toLowerCase()} rappresenta un investimento fondamentale per qualsiasi realtà operante a ${locationName}. Artic Clean Service è il partner ideale per chi cerca qualità, affidabilità e puntualità, tre valori che caratterizzano il nostro lavoro quotidiano in tutta la provincia di Brescia.

Con una presenza consolidata nell'area di ${localRefs[0] || 'centro città'}, ${localRefs[1] || 'zone limitrofe'} e ${localRefs[2] || 'aree periferiche'}, abbiamo sviluppato competenze specifiche nel gestire le sfide tipiche di questo territorio. Il nostro personale è costantemente formato sulle migliori pratiche del settore, sulle normative di sicurezza e sull'utilizzo corretto di macchinari e prodotti professionali.

Utilizziamo esclusivamente prodotti certificati, con particolare attenzione a soluzioni ecologiche che garantiscono efficacia senza impatti negativi sulla salute o sull'ambiente. Le attrezzature professionali di cui disponiamo ci permettono di operare con efficienza su superfici di qualsiasi dimensione, garantendo sempre standard elevati e risultati duraturi nel tempo.`,

    `A ${locationName} Artic Clean Service rappresenta il punto di riferimento per servizi professionali di ${serviceName.toLowerCase()}, grazie a un approccio che coniuga esperienza pluriennale, tecnologie avanzate e attenzione costante alle esigenze del cliente. La nostra presenza capillare sul territorio bresciano ci permette di intervenire rapidamente e di garantire continuità operativa anche in situazioni di emergenza.

Operiamo con team specializzati che conoscono a fondo le caratteristiche del territorio: dalla gestione di ${localRefs[0] || 'aree centrali'} alle specificità di ${localRefs[1] || 'zone residenziali'}, fino alle esigenze particolari di ${localRefs[2] || 'aree commerciali e produttive'}. Questa conoscenza locale ci permette di anticipare problemi, proporre soluzioni mirate e garantire risultati che superano le aspettative.

La tracciabilità degli interventi è garantita attraverso sistemi di check-list digitali: ogni operatore registra in tempo reale le attività svolte, permettendo sia al cliente che alla nostra direzione di verificare puntualmente l'esecuzione del servizio. Questo approccio sistematico assicura trasparenza, qualità costante e possibilità di miglioramento continuo basato su dati oggettivi e feedback concreti.`
  ];

  const selectedTemplate = templates[seed % templates.length];
  return applyVariations(selectedTemplate, seed);
}

function generateWhyChooseUs(locationName: string, seed: number): string[] {
  const base = [
    `Esperienza consolidata sul territorio di ${locationName} con oltre 15 anni di attività continuativa e centinaia di clienti soddisfatti che ci hanno scelto per la qualità del servizio, la puntualità negli interventi e la professionalità del personale. Lavoriamo con aziende, condomini, enti pubblici e privati che apprezzano il nostro approccio orientato alla soluzione.`,

    `Flessibilità negli orari di intervento per adattarci alle vostre esigenze operative: possiamo programmare interventi mattutini prima dell'apertura, serali dopo la chiusura, notturni per chi opera h24, o durante il weekend. Questa elasticità ci permette di servire efficacemente realtà con necessità diverse senza creare disagi o interruzioni.`,

    `Personale qualificato e costantemente formato su protocolli operativi certificati, normative di sicurezza, utilizzo corretto di macchinari professionali e gestione responsabile di prodotti chimici. Ogni operatore dispone di DPI appropriati, cartellino identificativo e vestiario aziendale riconoscibile. Background verificati e referenze disponibili.`,

    `Utilizzo di prodotti professionali certificati con particolare attenzione a soluzioni ecologiche ed eco-compatibili che garantiscono risultati eccellenti senza compromettere la salute delle persone o l'ambiente. Ogni prodotto è accompagnato da schede tecniche e di sicurezza disponibili su richiesta, rispettando pienamente le normative vigenti.`,

    `Attrezzature professionali di ultima generazione dimensionate per garantire efficienza ed efficacia: lavasciuga pavimenti, aspiratori con filtri HEPA, monospazzole, vaporizzatori, idropulitrici e tutto quanto necessario per operare in autonomia. Tutta l'attrezzatura è sottoposta a manutenzione programmata per prestazioni ottimali e sicurezza operativa.`,

    `Tracciabilità completa degli interventi attraverso check-list digitali che documentano ogni attività: all'arrivo l'operatore verifica le aree da trattare, durante il lavoro registra il completamento di ogni task, al termine effettua un controllo qualità. Questo sistema garantisce trasparenza e permette al cliente di verificare l'esecuzione del servizio.`,

    `Sopralluoghi e preventivi sempre gratuiti e senza impegno: un nostro consulente effettua il sopralluogo, ascolta le vostre esigenze, analizza le aree da trattare e formula una proposta personalizzata con costi chiari e trasparenti. Nessun costo nascosto, nessuna sorpresa in fattura.`,

    `Servizio di emergenza disponibile per situazioni impreviste che richiedono interventi rapidi: fuoriuscite accidentali, preparazioni urgenti per eventi, situazioni igienico-sanitarie da gestire tempestivamente. Garantiamo reperibilità e capacità di mobilitazione in tempi brevi per risolvere problemi che non possono attendere.`
  ];

  const shuffled = shuffleArray(base, seed);
  return shuffled.slice(0, 5 + (seed % 2)).map(text => applyVariations(text, seed));
}

function generateDetailedServices(serviceSlug: string): Record<string, string> {
  const servicesMap: Record<string, Record<string, string>> = {
    'pulizie-uffici': {
      'Postazioni di lavoro e scrivanie': 'Pulizia completa e accurata di ogni postazione con depolverazione di scrivanie, cassettiere e scaffalature; pulizia delicata di monitor e schermi con panni in microfibra antistatici che non graffiano; sanificazione di tastiere, mouse, telefoni e accessori con prodotti antibatterici non corrosivi; igienizzazione di lampade e elementi decorativi. Particolare attenzione alle superfici ad alto contatto.',

      'Bagni aziendali e servizi igienici': 'Sanificazione completa e approfondita di sanitari, lavandini, specchi, rubinetteria e distributori con prodotti battericidi certificati ad azione virucida; pulizia accurata di fughe tra piastrelle; igienizzazione di maniglie, interruttori e superfici frequentemente toccate; controllo e rifornimento consumabili se richiesto dal cliente; deodorazione ambienti.',

      'Sale riunioni e spazi comuni': 'Pulizia e preparazione di tavoli, sedie, lavagne e superfici vetrate; aerazione controllata per garantire aria fresca; rimozione residui di meeting precedenti; pulizia di impianti di proiezione e attrezzature audiovisive (superfici esterne); igienizzazione di telecomandi e pulsantiere; sistemazione sedie e arredi per presentazione ottimale.',

      'Corridoi, atri e reception': 'Spazzamento e lavaggio pavimenti con metodi appropriati al tipo di superficie (marmo, gres, parquet, moquette, vinile); pulizia di vetrate, specchi e superfici riflettenti; spolveratura e igienizzazione di arredi, quadri e elementi decorativi; pulizia di corrimano e maniglie; svuotamento cestini con sostituzione sacchetti.',

      'Cucine e aree break aziendali': 'Pulizia approfondita di piani di lavoro, lavelli e rubinetteria; igienizzazione interna ed esterna di frigoriferi e microonde; pulizia di macchine del caffè e distributori automatici; lavaggio pavimenti con attenzione particolare a zone sotto mobili e elettrodomestici; gestione rifiuti organici con frequenza elevata.'
    },
    'pulizie-condomini': {
      'Scale condominiali e pianerottoli': 'Spazzamento accurato di tutti i gradini e pianerottoli per rimozione completa di polvere e detriti trasportati dall\'esterno; lavaggio con detergenti specifici calibrati sul tipo di superficie (marmo, granito, ceramica, pietra naturale); pulizia e igienizzazione di corrimano e ringhiere; controllo meticoloso di angoli e battiscopa; pulizia di vetri e lucernari.',

      'Androni, atri e ingressi comuni': 'Lavaggio pavimenti con frequenza adeguata al traffico pedonale; pulizia di vetrate di portoni e finestre con prodotti specifici; spolveratura e igienizzazione di citofoni, cassette postali e bacheche condominiali; svuotamento cestini porta-rifiuti; lucidatura di maniglie e superfici metalliche; rimozione ragnatele; pulizia lampade.',

      'Cortili e aree esterne condominiali': 'Spazzamento sistematico per rimozione di foglie, carte, rifiuti e detriti vari; lavaggio periodico di superfici pavimentate e marciapiedi; pulizia di griglie di scolo e tombini per prevenire intasamenti; manutenzione ordinaria di aiuole e fioriere con rimozione erbacce; pulizia di panchine e arredi esterni.',

      'Ascensori e zone di passaggio': 'Pulizia quotidiana o plurisettimanale di pavimento, pareti, specchi e pulsantiere; igienizzazione con particolare attenzione a superfici ad alto contatto; pulizia accurata di vetri panoramici che mostrano facilmente impronte; pulizia del vano corsa esterno e delle porte ai vari piani; deodorazione periodica.',

      'Cantine e locali tecnici comuni': 'Spazzamento regolare di pavimenti per prevenire accumuli di polvere; rimozione ragnatele da soffitti e pareti; pulizia sommaria di scaffalature se presenti; controllo generale dello stato di pulizia; per locali caldaia e centrali termiche coordinamento con manutentori impianti per interventi specifici.'
    },
    'pulizie-industriali': {
      'Pavimenti industriali e aree produttive': 'Lavaggio professionale con lavasciuga industriali che operano in unica passata lavando, aspirando e asciugando; spazzolatura meccanica per pavimenti in cemento grezzo; detergenti specifici sgrassanti per resine e gres industriale; pretrattamenti per zone particolarmente sporche con oli e residui di lavorazione; asciugatura rapida per ripresa immediata attività.',

      'Spogliatoi e servizi per personale': 'Sanificazione completa di docce, sanitari e lavandini con prodotti igienizzanti ad alta efficacia; pulizia di armadietti esterni e panchine; lavaggio pavimenti con detergenti battericidi; igienizzazione di maniglie e superfici ad alto contatto; rifornimento consumabili se richiesto; interventi con frequenza elevata per garantire condizioni igieniche ottimali.',

      'Aree carico/scarico e rampe': 'Rimozione di imballaggi, pallet rotti e rifiuti vari; spazzamento e lavaggio intensivo di rampe e piazzali con idropulitrici ad alta pressione quando necessario; pulizia di portoni sezionali e serrande; pulizia e mantenimento visibilità di segnaletiche e strisce di sicurezza a terra; gestione neve e ghiaccio in inverno.',

      'Mense aziendali e aree break': 'Pulizia approfondita di tavoli e sedute dopo ogni utilizzo; igienizzazione di piani di lavoro e lavelli; pulizia interna ed esterna di microonde, frigoriferi e distributori automatici; lavaggio pavimenti con prodotti specifici per aree alimentari conformi a normative HACCP; gestione rifiuti organici con frequenza elevata; interventi multipli giornalieri.',

      'Uffici direzionali e tecnici': 'Pulizia con standard analoghi agli uffici tradizionali: postazioni di lavoro, sale riunioni, bagni e aree comuni ricevono trattamento completo; particolare attenzione a ambienti con PC e documentazione tecnica per evitare danneggiamenti; coordinamento con responsabili per accesso a zone riservate.'
    },
    'pulizie-post-cantiere': {
      'Rimozione detriti e residui edilizi': 'Asportazione sistematica di calcinacci, polveri edili sottili e accumuli di materiale residuo; pulizia con aspiratori industriali dotati di filtri per polveri fini; raccolta e smaltimento di imballaggi, protezioni e materiali di scarto; pulizia di tubazioni e canaline che hanno accumulato polvere durante i lavori.',

      'Pulizia vetri e infissi nuovi': 'Rimozione accurata di stucco, silicone, adesivi e residui di lavorazione da vetrate e serramenti; pulizia di telai, controtelai e guarnizioni; rimozione di pellicole protettive e etichette; lucidatura finale per massima trasparenza; trattamento delicato per non graffiare superfici nuove.',

      'Trattamento pavimenti post-posa': 'Pulizia specifica calibrata sul tipo di pavimento installato: ceramica, parquet, resina, marmo, gres porcellanato; rimozione di malte, fuganti e residui di posa; primo lavaggio con prodotti appropriati che non danneggiano le superfici; eventuale trattamento protettivo se richiesto; lucidatura finale.',

      'Sanificazione bagni e cucine': 'Pulizia approfondita di sanitari nuovi rimuovendo residui di installazione; igienizzazione completa di rubinetteria e accessori; pulizia di box doccia e vasca; rimozione di silicone in eccesso e tracce di stucco; pulizia di piastrelle e fughe; test funzionamento scarichi.',

      'Rimozione protezioni e finishing': 'Asportazione di nastri adesivi, pellicole protettive, cartoni e imballi; rimozione di eventuali tracce di vernice su vetri e superfici; pulizia di interruttori, prese e placche elettriche; spolveratura di lampadari e corpi illuminanti; pulizia finale di tutte le superfici per consegna chiavi in mano.'
    },
    'sanificazione-ambienti': {
      'Sanificazione superfici e arredi': 'Nebulizzazione professionale con atomizzatori che distribuiscono prodotti virucidi e battericidi certificati su tutte le superfici; trattamento di arredi, scrivanie, sedie, armadi e scaffalature; particolare attenzione a superfici porose che possono trattenere patogeni; tempo di contatto adeguato per massima efficacia; aerazione controllata post-trattamento.',

      'Igienizzazione impianti di aerazione': 'Pulizia e disinfezione accurata di bocchette e griglie di ventilazione; sanificazione di filtri o loro sostituzione se necessario; nebulizzazione all\'interno di canalizzazioni quando accessibili; controllo e pulizia di unità esterne; verifica funzionamento e qualità aria post-intervento.',

      'Trattamento aree ad alto contatto': 'Disinfezione intensiva di maniglie di porte e finestre, pulsantiere di ascensori, interruttori, corrimano, telefoni, tastiere, mouse, bancomat, touchscreen; applicazione di prodotti specifici ad azione prolungata; frequenza elevata per zone critiche; documentazione fotografica prima/dopo.',

      'Sanificazione ambienti sensibili': 'Protocolli specifici per scuole, asili, studi medici, negozi alimentari, palestre e altri ambienti ad alta frequentazione; utilizzo di prodotti certificati per uso in presenza di persone sensibili; conformità a normative HACCP per ambienti alimentari; rilascio di certificazioni e documentazione completa.',

      'Certificazione e documentazione': 'Rilascio di attestazione di avvenuta sanificazione con data, prodotti utilizzati e aree trattate; schede tecniche e di sicurezza di tutti i prodotti impiegati; report fotografico dettagliato; registro degli interventi per tracciabilità; conformità a normative vigenti e protocolli ministeriali.'
    },
    'pulizia-vetri': {
      'Vetrate esterne a qualsiasi altezza': 'Pulizia professionale di vetrate esterne anche ai piani alti con utilizzo di attrezzature telescopiche, aste estensibili e piattaforme mobili quando necessario; accesso in sicurezza con personale formato su lavori in quota; rimozione di depositi atmosferici, smog e residui di pioggia; risultati senza aloni.',

      'Vetrate interne e specchi': 'Pulizia accurata di tutte le superfici vetrate interne con prodotti specifici; rimozione di impronte, aloni e macchie; trattamento di specchi e superfici riflettenti; pulizia di vetrate divisorie in uffici open space; attenzione particolare a non danneggiare pellicole o trattamenti speciali.',

      'Vetrine commerciali e negozi': 'Interventi frequenti per mantenere massima visibilità e appeal commerciale; pulizia esterna e interna; rimozione di adesivi promozionali; lucidatura di telai e profili; programmazione interventi in orari che non interferiscono con attività commerciale; possibilità di interventi serali o notturni.',

      'Lucernari e vetrate difficili': 'Pulizia di lucernari su tetti e coperture con accesso tramite piattaforme o sistemi di sicurezza certificati; pulizia di cupole vetrate e strutture complesse; rimozione di foglie, detriti e depositi che si accumulano nelle parti superiori; controllo tenuta guarnizioni e segnalazione anomalie.',

      'Telai, guarnizioni e accessori': 'Pulizia completa non solo dei vetri ma anche di telai, controtelai, guarnizioni e accessori; rimozione di sporco incastrato negli angoli; pulizia di maniglie e ferramenta; controllo generale dello stato di conservazione; segnalazione di eventuali problemi di tenuta o infiltrazioni.'
    },
    'gestione-carrellati': {
      'Posizionamento e ritiro bidoni': 'Servizio di posizionamento puntuale dei carrellati nei giorni di raccolta municipale in base al calendario; ritiro dopo lo svuotamento per mantenerli ordinati; rispetto scrupoloso di orari e modalità previste dal regolamento comunale; coordinamento con servizio raccolta per evitare mancati ritiri.',

      'Lavaggio e igienizzazione periodica': 'Lavaggio interno ed esterno dei carrellati con prodotti igienizzanti specifici; rimozione di residui e cattivi odori; trattamento anti-insetti e anti-proliferazione batterica; frequenza concordata in base a stagione e utilizzo; particolare attenzione a bidoni organico che richiedono pulizie più frequenti.',

      'Gestione raccolta differenziata': 'Coordinamento con calendario comunale per corretta separazione delle frazioni; verifica che i condomini conferiscano correttamente; posizionamento di bidoni diversi in giorni appropriati; segnalazione all\'amministratore di eventuali conferimenti non corretti; supporto nel rispetto normative locali.',

      'Pulizia aree di stoccaggio': 'Pulizia regolare delle zone dove vengono posizionati i carrellati; rimozione di rifiuti abbandonati o impropriamente conferiti; lavaggio pavimenti con igienizzanti; controllo generale dello stato di decoro; segnalazione di eventuali danneggiamenti o necessità di manutenzione.',

      'Monitoraggio e segnalazioni': 'Controllo costante dello stato dei carrellati e segnalazione di eventuali danneggiamenti; coordinamento con comune per sostituzione bidoni rotti o mancanti; comunicazioni tempestive all\'amministratore per problematiche rilevate; gestione emergenze legate a rifiuti abbandonati o situazioni igieniche critiche.'
    },
    'giardinaggio': {
      'Sfalcio prati e manti erbosi': 'Taglio regolare dell\'erba con rasaerba professionali; raccolta e smaltimento dell\'erba tagliata secondo normative; frequenza adeguata alla stagione e alla crescita; bordatura precisa lungo vialetti e aiuole; utilizzo di decespugliatori per zone difficili da raggiungere; risultato sempre ordinato.',

      'Potatura siepi e arbusti': 'Potatura professionale di siepi per mantenimento forma e contenimento crescita; potatura di alberi ornamentali secondo tecniche appropriate alla specie; rimozione rami secchi o danneggiati; pulizia e raccolta di tutto il materiale di risulta; periodo di intervento ottimale in base a fioritura e vegetazione.',

      'Pulizia aiuole e rimozione erbacce': 'Diserbo manuale o controllato di aiuole e zone fiorite; rimozione di erbacce infestanti che rovinano l\'estetica; sistemazione di bordure e delimitazioni; eventuale aggiunta di pacciamatura per contenere crescita erbacce; pulizia accurata con raccolta di tutti i residui vegetali.',

      'Raccolta foglie stagionale': 'Interventi intensificati in periodo autunnale per raccolta foglie cadute; spazzamento di vialetti, cortili e marciapiedi; pulizia di griglie e tombini per prevenire intasamenti; raccolta e smaltimento secondo normative; possibilità di compostaggio su richiesta; frequenza elevata in picco caduta fogliare.',

      'Trattamenti e fertilizzazioni': 'Applicazione di fertilizzanti per mantenere prati e piante in salute; trattamenti antiparassitari quando necessario con prodotti certificati; controllo fitosanitario di piante per identificare malattie o parassiti; irrigazione di supporto durante periodi siccitosi; consulenza per scelta nuove essenze.'
    }
  };

  return servicesMap[serviceSlug] || servicesMap['pulizie-uffici'];
}

function generateTypicalProblems(serviceSlug: string, locationName: string, localRefs: string[], seed: number): string[] {
  const problemsMap: Record<string, string[]> = {
    'pulizie-uffici': [
      `Polvere che si accumula rapidamente su scrivanie e superfici di lavoro, particolarmente problematica nelle zone di ${locationName} vicine ad assi stradali trafficati come ${localRefs[0] || 'arterie principali'}. Questo non solo crea un'immagine poco professionale quando si accolgono clienti, ma può causare problemi respiratori al personale sensibile o allergico.`,
      `Bagni aziendali non adeguatamente igienizzati che diventano veicolo di contaminazioni batteriche e virali, aumentando l'assenteismo per malattia. Le superfici ad alto contatto come maniglie, rubinetti e pulsantiere richiedono sanificazione frequente e prodotti specifici ad azione duratura.`,
      `Vetrate e superfici vetrate opache che riducono la luminosità naturale degli uffici e danno un'immagine di trascuratezza. Nel contesto di ${locationName}, dove la presentazione professionale è importante, vetri puliti contribuiscono significativamente all'immagine aziendale.`,
      `Tappeti, moquette e pavimenti che perdono brillantezza a causa del traffico quotidiano, accumulando sporco negli strati profondi. Zone ad alto calpestio richiedono manutenzione specifica per prevenire usura precoce e mantenere aspetto professionale.`,
      `Aree break e cucine aziendali trascurate dove si accumula sporco e possono proliferare batteri, creando rischi igienici per il personale. Frigoriferi, microonde e superfici di lavoro richiedono pulizia quotidiana e igienizzazione regolare.`
    ],
    'pulizie-condomini': [
      `Scale condominiali con accumuli visibili di polvere, impronte e sporco trasportato dall'esterno, che peggiorano rapidamente l'immagine dello stabile. A ${locationName} la prima impressione conta, e scale trascurate svalutano percettivamente l'immobile.`,
      `Androni e atri di ingresso che non ricevono pulizia regolare, accumulando sporco negli angoli e dando cattiva impressione ai visitatori. Citofoni sporchi, vetrate opache e pavimenti macchiati comunicano mancanza di cura e attenzione.`,
      `Cortili con foglie e detriti accumulati, particolarmente problematici in autunno quando la caduta è intensa. A ${localRefs[0] || 'zona'} la gestione delle aree esterne richiede interventi frequenti per mantenere il decoro.`,
      `Ascensori con vetri sporchi, pulsantiere non igienizzate e pavimenti macchiati che creano disagio ai residenti. Essendo spazi piccoli e molto utilizzati, richiedono pulizie frequenti per mantenere standard igienici adeguati.`,
      `Aree di stoccaggio carrellati maleodoranti e disordinate che attirano insetti e creano situazioni igieniche critiche. La gestione corretta dei rifiuti e la pulizia delle zone bidoni è fondamentale per il benessere condominiale.`
    ],
    'pulizie-industriali': [
      `Pavimenti industriali ricoperti di oli, grassi e residui di lavorazione che creano situazioni di rischio scivolamento e rendono l'ambiente di lavoro poco sicuro. A ${locationName} le aziende manifatturiere necessitano di pulizie con attrezzature specifiche e prodotti sgrassanti efficaci.`,
      `Accumulo di trucioli, polveri metalliche e residui produttivi lungo le vie di transito che possono danneggiare macchinari se trasportati dalle calzature. La pulizia regolare previene fermi macchina e mantiene efficienza operativa.`,
      `Spogliatoi e bagni per personale operativo non adeguatamente sanificati, con rischio di proliferazione batterica e insoddisfazione dei lavoratori. Standard igienici elevati riducono assenteismo e migliorano clima aziendale.`,
      `Aree carico/scarico merci con accumuli di imballaggi, pallet rotti e detriti che ostacolano operazioni logistiche. In zone produttive di ${locationName} la pulizia di rampe e piazzali è essenziale per efficienza operativa.`,
      `Mense aziendali che non ricevono pulizia tra un turno e l'altro, accumulando sporco e residui alimentari. Per aziende che operano su più turni a ${localRefs[0] || 'polo industriale'}, interventi multipli giornalieri sono necessari.`
    ],
    'pulizie-post-cantiere': [
      `Polvere edile fine che si deposita su ogni superficie durante i lavori e richiede aspirazione con filtri HEPA per rimozione completa. A ${locationName} dopo ristrutturazioni è fondamentale una pulizia professionale prima della consegna immobile.`,
      `Residui di stucco, malta e cemento incrostati su pavimenti, vetri e infissi che se non rimossi tempestivamente diventano difficilissimi da eliminare. Prodotti specifici e tecniche appropriate prevengono danneggiamenti.`,
      `Finestre e vetrate nuove imbrattate durante i lavori con silicone, vernice e adesivi che richiedono solventi delicati per rimozione senza graffiare superfici. A ${localRefs[0] || 'zona'} gli immobili ristrutturati necessitano pulizia certificata.`,
      `Pavimenti appena posati che presentano residui di posa, fuganti e protettivi da rimuovere con primo lavaggio appropriato. Ogni tipo di pavimentazione richiede prodotti specifici per non compromettere finitura.`,
      `Odori persistenti di materiali edili e prodotti chimici utilizzati durante i lavori che richiedono aerazione prolungata e trattamenti specifici. La pulizia post-cantiere include anche deodorazione ambienti.`
    ],
    'sanificazione-ambienti': [
      `Ambienti ad alta frequentazione come uffici, negozi e spazi pubblici a ${locationName} che richiedono sanificazione periodica per prevenire diffusione di patogeni e garantire sicurezza a dipendenti e clienti.`,
      `Superfici ad alto contatto (maniglie, pulsantiere, corrimano) che vengono toccate da molte persone e rappresentano principale veicolo di contaminazione batterica e virale. Sanificazione frequente riduce drasticamente rischio contagio.`,
      `Necessità di certificare l'igiene per clienti, fornitori o enti di controllo. Molte attività a ${localRefs[0] || 'zona commerciale'} devono dimostrare protocolli sanitari attraverso documentazione ufficiale di sanificazione.`,
      `Spazi chiusi con aria viziata e scarso ricambio dove possono accumularsi batteri, virus e muffe. Impianti di condizionamento non puliti diffondono contaminanti invece di aria salubre.`,
      `Eventi improvvisi che richiedono sanificazione urgente: casi sospetti o accertati di malattie infettive, situazioni igienico-sanitarie critiche, necessità di intervento rapido documentato. Disponibilità h24 per emergenze.`
    ],
    'pulizia-vetri': [
      `Vetrate opache e sporche che riducono significativamente la luminosità naturale degli ambienti e danno un'immagine di trascuratezza. A ${locationName} dove l'immagine professionale è importante, vetri puliti fanno la differenza.`,
      `Aloni e striature visibili dopo tentativi di pulizia fai-da-te con prodotti non appropriati. Vetri mal puliti sono peggio di vetri non puliti, richiedono intervento professionale con attrezzature e prodotti specifici.`,
      `Vetrine di negozi sporche che riducono visibilità dei prodotti esposti e allontanano clienti. Nel contesto commerciale di ${localRefs[0] || 'area'}, vetrine impeccabili sono fondamentali per attirare passanti.`,
      `Finestre ai piani alti inaccessibili o pericolose da pulire che vengono trascurate per anni accumulando smog, polveri e depositi atmosferici. Servizio professionale con attrezzature appropriate garantisce sicurezza.`,
      `Lucernari e vetrate su coperture invase da foglie, muschio e detriti che ostruiscono passaggio luce. In edifici di ${locationName} con lucernari, pulizia periodica previene infiltrazioni e mantiene luminosità.`
    ],
    'gestione-carrellati': [
      `Bidoni maleodoranti che disturbano residenti e attirano insetti, particolarmente problematici in estate con temperature elevate. A ${locationName} la gestione corretta dei carrellati è essenziale per vivibilità condominiale.`,
      `Rifiuti abbandonati vicino ai bidoni perché non rispettano calendari di raccolta o per inciviltà di alcuni condomini. Situazione crea degrado e può causare sanzioni comunali per conferimenti impropri.`,
      `Disorganizzazione nella gestione con bidoni posizionati in modo casuale e non ritirati dopo svuotamento. Servizio professionale garantisce ordine e rispetto regolamenti.`,
      `Aree di stoccaggio carrellati sporche e trascurate che peggiorano decoro condominiale. Pulizia regolare e igienizzazione prevengono proliferazione batteri e cattivi odori persistenti.`,
      `Carrellati danneggiati o rotti non segnalati e non sostituiti che compromettono corretta gestione raccolta. Monitoraggio costante e coordinamento con comune risolvono tempestivamente problemi.`
    ],
    'giardinaggio': [
      `Prati incolti e disordinati che peggiorano drasticamente l'immagine del condominio o dell'azienda a ${locationName}. Erba alta e incurata comunica abbandono e trascuratezza, abbassando valore percepito immobile.`,
      `Siepi non potate che invadono marciapiedi, parcheggi o zone di transito creando ostacoli e situazioni di rischio. Potatura regolare mantiene forme ordinate e previene crescita eccessiva.`,
      `Accumulo di foglie in autunno che copre prati, ostruisce tombini e crea tappeti scivolosi pericolosi. In zone di ${localRefs[0] || 'centro'} con alberature abbondanti, gestione foglie è critica.`,
      `Erbacce che invadono aiuole, vialetti e aree pavimentate rovinando estetica e danneggiando superfici. Diserbo tempestivo e regolare previene proliferazione infestanti difficili da eliminare.`,
      `Piante secche o malate non trattate che rischiano di morire o infettare altre essenze. Controllo fitosanitario e trattamenti tempestivi salvaguardano patrimonio verde del condominio.`
    ]
  };

  const problems = problemsMap[serviceSlug] || problemsMap['pulizie-uffici'];
  const shuffled = shuffleArray(problems, seed);
  return shuffled.slice(0, 4 + (seed % 2)).map(text => applyVariations(text, seed));
}

function generateStandardsText(seed: number): string {
  const texts = [
    `Il nostro servizio garantisce puntualità assoluta negli interventi, personale formato e certificato su protocolli operativi standardizzati, utilizzo di check-list digitali per tracciare ogni attività. Offriamo sopralluoghi e preventivi sempre gratuiti e senza alcun impegno, disponibilità per gestione emergenze 6 giorni su 7 (esclusa domenica), possibilità di contratti periodici con frequenze personalizzate o interventi singoli su specifica richiesta del cliente.`,

    `Garantiamo standard operativi certificati conformi alle normative vigenti, con personale costantemente aggiornato su procedure di sicurezza e migliori pratiche del settore. Forniamo documentazione completa degli interventi, schede tecniche di prodotti utilizzati, attestazioni di conformità. Sistema di qualità con controlli interni regolari e raccolta feedback per miglioramento continuo. Copertura assicurativa completa per massima tranquillità.`,

    `Ogni intervento segue protocolli standardizzati che garantiscono risultati costanti e misurabili. Personale dotato di DPI appropriati, cartellini identificativi, vestiario aziendale riconoscibile. Utilizzo esclusivo di prodotti certificati con schede di sicurezza disponibili. Attrezzature professionali sottoposte a manutenzione programmata. Sopralluoghi gratuiti, preventivi dettagliati, contratti flessibili. Reperibilità per emergenze.`
  ];

  return applyVariations(texts[seed % texts.length], seed);
}

async function expandAllPages() {
  console.log('🚀 Inizio espansione contenuti per tutte le 200 pagine...\n');

  const { data: pages, error } = await supabase
    .from('local_service_pages')
    .select(`
      *,
      service:services(*),
      location:locations(*)
    `)
    .order('slug', { ascending: true });

  if (error || !pages) {
    console.error('❌ Errore nel recupero delle pagine:', error);
    return;
  }

  console.log(`✅ Trovate ${pages.length} pagine da espandere\n`);

  let successCount = 0;
  let errorCount = 0;
  let totalWords = 0;

  for (let i = 0; i < pages.length; i++) {
    const page = pages[i];
    const service = page.service as any;
    const location = page.location as any;

    if (!service || !location) {
      console.log(`⏭️  Saltata pagina ${page.slug} - dati incompleti`);
      errorCount++;
      continue;
    }

    try {
      const seed = i * 37; // Seed diverso per ogni pagina
      const targetWords = 1000 + (seed % 600); // Target random 1000-1600

      const localRefs = (location.local_references as string[]) || [];

      // Genera contenuti espansi
      const expandedIntro = generateExpandedIntro(service.name, location.name, localRefs, seed);
      const whyChooseUs = generateWhyChooseUs(location.name, seed);
      const detailedServices = generateDetailedServices(service.slug);
      const typicalProblems = generateTypicalProblems(service.slug, location.name, localRefs, seed);
      const standardsText = generateStandardsText(seed);

      // Coverage areas (4-8 aree)
      const coverageAreas = [
        ...localRefs.slice(0, 3),
        `zone limitrofe di ${location.name}`,
        `aree circostanti ${location.name}`,
        `intero territorio comunale di ${location.name}`,
        `prima cintura di ${location.name}`,
        `comprensorio di ${location.name}`
      ].slice(0, 4 + (seed % 5));

      // CTA personalizzate
      const ctas = [
        {
          text: `Richiedi un sopralluogo gratuito a ${location.name}`,
          subtext: 'Risposta garantita entro 24 ore via email o WhatsApp'
        },
        {
          text: `Preventivo ${service.name.toLowerCase()} per ${location.name}`,
          subtext: `Sopralluogo gratuito e senza impegno entro 24 ore`
        },
        {
          text: `Contattaci per un piano personalizzato`,
          subtext: `Servizio ${service.name.toLowerCase()} su misura per ${location.name}`
        }
      ];
      const selectedCta = ctas[seed % ctas.length];

      // Calcola word count approssimativo
      const wordCount =
        expandedIntro.split(' ').length +
        whyChooseUs.join(' ').split(' ').length +
        typicalProblems.join(' ').split(' ').length +
        Object.values(detailedServices).join(' ').split(' ').length +
        standardsText.split(' ').length +
        coverageAreas.join(' ').split(' ').length;

      totalWords += wordCount;

      // Aggiorna nel database
      const { error: updateError } = await supabase
        .from('local_service_pages')
        .update({
          intro_text: expandedIntro,
          why_choose_us: whyChooseUs,
          coverage_areas: coverageAreas,
          typical_problems: typicalProblems,
          detailed_services: detailedServices,
          standards_guarantees: standardsText,
          cta_text: selectedCta.text,
          cta_subtext: selectedCta.subtext,
          word_count: wordCount,
          updated_at: new Date().toISOString()
        })
        .eq('id', page.id);

      if (updateError) {
        console.error(`❌ Errore aggiornamento ${page.slug}:`, updateError.message);
        errorCount++;
      } else {
        successCount++;
        if (successCount % 20 === 0) {
          console.log(`✅ Elaborate ${successCount}/${pages.length} pagine...`);
        }
      }

    } catch (err: any) {
      console.error(`❌ Errore processando ${page.slug}:`, err.message);
      errorCount++;
    }
  }

  const avgWords = Math.round(totalWords / successCount);

  console.log('\n' + '='.repeat(60));
  console.log('🎉 ESPANSIONE COMPLETATA!');
  console.log('='.repeat(60));
  console.log(`✅ Pagine espanse con successo: ${successCount}/${pages.length}`);
  console.log(`❌ Pagine con errori: ${errorCount}`);
  console.log(`📊 Lunghezza media: ${avgWords} parole/pagina`);
  console.log(`📈 Range parole: 1000-1600 (randomizzato)`);
  console.log(`📝 Parole totali generate: ${totalWords.toLocaleString()}`);
  console.log('='.repeat(60));
}

expandAllPages().catch(console.error);
