import { Trash2, CheckCircle, ArrowRight, Recycle, Calendar, Shield } from 'lucide-react';
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
    question: 'Cosa include il servizio di gestione carrellati?',
    answer:
      'Artic Pulizie si occupa di posizionamento, ritiro, pulizia e sanificazione dei carrellati seguendo il calendario della raccolta differenziata.'
  },
  {
    question: 'Quanto spesso vengono puliti i bidoni?',
    answer:
      'La frequenza di pulizia viene definita nel contratto: da mensile a settimanale in base alle esigenze del condominio o dell’azienda.'
  },
  {
    question: 'Il servizio è disponibile anche per le aziende?',
    answer:
      'Sì, gestiamo carrellati e cassonetti aziendali, coordinandoci con i referenti interni per la gestione dei rifiuti.'
  }
];

const GestioneCarrellati = () => {
  const features = [
    "Gestione bidoni raccolta differenziata",
    "Pulizia e sanificazione carrellati",
    "Posizionamento bidoni nei giorni di raccolta",
    "Ritiro dopo lo svuotamento",
    "Controllo stato carrellati",
    "Pulizia area deposito bidoni",
    "Servizio regolare programmato",
    "Disponibile per condomini e aziende"
  ];

  const benefits = [
    {
      icon: Recycle,
      title: "Raccolta Differenziata Efficiente",
      description: "Gestione professionale che garantisce il corretto smaltimento dei rifiuti"
    },
    {
      icon: Calendar,
      title: "Servizio Programmato",
      description: "Interventi regolari secondo il calendario della raccolta comunale"
    },
    {
      icon: Shield,
      title: "Igiene e Decoro",
      description: "Carrellati sempre puliti e aree deposito in ordine"
    },
    {
      icon: Trash2,
      title: "Nessun Pensiero",
      description: "Non dovrete più preoccuparvi di gestire i bidoni della spazzatura"
    }
  ];

  const serviceDetails = [
    {
      title: "Per Condomini",
      description: "Servizio ideale per le aree comuni",
      features: [
        "Gestione bidoni condominiali",
        "Pulizia periodica carrellati",
        "Posizionamento e ritiro",
        "Controllo differenziata"
      ],
      info: "Perfetto per condomini che vogliono mantenere pulite e ordinate le aree deposito rifiuti"
    },
    {
      title: "Per Aziende",
      description: "Gestione rifiuti aziendali",
      features: [
        "Bidoni uffici e produzione",
        "Gestione rifiuti speciali",
        "Servizio personalizzato",
        "Documentazione smaltimento"
      ],
      info: "Supporto completo per la gestione dei rifiuti aziendali nel rispetto delle normative"
    }
  ];

  const howItWorks = [
    {
      step: 1,
      title: "Valutazione Iniziale",
      description: "Sopralluogo per definire tipologia e numero di carrellati da gestire"
    },
    {
      step: 2,
      title: "Piano Personalizzato",
      description: "Creiamo un programma basato sul calendario comunale della raccolta"
    },
    {
      step: 3,
      title: "Gestione Regolare",
      description: "Il nostro team si occupa di tutto secondo gli orari concordati"
    },
    {
      step: 4,
      title: "Pulizia Periodica",
      description: "Pulizia e sanificazione regolare dei carrellati per massima igiene"
    }
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Gestione carrellati a Brescia',
      serviceType: 'Gestione Carrellati',
      description:
        'Gestione professionale dei carrellati per condomini e aziende a Brescia con posizionamento, ritiro, pulizia e sanificazione dei bidoni.',
      url: '/servizi/gestione-carrellati',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Gestione Carrellati', path: '/servizi/gestione-carrellati' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Gestione Carrellati a Brescia | Artic Pulizie"
        description="Gestione professionale dei carrellati per condomini e aziende a Brescia: posizionamento, ritiro, pulizia e sanificazione dei bidoni della raccolta differenziata."
        keywords="gestione carrellati brescia, pulizia bidoni raccolta differenziata, gestione rifiuti condomini brescia"
        canonical={buildCanonicalUrl('/servizi/gestione-carrellati')}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-teal-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Trash2 className="w-8 h-8 text-teal-500" />
                <span className="text-teal-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Gestione <span className="text-teal-500">Carrellati</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Servizio professionale di gestione bidoni per la raccolta differenziata a Brescia e provincia.
                Per condomini e aziende. Posizionamento, ritiro e pulizia carrellati programmata.
              </p>
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Richiedi Preventivo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <LazyImage
                src={cdnImage('https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1280, quality: 70, fit: 'cover' })}
                fallbackSrc="https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Gestione carrellati a Brescia con Artic Pulizie"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={640}
                height={540}
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
              Cosa Include il Servizio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Una gestione completa dei carrellati che vi libera da ogni preoccupazione relativa alla raccolta differenziata.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-teal-50 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 text-teal-500 mt-0.5 flex-shrink-0" />
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
              I Vantaggi del Servizio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Affidati ai professionisti per una gestione igienica ed efficiente dei rifiuti.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-teal-600" />
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

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              A Chi Si Rivolge
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Servizio personalizzato sia per condomini che per aziende di ogni dimensione.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {serviceDetails.map((detail, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <Recycle className="w-10 h-10 text-teal-500 mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{detail.title}</h3>
                <p className="text-slate-600 mb-6">{detail.description}</p>

                <ul className="space-y-3 mb-6">
                  {detail.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-5 h-5 text-teal-500" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 pt-4">
                  <p className="text-slate-600 text-sm italic">{detail.info}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Come Funziona
            </h2>
            <p className="text-lg text-slate-600">
              Un processo semplice e organizzato per garantire la massima efficienza nella gestione dei rifiuti.
            </p>
          </div>

          <div className="space-y-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Info */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <Recycle className="w-12 h-12 text-teal-500 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Servizio Integrabile con Pulizie Condominio
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Per i condomini che già usufruiscono del nostro servizio di pulizie,
              la gestione carrellati può essere facilmente integrata nel contratto esistente
              con condizioni vantaggiose.
            </p>
            <Link
              to="/servizi/pulizie-condomini"
              className="inline-flex items-center space-x-2 text-teal-600 hover:text-teal-700 font-semibold"
            >
              <span>Scopri le Pulizie Condomini</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <LocationsGrid serviceSlug="gestione-carrellati" serviceName="Gestione Carrellati" showAll={false} />

      <RelatedBlogPosts serviceIds={['gestione-carrellati', 'pulizie-condomini']} />

      <InternalLinkSection title="Informazioni utili sulla gestione dei rifiuti" intro="Visita le pagine Artic Pulizie più richieste per servizi aggiuntivi, territori coperti, recensioni e richiesta preventivo." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Libera il Tuo Tempo, Pensa a Noi
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Richiedi un sopralluogo gratuito e senza impegno. Ti forniremo un preventivo
            personalizzato per la gestione dei carrellati del tuo condominio o azienda.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/richiedi-preventivo"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Richiedi Preventivo Gratuito</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GestioneCarrellati;
