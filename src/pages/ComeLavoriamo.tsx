import { CheckCircle, ClipboardList, Users, Sparkles, Shield, Phone, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/utils/structuredData';
import InternalLinkSection from '@/components/InternalLinkSection';

const ComeLavoriamo = () => {
  const steps = [
    {
      number: "01",
      icon: Phone,
      title: "Primo Contatto",
      description: "Contattaci telefonicamente o tramite il form online. Ascoltiamo le tue esigenze e ti forniamo una prima consulenza gratuita.",
      details: [
        "Analisi delle tue necessità specifiche",
        "Consulenza professionale gratuita",
        "Risposta rapida entro 24 ore"
      ]
    },
    {
      number: "02",
      icon: ClipboardList,
      title: "Sopralluogo e Preventivo",
      description: "Effettuiamo un sopralluogo gratuito per valutare gli spazi e preparare un preventivo dettagliato su misura.",
      details: [
        "Sopralluogo gratuito e senza impegno",
        "Preventivo dettagliato e trasparente",
        "Soluzione personalizzata per ogni esigenza"
      ]
    },
    {
      number: "03",
      icon: Calendar,
      title: "Pianificazione",
      description: "Definiamo insieme il calendario degli interventi, rispettando i tuoi orari e le tue esigenze operative.",
      details: [
        "Orari flessibili e concordati",
        "Frequenza personalizzata",
        "Minimo impatto sulle tue attività"
      ]
    },
    {
      number: "04",
      icon: Users,
      title: "Assegnazione Team",
      description: "Selezioniamo il team più adatto alle tue necessità, con operatori qualificati e formati specificamente.",
      details: [
        "Personale qualificato e formato",
        "Team dedicato e costante",
        "Coordinatore di riferimento"
      ]
    },
    {
      number: "05",
      icon: Sparkles,
      title: "Esecuzione Servizio",
      description: "Eseguiamo gli interventi con professionalità, utilizzando prodotti certificati e attrezzature all'avanguardia.",
      details: [
        "Prodotti professionali certificati",
        "Attrezzature moderne ed efficienti",
        "Protocolli di qualità rigorosi"
      ]
    },
    {
      number: "06",
      icon: CheckCircle,
      title: "Controllo Qualità",
      description: "Verifichiamo costantemente la qualità del servizio attraverso controlli periodici e feedback continuo.",
      details: [
        "Ispezioni periodiche di qualità",
        "Raccolta feedback cliente",
        "Miglioramento continuo del servizio"
      ]
    }
  ];

  const guarantees = [
    {
      icon: Shield,
      title: "Garanzia di Qualità",
      description: "Garantiamo standard elevati in ogni intervento. Se non sei soddisfatto, ripeteremo il servizio gratuitamente."
    },
    {
      icon: Award,
      title: "Personale Certificato",
      description: "Tutti i nostri operatori sono formati, assicurati e costantemente aggiornati sulle migliori pratiche del settore."
    },
    {
      icon: CheckCircle,
      title: "Puntualità Garantita",
      description: "Rispettiamo sempre gli orari concordati per non interferire con le tue attività quotidiane."
    }
  ];

  const certifications = [
    {
      title: "Sicurezza sul Lavoro",
      description: "Formazione continua su normative D.Lgs 81/08 e protocolli di sicurezza"
    },
    {
      title: "Prodotti Certificati",
      description: "Utilizziamo solo prodotti professionali con certificazioni ambientali"
    },
    {
      title: "Assicurazione RC",
      description: "Copertura assicurativa completa per ogni tipo di intervento"
    },
    {
      title: "Privacy GDPR",
      description: "Massima riservatezza e conformità alle normative sulla privacy"
    }
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Come lavora Artic Pulizie',
      serviceType: 'Servizi di Pulizia Professionali',
      description: 'Metodo Artic Pulizie: sopralluogo gratuito, piano su misura, squadra dedicata e controllo qualità continuo a Brescia.',
      url: '/come-lavoriamo'
    }),
    buildBreadcrumbSchema([{ name: 'Come Lavoriamo', path: '/come-lavoriamo' }])
  ];

  return (
    <>
      <SEO
        title="Come Lavoriamo | Artic Pulizie Brescia"
        description="Scopri il metodo Artic Pulizie: sopralluogo gratuito, squadra dedicata e controllo qualità continuo per servizi di pulizia professionale a Brescia."
        keywords="come lavora artic pulizie, processo pulizie brescia, metodo lavoro impresa pulizie, sopralluogo gratuito artic pulizie"
        canonical={buildCanonicalUrl('/come-lavoriamo')}
        structuredData={structuredData}
      />

      <main className="flex-grow pt-16">
        <section className="relative bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Come Lavoriamo
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Un metodo collaudato in 6 step per garantire servizi di pulizia professionale
                di altissima qualità, sempre puntuali e su misura per te.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {steps.map((step, index) => {
                const Icon = step.icon;
                const isEven = index % 2 === 0;

                return (
                  <div
                    key={index}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-4 mb-6">
                        <div className="text-6xl font-bold text-sky-100">
                          {step.number}
                        </div>
                        <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                          <Icon className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      <h3 className="text-3xl font-bold text-slate-900 mb-4">
                        {step.title}
                      </h3>

                      <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                        {step.description}
                      </p>

                      <ul className="space-y-3">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-600">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex-1">
                      <div className={`bg-gradient-to-br ${isEven ? 'from-sky-100 to-cyan-100' : 'from-cyan-100 to-sky-100'} rounded-3xl p-12 shadow-lg`}>
                        <Icon className="w-32 h-32 text-sky-500 mx-auto opacity-20" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Le Nostre Garanzie
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Quello che ci impegniamo a garantire in ogni singolo intervento
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {guarantees.map((guarantee, index) => {
                const Icon = guarantee.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {guarantee.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {guarantee.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Certificazioni e Standard
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Operiamo nel rispetto delle normative vigenti e degli standard più elevati
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-sm text-slate-600">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <InternalLinkSection title="Risorse collegate al nostro metodo" intro="Consultare le pagine principali di Artic Pulizie per scoprire tutti i servizi, le zone servite, le recensioni e inviare una richiesta di preventivo." />

        <section className="py-20 bg-gradient-to-r from-sky-500 to-cyan-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto a Iniziare?
            </h2>
            <p className="text-xl mb-8 text-sky-50">
              Richiedi un sopralluogo gratuito e scopri come possiamo migliorare
              la pulizia dei tuoi spazi con il nostro metodo professionale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center justify-center space-x-2 bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Richiedi Preventivo Gratuito</span>
              </Link>
              <Link
                to="/servizi"
                className="inline-flex items-center justify-center space-x-2 bg-sky-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-sky-700 transition-all duration-300 border-2 border-white"
              >
                <span>Scopri i Nostri Servizi</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ComeLavoriamo;
