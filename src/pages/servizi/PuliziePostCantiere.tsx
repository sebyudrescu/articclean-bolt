import { Hammer, CheckCircle, ArrowRight, Clock, Shield, Sparkles, Building } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import LocationsGrid from '@/components/LocationsGrid';
import InternalLinkSection from '@/components/InternalLinkSection';
import LazyImage from '@/components/LazyImage';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { cdnImage } from '@/utils/image';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/utils/structuredData';

const faqItems = [
  {
    question: 'In quanto tempo completate una pulizia post-cantiere?',
    answer:
      'Dopo il sopralluogo definiamo durata e squadre: piccoli appartamenti in 1 giorno, grandi cantieri in pochi giorni lavorativi.'
  },
  {
    question: 'Vi occupate anche della rimozione dei detriti?',
    answer:
      'Sì, Artic Pulizie rimuove detriti, adesivi, polveri e coordina la gestione dei materiali di scarto secondo normativa.'
  },
  {
    question: 'È prevista la sanificazione finale degli ambienti?',
    answer:
      'Al termine della pulizia effettuiamo sanificazione e deodorazione per consegnare ambienti pronti all’uso.'
  }
];

const PuliziePostCantiere = () => {
  const features = [
    "Rimozione polveri da costruzione",
    "Pulizia residui di malta e cemento", 
    "Lucidatura pavimenti e superfici",
    "Pulizia vetri e infissi",
    "Sanificazione completa ambienti",
    "Preparazione per l'uso immediato",
    "Rimozione adesivi e protezioni",
    "Pulizia impianti e radiatori"
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Consegna Immediata",
      description: "Spazi pronti per l'uso o la vendita senza ulteriori ritardi"
    },
    {
      icon: Building,
      title: "Ambienti Pronti all'Uso",
      description: "Pulizia professionale che valorizza il lavoro svolto"
    },
    {
      icon: Shield,
      title: "Rimozione Completa Detriti",
      description: "Eliminazione sicura di tutti i residui di cantiere"
    },
    {
      icon: Sparkles,
      title: "Risparmio Tempo e Costi",
      description: "Eviti di dover gestire internamente la pulizia finale"
    }
  ];

  const projectTypes = [
    {
      title: "Ristrutturazioni Residenziali",
      description: "Appartamenti e case",
      features: ["Pulizia post-lavori", "Rimozione polveri", "Lucidatura pavimenti"],
      duration: "1-2 giorni",
      scope: "Fino a 200 mq"
    },
    {
      title: "Uffici e Negozi",
      description: "Spazi commerciali",
      features: ["Pulizia professionale", "Vetrine e infissi", "Preparazione opening"],
      duration: "2-3 giorni", 
      scope: "200-1000 mq"
    },
    {
      title: "Grandi Cantieri",
      description: "Complessi industriali",
      features: ["Squadre specializzate", "Attrezzature industriali", "Gestione rifiuti"],
      duration: "1-2 settimane",
      scope: "1000+ mq"
    }
  ];

  const phases = [
    {
      title: "Valutazione Pre-Pulizia",
      description: "Sopralluogo per valutare tipologia e quantità di lavoro necessario",
      time: "30-60 min"
    },
    {
      title: "Rimozione Detriti Grossolani", 
      description: "Eliminazione di materiali di scarto, imballaggi e protezioni",
      time: "2-4 ore"
    },
    {
      title: "Pulizia Approfondita",
      description: "Rimozione polveri, residui di lavorazione e pulizia superfici",
      time: "4-8 ore"
    },
    {
      title: "Finitura e Controllo",
      description: "Lucidatura, sanificazione finale e controllo qualità",
      time: "2-3 ore"
    }
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Pulizie post cantiere a Brescia',
      serviceType: 'Pulizie Post Cantiere',
      description:
        "Pulizie post-cantiere a Brescia con rimozione detriti, lucidatura e sanificazione finale per consegne pronte all'uso.",
      url: '/servizi/pulizie-post-cantiere',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Pulizie Post Cantiere', path: '/servizi/pulizie-post-cantiere' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Pulizie Post Cantiere a Brescia | Artic Pulizie"
        description="Pulizie post-cantiere a Brescia con rimozione detriti, lucidatura e sanificazione finale. Artic Pulizie consegna ambienti pronti all'uso."
        keywords="pulizie post cantiere brescia, pulizia fine lavori brescia, sanificazione post cantiere artic pulizie"
        canonical={buildCanonicalUrl('/servizi/pulizie-post-cantiere')}
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Hammer className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pulizie <span className="text-sky-500">Post-Cantiere</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Pulizie specializzate per la consegna di nuove costruzioni o ristrutturazioni. 
                Trasformiamo i cantieri in spazi pronti all'uso con interventi professionali 
                e attrezzature specifiche.
              </p>
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Richiedi Preventivo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <LazyImage
                src={cdnImage('https://images.pexels.com/photos/8467975/pexels-photo-8467975.jpeg?auto=compress&cs=tinysrgb&w=1280', { width: 1280, quality: 80 })}
                alt="Pulizie post-cantiere a Brescia con Artic Pulizie"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={640}
                height={540}
                fallbackSrc="https://images.pexels.com/photos/8467975/pexels-photo-8467975.jpeg?auto=compress&cs=tinysrgb&w=1280"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Servizi Post-Cantiere Completi
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dalla rimozione dei detriti alla consegna finale, ci occupiamo di tutto 
              per rendere gli spazi immediatamente utilizzabili.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-sky-50 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Perché Scegliere il Nostro Servizio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Completiamo il vostro progetto con una pulizia professionale che valorizza il lavoro svolto.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Tipologie di Progetti
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dalla piccola ristrutturazione ai grandi cantieri, abbiamo l'esperienza 
              per gestire progetti di ogni dimensione.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {projectTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 mb-4">{type.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Servizi Inclusi:</h4>
                    <ul className="space-y-1">
                      {type.features.map((feature, i) => (
                        <li key={i} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-sky-500" />
                          <span className="text-slate-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-slate-500 text-xs">Durata</p>
                    <p className="font-semibold text-slate-900">{type.duration}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-slate-500 text-xs">Superficie</p>
                    <p className="font-semibold text-slate-900">{type.scope}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Phases */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Le Fasi del Nostro Intervento
            </h2>
            <p className="text-lg text-slate-600">
              Un approccio sistematico per garantire risultati perfetti in tempi ottimali.
            </p>
          </div>

          <div className="space-y-8">
            {phases.map((phase, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                    <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">
                      {phase.time}
                    </span>
                  </div>
                  <p className="text-slate-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-sky-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Tempistiche e Coordinamento
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Pianificazione:</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• Coordinamento con direttore lavori</li>
                  <li>• Programmazione post-completamento</li>
                  <li>• Intervento nei tempi di consegna</li>
                  <li>• Flessibilità per urgenze</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Sicurezza:</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• Valutazione rischi residui</li>
                  <li>• DPI specifici per cantiere</li>
                  <li>• Gestione sicura detriti</li>
                  <li>• Coordinamento con altre ditte</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationsGrid serviceSlug="pulizie-post-cantiere" serviceName="Pulizie Post Cantiere" showAll={false} />

      <RelatedBlogPosts serviceIds={['pulizie-post-cantiere']} />

      <InternalLinkSection title="Risorse utili dopo il cantiere" intro="Consulta tutti i collegamenti fondamentali Artic Pulizie per programmare servizi aggiuntivi, verificare le aree servite, leggere le recensioni e richiedere un preventivo." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Completa il Tuo Progetto con Successo
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Affidaci la pulizia finale per consegnare spazi perfetti e pronti all'uso. 
            Preventivo rapido in base ai tuoi tempi di cantiere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/richiedi-preventivo"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Richiedi Preventivo Gratuito</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contatti"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contattaci Ora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PuliziePostCantiere;
