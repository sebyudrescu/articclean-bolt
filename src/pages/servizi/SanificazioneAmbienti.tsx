import { Shield, CheckCircle, ArrowRight, Heart, Building, Users, Award } from 'lucide-react';
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
    question: 'Che differenza c’è tra pulizia e sanificazione?',
    answer:
      'La sanificazione elimina virus, batteri e agenti patogeni con prodotti certificati e protocolli professionali, garantendo ambienti sicuri.'
  },
  {
    question: 'Rilasciate certificati dopo la sanificazione?',
    answer:
      "Sì, Artic Pulizie rilascia report e certificazioni con i dettagli dell’intervento e dei prodotti utilizzati."
  },
  {
    question: 'Ogni quanto è consigliata la sanificazione?',
    answer:
      'La frequenza dipende dal settore: settimanale per ambienti sanitari, mensile per uffici e negozi con alto afflusso.'
  }
];

const SanificazioneAmbienti = () => {
  const features = [
    "Sanificazione con prodotti certificati",
    "Trattamenti anti-batterici e virali",
    "Nebulizzazione e vaporizzazione",
    "Certificazione degli interventi",
    "Protocolli specifici per settore",
    "Monitoraggio qualità dell'aria",
    "Sanificazione di superfici e aria",
    "Programmi di manutenzione preventiva"
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Ambiente Sicuro",
      description: "Protezione completa da virus, batteri e agenti patogeni per dipendenti e clienti"
    },
    {
      icon: Building,
      title: "Conformità Normative",
      description: "Rispetto rigoroso delle normative sanitarie e dei protocolli di sicurezza"
    },
    {
      icon: Users,
      title: "Riduzione Rischi Biologici",
      description: "Minimizzazione dei rischi di contagio e diffusione di malattie infettive"
    },
    {
      icon: Award,
      title: "Certificazioni Ufficiali",
      description: "Documentazione completa degli interventi con certificati di conformità"
    }
  ];

  const serviceTypes = [
    {
      title: "Sanificazione Standard",
      description: "Uffici e negozi",
      features: ["Trattamento superfici", "Nebulizzazione", "Certificazione base"],
      frequency: "Settimanale/Mensile",
      sectors: ["Uffici", "Negozi", "Studi"]
    },
    {
      title: "Sanificazione Avanzata",
      description: "Strutture sanitarie",
      features: ["Protocolli ospedalieri", "Monitoraggio aria", "Documentazione completa"],
      frequency: "Giornaliera",
      sectors: ["Cliniche", "Farmacie", "Laboratori"]
    },
    {
      title: "Sanificazione Industriale",
      description: "Grandi impianti",
      features: ["Sistemi automatizzati", "Controllo continuo", "Supervisione tecnica"],
      frequency: "Programmata",
      sectors: ["Industrie", "Logistica", "Alimentare"]
    }
  ];

  const protocols = [
    {
      title: "Valutazione Preliminare",
      description: "Analisi degli ambienti e identificazione dei rischi biologici specifici",
      time: "1-2 ore"
    },
    {
      title: "Preparazione Ambiente",
      description: "Protezione attrezzature e preparazione spazi per il trattamento",
      time: "30-60 min"
    },
    {
      title: "Trattamento Sanificante",
      description: "Applicazione prodotti certificati con nebulizzazione o vaporizzazione",
      time: "2-4 ore"
    },
    {
      title: "Controllo e Certificazione",
      description: "Verifica efficacia e rilascio certificazione dell'intervento",
      time: "30-45 min"
    }
  ];

  const products = [
    "Disinfettanti virucidi certificati",
    "Prodotti battericidi specifici",
    "Soluzioni fungicide professionali",
    "Detergenti sanificanti professionali",
    "Nebulizzatori professionali",
    "Sistemi di vaporizzazione"
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Sanificazione ambienti a Brescia',
      serviceType: 'Sanificazione Ambienti',
      description:
        'Sanificazione certificata di uffici, cliniche e ambienti industriali a Brescia con protocolli virucidi e documentazione ufficiale.',
      url: '/servizi/sanificazione-ambienti',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Sanificazione Ambienti', path: '/servizi/sanificazione-ambienti' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Sanificazione Ambienti a Brescia | Artic Pulizie"
        description="Sanificazione certificata di uffici, cliniche e ambienti industriali a Brescia. Artic Pulizie utilizza protocolli virucidi e rilascia certificazioni ufficiali."
        keywords="sanificazione ambienti brescia, sanificazione uffici brescia, sanificazione certificata artic pulizie"
        canonical={buildCanonicalUrl('/servizi/sanificazione-ambienti')}
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Shield className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Sanificazione <span className="text-sky-500">Ambienti</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Trattamenti certificati per la sicurezza e l'igiene degli ambienti di lavoro. 
                Protocolli professionali e prodotti certificati per garantire la massima 
                protezione da virus, batteri e agenti patogeni.
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
                src={cdnImage('https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1280, quality: 70, fit: 'cover' })}
                fallbackSrc="https://images.pexels.com/photos/4099471/pexels-photo-4099471.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Sanificazione ambienti a Brescia con Artic Pulizie"
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
              Servizi di Sanificazione Certificati
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Interventi professionali con prodotti e protocolli certificati per garantire 
              la massima sicurezza sanitaria dei tuoi ambienti.
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
              Benefici della Sanificazione Professionale
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              La sanificazione professionale garantisce ambienti sicuri e conformi alle normative sanitarie.
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

      {/* Service Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Tipologie di Sanificazione
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Protocolli specifici per ogni tipo di ambiente e settore, 
              dalla sanificazione standard a quella ospedaliera.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 mb-4">{type.description}</p>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">Caratteristiche:</h4>
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
                
                <div className="grid grid-cols-2 gap-4 text-center mb-4">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-slate-500 text-xs">Frequenza</p>
                    <p className="font-semibold text-slate-900 text-sm">{type.frequency}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-slate-500 text-xs">Settori</p>
                    <p className="font-semibold text-slate-900 text-sm">{type.sectors.length}</p>
                  </div>
                </div>
                
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex flex-wrap gap-1">
                    {type.sectors.map((sector, i) => (
                      <span key={i} className="bg-sky-100 text-sky-700 px-2 py-1 rounded text-xs">
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Protocols */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Protocollo di Sanificazione
            </h2>
            <p className="text-lg text-slate-600">
              Un processo sistematico e certificato per garantire la massima efficacia dei trattamenti.
            </p>
          </div>

          <div className="space-y-8">
            {protocols.map((protocol, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{protocol.title}</h3>
                    <span className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-medium">
                      {protocol.time}
                    </span>
                  </div>
                  <p className="text-slate-600">{protocol.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-sky-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Prodotti e Attrezzature Certificate
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Prodotti Utilizzati:</h4>
                <ul className="space-y-1">
                  {products.slice(0, 3).map((product, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-sky-500" />
                      <span className="text-slate-600 text-sm">{product}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Attrezzature:</h4>
                <ul className="space-y-1">
                  {products.slice(3).map((product, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-sky-500" />
                      <span className="text-slate-600 text-sm">{product}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Certificazioni e Settori Serviti
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Certificazioni:</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-sky-500" />
                  <span className="text-slate-700">Certificazione ISO 14001 Ambientale</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-sky-500" />
                  <span className="text-slate-700">Autorizzazione Ministero della Salute</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-sky-500" />
                  <span className="text-slate-700">Certificati prodotti PMC</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Award className="w-5 h-5 text-sky-500" />
                  <span className="text-slate-700">Formazione personale specializzato</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-6">Settori Serviti:</h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Uffici e Coworking",
                  "Strutture Sanitarie", 
                  "Scuole e Università",
                  "Hotel e Ristoranti",
                  "Palestre e Spa",
                  "Industrie Alimentari",
                  "Centri Commerciali",
                  "Trasporti Pubblici"
                ].map((sector, index) => (
                  <div 
                    key={index}
                    className="bg-slate-50 rounded-lg p-3 text-center hover:bg-sky-50 transition-colors duration-300"
                  >
                    <p className="font-medium text-slate-700 text-sm">{sector}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationsGrid serviceSlug="sanificazione-ambienti" serviceName="Sanificazione Ambienti" showAll={false} />

      <RelatedBlogPosts serviceIds={['sanificazione-ambienti']} />

      <InternalLinkSection title="Approfondimenti sulla sanificazione professionale" intro="Visita le altre pagine Artic Pulizie per conoscere tutti i servizi disponibili, le aree coperte, le recensioni certificate e richiedere un preventivo." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Proteggi i Tuoi Ambienti con la Sanificazione Professionale
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Affidati ai nostri esperti per garantire la massima sicurezza sanitaria. 
            Interventi certificati e conformi alle normative più rigorose.
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

export default SanificazioneAmbienti;
