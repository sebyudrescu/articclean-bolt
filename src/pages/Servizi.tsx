import { Building2, Factory, Hammer, Sparkles, Shield, CheckCircle, ArrowRight, Phone, Leaf, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import InternalLinkSection from '@/components/InternalLinkSection';
import LazyImage from '@/components/LazyImage';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { cdnImage } from '@/utils/image';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/utils/structuredData';

const faqItems = [
  {
    question: 'Quali servizi di pulizia offrite a Brescia?',
    answer:
      'Artic Pulizie offre servizi di pulizia professionale per uffici, condomini, industrie, vetrate, post-cantiere, giardinaggio e gestione carrellati in tutta la provincia di Brescia.'
  },
  {
    question: 'Posso richiedere un servizio di pulizia personalizzato?',
    answer:
      'Sì, creiamo piani di pulizia su misura in base al tipo di struttura, alla metratura e alla frequenza richiesta.'
  },
  {
    question: 'Quanto tempo impiegate per organizzare il servizio?',
    answer:
      'Dopo il preventivo e il sopralluogo gratuito, attiviamo il servizio entro pochi giorni con personale dedicato.'
  }
];

const Servizi = () => {
  const services = [
    {
      id: 'uffici',
      icon: Building2,
      title: "Pulizie Uffici",
      description: "Servizi completi per uffici e spazi lavorativi con prodotti professionali e personale qualificato.",
      features: [
        "Pulizia quotidiana postazioni di lavoro",
        "Sanificazione bagni e aree comuni",
        "Pulizia vetri interni ed esterni",
        "Gestione rifiuti e raccolta differenziata",
        "Aspirazione tappeti e moquette",
        "Pulizia e disinfezione superfici"
      ],
      benefits: [
        "Ambiente di lavoro sempre professionale",
        "Maggiore produttività del team",
        "Riduzione assenze per malattia",
        "Immagine aziendale impeccabile"
      ],
      image: cdnImage('https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1200, quality: 75, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 'industriale',
      icon: Factory,
      title: "Pulizie Industriali e Capannoni",
      description: "Interventi specializzati per capannoni, magazzini e ambienti industriali di ogni dimensione.",
      features: [
        "Pulizia capannoni e magazzini",
        "Aspirazione industriale con attrezzature specializzate",
        "Trattamenti pavimenti industriali",
        "Pulizia macchinari e impianti",
        "Rimozione polveri e residui di lavorazione",
        "Sanificazione aree produttive"
      ],
      benefits: [
        "Conformità alle normative di sicurezza",
        "Ambienti di lavoro più sicuri",
        "Prevenzione incidenti",
        "Mantenimento efficienza impianti"
      ],
      image: cdnImage('https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1200, quality: 80, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 'post-cantiere',
      icon: Hammer,
      title: "Pulizie Post-Cantiere",
      description: "Pulizie specializzate per la consegna di nuove costruzioni o ristrutturazioni.",
      features: [
        "Rimozione polveri da costruzione",
        "Pulizia residui di malta e cemento",
        "Lucidatura pavimenti e superfici",
        "Pulizia vetri e infissi",
        "Sanificazione completa ambienti",
        "Preparazione per l'uso immediato"
      ],
      benefits: [
        "Consegna immediata degli spazi",
        "Ambienti pronti all'uso",
        "Rimozione completa detriti",
        "Risparmio di tempo e costi"
      ],
      image: cdnImage('https://images.pexels.com/photos/8467975/pexels-photo-8467975.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1200, quality: 80, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/8467975/pexels-photo-8467975.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 'vetri',
      icon: Sparkles,
      title: "Pulizie Vetri e Vetrate",
      description: "Servizio specializzato per vetri, vetrate e superfici trasparenti di ogni tipo e dimensione.",
      features: [
        "Pulizia vetri interni ed esterni",
        "Vetrate di grandi dimensioni",
        "Lucernari e vetri di copertura",
        "Rimozione calcare e macchie persistenti",
        "Trattamenti antistatici",
        "Interventi anche in altezza"
      ],
      benefits: [
        "Luminosità naturale ottimale",
        "Immagine professionale impeccabile",
        "Maggiore durata delle superfici",
        "Risparmio energetico illuminazione"
      ],
      image: cdnImage('https://images.pexels.com/photos/7735355/pexels-photo-7735355.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1200, quality: 80, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/7735355/pexels-photo-7735355.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 'sanificazione',
      icon: Shield,
      title: "Sanificazione Ambienti",
      description: "Trattamenti certificati per la sicurezza e l'igiene degli ambienti di lavoro.",
      features: [
        "Sanificazione con prodotti certificati",
        "Trattamenti anti-batterici e virali",
        "Nebulizzazione e vaporizzazione",
        "Certificazione degli interventi",
        "Protocolli specifici per settore",
        "Monitoraggio qualità dell'aria"
      ],
      benefits: [
        "Ambiente sicuro per dipendenti",
        "Conformità normative sanitarie",
        "Riduzione rischi biologici",
        "Tranquillità per clienti e visitatori"
      ],
      image: cdnImage('https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1200, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 'condomini',
      icon: Building2,
      title: "Pulizie Condomini",
      description: "Servizi professionali per aree comuni condominiali con contratti singoli o periodici.",
      features: [
        "Pulizia scale e pianerottoli",
        "Sanificazione ascensori",
        "Pulizia atrii e ingressi",
        "Gestione bidoni raccolta differenziata",
        "Pulizia vetri aree comuni",
        "Cura cortili e giardini"
      ],
      benefits: [
        "Condominio sempre pulito e ordinato",
        "Contratti flessibili su misura",
        "Servizio affidabile e puntuale",
        "Promozione per servizi integrati"
      ],
      image: cdnImage('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1200, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 'giardinaggio',
      icon: Leaf,
      title: "Giardinaggio e Manutenzione Verde",
      description: "Cura professionale di giardini, aree verdi e spazi esterni per aziende e condomini.",
      features: [
        "Manutenzione prati e tappeti erbosi",
        "Potatura piante e siepi",
        "Pulizia aree verdi e aiuole",
        "Trattamenti fitosanitari",
        "Irrigazione e drenaggio",
        "Progettazione spazi verdi"
      ],
      benefits: [
        "Spazi esterni sempre curati",
        "Valorizzazione dell'immobile",
        "Ambiente più salubre e piacevole",
        "Servizio programmato e affidabile"
      ],
      image: cdnImage('https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1200, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      id: 'carrellati',
      icon: Trash2,
      title: "Gestione Carrellati",
      description: "Servizio completo di gestione, pulizia e manutenzione dei carrellati per la raccolta rifiuti.",
      features: [
        "Pulizia e sanificazione carrellati",
        "Gestione posizionamento bidoni",
        "Lavaggio ad alta pressione",
        "Disinfezione e deodorazione",
        "Manutenzione ordinaria",
        "Servizio programmato settimanale"
      ],
      benefits: [
        "Igiene e decoro garantiti",
        "Eliminazione cattivi odori",
        "Conformità normative sanitarie",
        "Risparmio tempo per il personale"
      ],
      image: cdnImage('https://images.pexels.com/photos/3186574/pexels-photo-3186574.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1200, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/3186574/pexels-photo-3186574.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: "Attrezzature Professionali",
      description: "Utilizziamo solo macchinari e strumenti professionali per risultati superiori."
    },
    {
      icon: Shield,
      title: "Prodotti Professionali",
      description: "Prodotti professionali ad alta efficacia sgrassante per risultati impeccabili."
    },
    {
      icon: Building2,
      title: "Esperienza Multisettoriale",
      description: "Competenze specifiche per uffici, industrie, cliniche e strutture commerciali."
    }
  ];

  const servicesPageStructuredData = [
    buildServiceSchema({
      name: 'Servizi di pulizia professionali a Brescia',
      serviceType: 'Servizi di Pulizia Professionali',
      description:
        'Pulizie uffici, condomini, industrie, vetrate, post-cantiere, giardinaggio e gestione carrellati per Brescia e provincia.',
      url: '/servizi',
      offers: services.map((service) => service.title)
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([{ name: 'Servizi', path: '/servizi' }])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Servizi di Pulizia Professionali a Brescia | Artic Pulizie"
        description="Pulizie uffici, condomini, industrie, vetrate, post-cantiere e giardinaggio a Brescia. Artic Pulizie prepara preventivi in 24 ore con squadre dedicate."
        keywords="servizi pulizie brescia, pulizie professionali brescia, pulizie uffici artic pulizie, pulizie condomini brescia"
        canonical={buildCanonicalUrl('/servizi')}
        structuredData={servicesPageStructuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            I Nostri <span className="text-sky-500">Servizi</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Soluzioni complete per aziende e privati a Brescia e provincia.
            28 dipendenti qualificati, contratti singoli o periodici programmati.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div 
                key={service.id}
                id={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                {/* Content */}
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                      {service.title}
                    </h2>
                  </div>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4">
                      Cosa Include:
                    </h3>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Benefits */}
                  <div className="bg-sky-50 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-slate-900 mb-4">
                      Benefici per la Tua Azienda:
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-sky-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                  <LazyImage
                    src={service.image}
                    fallbackSrc={service.fallbackImage}
                    alt={`${service.title} a Brescia`}
                    className="w-full h-80 lg:h-96 object-cover rounded-xl shadow-lg"
                    width={600}
                    height={480}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Perché Scegliere i Nostri Servizi
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              La qualità superiore e l'attenzione ai dettagli che ci distinguono nel settore.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-sky-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-8">
            Settori che Serviamo
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Uffici e Coworking",
              "Condomini",
              "Industrie Manifatturiere",
              "Strutture Sanitarie",
              "Aree Verdi e Giardini",
              "Scuole e Università",
              "Hotel e Ristoranti",
              "Edifici Residenziali"
            ].map((sector, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-lg p-4 hover:bg-sky-50 transition-colors duration-300"
              >
                <p className="font-semibold text-slate-700">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RelatedBlogPosts serviceIds={services.map((service) => service.id)} title="Dal nostro blog: consigli per ogni servizio" />

      <InternalLinkSection title="Pagine principali di Artic Pulizie" intro="Accedi velocemente ai contenuti chiave per conoscere l'azienda, le zone servite, le recensioni e richiedere un preventivo personalizzato." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Hai Bisogno di Un Servizio Personalizzato?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Ogni azienda è unica. Contattaci per ricevere un preventivo su misura per le tue esigenze specifiche.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/richiedi-preventivo"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Richiedi Preventivo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Chiamaci Ora</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Servizi;
