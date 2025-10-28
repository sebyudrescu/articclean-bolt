import { Link } from 'react-router-dom';
import { ShieldCheck, FileText, Lock, Mail, Phone } from 'lucide-react';
import SEO from '@/components/SEO';
import { buildCanonicalUrl, siteMetadata } from '@/data/siteMetadata';

const PrivacyPolicy = () => {
  const lastUpdate = 'Febbraio 2025';

  const policySections = [
    {
      title: '1. Titolare del trattamento',
      icon: ShieldCheck,
      content: (
        <p>
          Il titolare del trattamento dei dati personali è <strong>{siteMetadata.legalName}</strong>, con sede in Via Carpaccio 10,
          25100 Brescia. Per qualsiasi richiesta puoi scrivere a <a href="mailto:info@articpulizie.it" className="text-sky-600 hover:underline">info@articpulizie.it</a>
          oppure telefonare al <a href="tel:+390305231285" className="text-sky-600 hover:underline">+39 030 52 31 285</a>.
        </p>
      )
    },
    {
      title: '2. Tipologia di dati raccolti',
      icon: FileText,
      content: (
        <ul className="list-disc list-inside space-y-2 text-slate-600">
          <li><strong>Dati di contatto:</strong> nome, cognome, ragione sociale, email, telefono, posizione dell&apos;immobile.</li>
          <li><strong>Dati tecnici:</strong> informazioni sul dispositivo, indirizzo IP, log di navigazione generati automaticamente dal sito web.</li>
          <li><strong>Dati di navigazione:</strong> statistiche aggregate sulle pagine consultate, provenienza del traffico, tempo di permanenza.</li>
          <li><strong>Dati contrattuali:</strong> dati fiscali e di fatturazione necessari per l&apos;erogazione dei servizi di pulizia e sanificazione.</li>
        </ul>
      )
    },
    {
      title: '3. Finalità e basi giuridiche',
      icon: Lock,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            Trattiamo i dati personali nel rispetto del Regolamento (UE) 2016/679 per le seguenti finalità:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Gestione dei preventivi e dei contratti:</strong> rispondere alle richieste di sopralluogo, predisporre offerte personalizzate e concludere accordi commerciali.</li>
            <li><strong>Erogazione dei servizi:</strong> organizzare squadre di pulizia, sanificazioni certificate, gestione carrellati e manutenzione aree verdi.</li>
            <li><strong>Marketing e comunicazioni:</strong> inviare newsletter informative sui servizi di pulizia professionale a Brescia, solo con consenso esplicito.</li>
            <li><strong>Adempimenti legali e fiscali:</strong> ottemperare agli obblighi di legge e rispondere a richieste delle autorità competenti.</li>
          </ul>
        </div>
      )
    },
    {
      title: '4. Modalità di trattamento e tempi di conservazione',
      icon: ShieldCheck,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            I dati sono trattati con strumenti elettronici e archivi cartacei protetti da credenziali sicure, policy interne e backup periodici.
            Implementiamo protocolli di sicurezza per prevenire accessi non autorizzati, perdita o uso improprio dei dati.
          </p>
          <p>
            Conserviamo i dati per il tempo necessario a conseguire le finalità descritte e nel rispetto dei termini di legge:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li><strong>Richieste commerciali:</strong> fino a 24 mesi dall&apos;ultimo contatto.</li>
            <li><strong>Documentazione contrattuale:</strong> 10 anni come previsto dalla normativa fiscale.</li>
            <li><strong>Dati tecnici di navigazione:</strong> 12 mesi per analisi statistiche anonime.</li>
          </ul>
        </div>
      )
    },
    {
      title: '5. Soggetti autorizzati e destinatari',
      icon: FileText,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            I dati possono essere trattati esclusivamente da personale autorizzato di Artic Clean e da fornitori esterni nominati responsabili del trattamento
            (ad esempio servizi IT, consulenti fiscali, società di hosting). L&apos;elenco aggiornato è disponibile su richiesta scritta.
          </p>
          <p>
            Non vendiamo né cediamo i dati personali a terzi. Trasferiamo i dati extra-UE solo verso paesi che garantiscono un adeguato livello di protezione oppure previa adozione di clausole contrattuali standard.
          </p>
        </div>
      )
    },
    {
      title: '6. Diritti dell&apos;interessato',
      icon: ShieldCheck,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            Puoi esercitare in ogni momento i diritti previsti dagli articoli 15-22 del GDPR, tra cui accesso, rettifica, cancellazione, limitazione e portabilità dei dati.
            Per revocare il consenso o richiedere la cancellazione dei dati, scrivi a <a href="mailto:privacy@articpulizie.it" className="text-sky-600 hover:underline">privacy@articpulizie.it</a>.
          </p>
          <p>
            Hai inoltre il diritto di proporre reclamo al Garante per la protezione dei dati personali o all&apos;autorità competente del tuo Stato membro.
          </p>
        </div>
      )
    },
    {
      title: '7. Cookie e strumenti di tracciamento',
      id: 'cookie-policy',
      icon: FileText,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            Utilizziamo cookie tecnici per garantire il corretto funzionamento del sito e cookie analitici di terze parti per monitorare le performance delle pagine.
            I cookie marketing vengono attivati solo previo consenso esplicito dell&apos;utente. Puoi gestire le preferenze in qualsiasi momento tramite il banner dedicato.
          </p>
          <p>
            Per maggiori dettagli consulta la nostra <Link to="#cookie-policy" className="text-sky-600 hover:underline">Cookie Policy</Link>.
          </p>
        </div>
      )
    },
    {
      title: '8. Aggiornamenti della presente informativa',
      icon: Lock,
      content: (
        <p>
          Ci riserviamo il diritto di aggiornare questa Privacy Policy in caso di modifiche normative o miglioramenti dei nostri servizi digitali.
          Le versioni aggiornate saranno pubblicate su questa pagina con indicazione della data di revisione.
        </p>
      )
    }
  ];

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Privacy Policy Artic Clean',
      description:
        'Informativa privacy dell\'impresa di pulizie Artic Clean Brescia: trattamenti dati per preventivi, servizi di sanificazione e gestione clienti.',
      url: buildCanonicalUrl('/privacy-policy'),
      dateModified: lastUpdate
    }
  ];

  return (
    <>
      <SEO
        title="Privacy Policy Artic Clean"
        description="Informativa privacy dell'impresa di pulizie Artic Clean a Brescia: trattamento dati per preventivi, servizi di pulizia professionale e adempimenti normativi."
        keywords="privacy policy impresa pulizie brescia, trattamento dati artic clean, gdpr pulizie professionali, informativa sanificazione brescia"
        canonical={buildCanonicalUrl('/privacy-policy')}
        structuredData={structuredData}
        type="article"
      />

      <main className="flex-grow pt-16">
        <section className="bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-sky-100 text-sky-700 mb-6">
              Tutela dei dati personali
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Privacy Policy Artic Clean</h1>
            <p className="text-xl text-slate-600 leading-relaxed mb-6">
              Gestiamo i tuoi dati personali nel pieno rispetto della normativa italiana ed europea in materia di protezione dei dati.
              Questa informativa descrive come raccogliamo, utilizziamo e proteggiamo le informazioni dei nostri clienti e degli utenti del sito.
            </p>
            <div className="bg-white border border-sky-100 rounded-2xl p-6 shadow">
              <p className="text-slate-600">
                <strong>Ultimo aggiornamento:</strong> {lastUpdate}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
            {policySections.map((section) => {
              const Icon = section.icon;
              return (
                <article
                  key={section.title}
                  id={section.id}
                  className="bg-slate-50 border border-slate-100 rounded-3xl shadow-sm p-8 md:p-10"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                  </div>
                  <div className="text-slate-600 leading-relaxed space-y-4">{section.content}</div>
                </article>
              );
            })}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hai bisogno di assistenza sulla privacy?</h2>
            <p className="text-lg text-sky-50 mb-8">
              Il nostro Data Protection Officer è a disposizione per chiarire dubbi su consenso, gestione cookie e sicurezza informatica dei dati affidati ad Artic Clean.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="mailto:privacy@articpulizie.it"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-sky-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Scrivi al DPO
              </a>
              <a
                href="tel:+390305231285"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300"
              >
                <Phone className="w-5 h-5 mr-2" />
                Supporto telefonico
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
