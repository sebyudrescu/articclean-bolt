import { Link } from 'react-router-dom';
import { CheckCircle, HelpCircle, MessageCircle, PhoneCall } from 'lucide-react';
import SEO from '@/components/SEO';
import { buildCanonicalUrl } from '@/data/siteMetadata';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const faqCategories: { title: string; description: string; icon: typeof HelpCircle; items: FAQItem[] }[] = [
    {
      title: 'Servizi di pulizia per aziende e condomini',
      description:
        'Tutte le risposte sulle pulizie professionali per uffici, stabilimenti industriali e spazi condominiali a Brescia e provincia.',
      icon: CheckCircle,
      items: [
        {
          question: 'Quali servizi di pulizia aziendale offre Artic Clean a Brescia?',
          answer:
            'Siamo specializzati in pulizie professionali per uffici, capannoni industriali, showroom e negozi. I nostri team certificati gestiscono manutenzioni ordinarie, pulizie profonde e interventi straordinari in tutta la provincia di Brescia.'
        },
        {
          question: 'Effettuate sanificazioni certificate per ambienti sanitari?',
          answer:
            'Sì, utilizziamo macchinari e prodotti riconosciuti dal Ministero della Salute per sanificazioni ospedaliere, studi medici e farmacie. Rilasciamo report di intervento e possiamo programmare trattamenti periodici personalizzati.'
        },
        {
          question: 'Come vengono gestiti i servizi di pulizia condomini?',
          answer:
            'Organizziamo squadre dedicate ai condomini con turni programmati, registro degli interventi e prodotti anti-aloni per scale, vetri, ascensori e garage. Coordiniamo i referenti di condominio per assicurare massima continuità e zero disservizi.'
        }
      ]
    },
    {
      title: 'Preventivi, sopralluoghi e contratti',
      description:
        'Scopri come richiedere un preventivo rapido, quali informazioni ci servono e come personalizziamo ogni proposta su misura.',
      icon: MessageCircle,
      items: [
        {
          question: 'Come posso ottenere un preventivo gratuito in 24 ore?',
          answer:
            'Compila il form nella pagina “Richiedi Preventivo” oppure chiamaci al numero +39 030 52 31 285. In meno di 24 ore un nostro consulente ti ricontatta per fissare un sopralluogo gratuito e definire il piano di pulizie più adatto alla tua azienda.'
        },
        {
          question: 'Quali informazioni servono per il sopralluogo?',
          answer:
            'Ci servono metrature degli ambienti, frequenza richiesta, tipologia di superficie e necessità specifiche (ad esempio pulizia vetri in quota o gestione rifiuti). In fase di sopralluogo valutiamo insieme ogni dettaglio per consegnarti un progetto accurato e conveniente.'
        },
        {
          question: 'Offrite contratti flessibili o soluzioni spot?',
          answer:
            'Sì, proponiamo contratti modulabili con rinnovo automatico o a consumo. Per fiere, eventi o esigenze urgenti offriamo anche interventi spot con squadra pronta entro 24 ore dalla conferma.'
        }
      ]
    },
    {
      title: 'Qualità, personale e sostenibilità',
      description:
        'Come selezioniamo e formiamo gli operatori, quali prodotti utilizziamo e come garantiamo la qualità costante dei nostri servizi.',
      icon: HelpCircle,
      items: [
        {
          question: "Quali certificazioni possiede l'impresa di pulizie Artic Clean?",
          answer:
            'Siamo un’impresa certificata ISO 9001 e ISO 14001. Ci impegniamo nel ridurre l’impatto ambientale, selezionando detergenti ecologici e sistemi di dosaggio controllati per evitare sprechi d’acqua e prodotto.'
        },
        {
          question: 'Gli operatori sono formati e assicurati?',
          answer:
            'Ogni addetto frequenta corsi interni su procedure di sicurezza, HACCP e pulizia professionale. Il personale è assunto direttamente, coperto da assicurazione RC e visite mediche periodiche.'
        },
        {
          question: 'Come monitorate la qualità del servizio?',
          answer:
            'Utilizziamo checklist digitali, verifiche a campione dei nostri supervisor e report condivisi con il cliente. Attraverso un portale dedicato puoi monitorare interventi, foto prima/dopo e tempi di esecuzione.'
        }
      ]
    }
  ];

  const structuredData = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqCategories
        .flatMap((category) => category.items)
        .map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
    }
  ];

  return (
    <>
      <SEO
        title="FAQ Impresa di Pulizie Brescia"
        description="Domande frequenti sui servizi di pulizia professionale a Brescia: preventivi rapidi, sanificazioni certificate, pulizie uffici e condomini con Artic Clean."
        keywords="faq impresa pulizie brescia, domande frequenti pulizie professionali, sanificazione ambienti brescia, pulizie uffici artic clean"
        canonical={buildCanonicalUrl('/faq')}
        structuredData={structuredData}
      />

      <main className="flex-grow pt-16">
        <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/white-diamond.png')] opacity-20 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-sky-100 text-sky-700 mb-6">
                Domande frequenti Artic Clean
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                FAQ sui nostri servizi di pulizia professionale a Brescia
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Abbiamo raccolto le domande più richieste dai facility manager e dagli amministratori di condominio che lavorano con noi.
                Se non trovi la risposta che cerchi, contattaci e ti guideremo passo dopo passo verso il servizio di pulizie migliore per i tuoi spazi.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/richiedi-preventivo"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold shadow-lg hover:from-sky-600 hover:to-cyan-600 transition-all duration-300"
                >
                  Richiedi un preventivo in 24h
                </Link>
                <a
                  href="tel:+390305231285"
                  className="inline-flex items-center px-6 py-3 rounded-lg border border-sky-200 text-sky-700 font-semibold bg-white hover:bg-sky-50 transition-all duration-300 shadow"
                >
                  <PhoneCall className="w-5 h-5 mr-2" />
                  Chiama subito
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12">
              {faqCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <div key={category.title} className="bg-slate-50 border border-slate-100 rounded-3xl shadow-sm p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-6">
                      <div>
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-cyan-500 text-white mb-4">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">{category.title}</h2>
                        <p className="text-slate-600 max-w-2xl">{category.description}</p>
                      </div>
                      <Link
                        to="/richiedi-preventivo"
                        className="inline-flex items-center px-5 py-3 rounded-lg bg-white text-sky-600 font-semibold border border-sky-200 hover:bg-sky-50 transition-colors"
                      >
                        Parla con un consulente
                      </Link>
                    </div>

                    <div className="space-y-6">
                      {category.items.map((item) => (
                        <div key={item.question} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.question}</h3>
                          <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-sky-500 to-cyan-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Hai altre domande su Artic Clean?</h2>
            <p className="text-lg md:text-xl text-sky-50 mb-8">
              I nostri specialisti sono disponibili per consigliarti la soluzione più efficace per uffici, industrie, retail e condomini in tutta Brescia.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:info@articpulizie.it"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-white text-sky-600 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Scrivici via email
              </a>
              <a
                href="tel:+390305231285"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-white text-white font-semibold hover:bg-white hover:text-sky-600 transition-all duration-300"
              >
                <PhoneCall className="w-5 h-5 mr-2" />
                Contatto immediato
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
