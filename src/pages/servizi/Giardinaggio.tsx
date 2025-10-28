import { Trees, CheckCircle, ArrowRight, Leaf, Sun, Droplets, Scissors } from 'lucide-react';
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
    question: 'Quali servizi di giardinaggio offrite a Brescia?',
    answer:
      "Artic Pulizie cura taglio erba, potature, manutenzione aiuole, irrigazione e trattamenti stagionali per aree verdi aziendali e condominiali."
  },
  {
    question: 'Posso abbinare il giardinaggio alle pulizie condominiali?',
    answer:
      'Sì, offriamo pacchetti combinati pulizie + giardinaggio con condizioni dedicate ai condomini gestiti da Artic Pulizie.'
  },
  {
    question: 'Effettuate interventi straordinari su richiesta?',
    answer:
      'Interveniamo su richiesta per potature importanti, sistemazione stagionale e rifacimento aree verdi.'
  }
];

const Giardinaggio = () => {
  const features = [
    "Manutenzione parchi e giardini",
    "Cura e potatura piante",
    "Manutenzione aiuole",
    "Taglio erba e sfalcio",
    "Pulizia e raccolta foglie",
    "Trattamenti fitosanitari",
    "Concimazione e irrigazione",
    "Sistemazione aree verdi"
  ];

  const benefits = [
    {
      icon: Trees,
      title: "Verde Sempre Curato",
      description: "Giardini e parchi in perfette condizioni tutto l'anno"
    },
    {
      icon: Sun,
      title: "Interventi Stagionali",
      description: "Manutenzione programmata secondo le esigenze stagionali delle piante"
    },
    {
      icon: Leaf,
      title: "Esperienza e Competenza",
      description: "Personale qualificato con conoscenze botaniche e tecniche specifiche"
    },
    {
      icon: Droplets,
      title: "Promozione Condomini",
      description: "Condizioni speciali per condomini con contratto pulizie attivo"
    }
  ];

  const serviceTypes = [
    {
      title: "Manutenzione Ordinaria",
      description: "Contratti periodici",
      features: [
        "Taglio erba regolare",
        "Potatura siepi",
        "Pulizia aiuole",
        "Controllo irrigazione"
      ],
      frequency: "Settimanale o quindicinale"
    },
    {
      title: "Manutenzione Straordinaria",
      description: "Interventi occasionali",
      features: [
        "Potature importanti",
        "Sistemazione completa",
        "Piantumazioni nuove",
        "Rifacimento aiuole"
      ],
      frequency: "Su richiesta"
    },
    {
      title: "Servizio Stagionale",
      description: "Preparazione stagioni",
      features: [
        "Preparazione primavera",
        "Manutenzione estiva",
        "Pulizia autunnale",
        "Protezione inverno"
      ],
      frequency: "4 interventi l'anno"
    }
  ];

  const areas = [
    "Giardini condominiali",
    "Parchi privati",
    "Aree verdi aziendali",
    "Giardini ville",
    "Aiuole pubbliche",
    "Cortili e terrazzi"
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Giardinaggio e manutenzione verde a Brescia',
      serviceType: 'Giardinaggio',
      description:
        'Cura professionale di giardini condominiali e aree verdi aziendali a Brescia con contratti periodici e interventi straordinari.',
      url: '/servizi/giardinaggio',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Giardinaggio', path: '/servizi/giardinaggio' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Giardinaggio e Manutenzione Verde a Brescia | Artic Pulizie"
        description="Cura professionale di giardini condominiali e aree verdi aziendali a Brescia. Artic Pulizie offre contratti periodici e interventi straordinari su richiesta."
        keywords="giardinaggio brescia, manutenzione verde brescia, cura giardini artic pulizie"
        canonical={buildCanonicalUrl('/servizi/giardinaggio')}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-emerald-50/30 to-green-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Trees className="w-8 h-8 text-emerald-500" />
                <span className="text-emerald-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Giardinaggio e <span className="text-emerald-500">Manutenzione Verde</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Cura e manutenzione professionale di parchi, giardini e aiuole a Brescia e provincia.
                Interventi singoli o contratti periodici programmati. Promozione speciale per condomini.
              </p>
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Richiedi Preventivo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <LazyImage
                src={cdnImage('https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1280, quality: 70, fit: 'cover' })}
                fallbackSrc="https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Giardinaggio professionale a Brescia con Artic Pulizie"
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
              I Nostri Servizi di Giardinaggio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un servizio completo per mantenere le vostre aree verdi sempre curate e rigogliose in ogni stagione.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-slate-50 rounded-lg hover:bg-emerald-50 transition-colors duration-300"
              >
                <CheckCircle className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
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
              Vantaggi del Nostro Servizio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Affidati ai nostri esperti per avere aree verdi sempre perfette senza preoccupazioni.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-emerald-600" />
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
              Tipologie di Servizio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Scegli la soluzione più adatta alle tue esigenze: manutenzione ordinaria, straordinaria o stagionale.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {serviceTypes.map((type, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <Scissors className="w-10 h-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 mb-4">{type.description}</p>

                <ul className="space-y-2 mb-6">
                  {type.features.map((feature, i) => (
                    <li key={i} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-emerald-500" />
                      <span className="text-slate-600 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t border-slate-200 pt-4">
                  <p className="text-emerald-600 font-semibold text-sm">
                    Frequenza: {type.frequency}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Aree Verdi che Curiamo
            </h2>
            <p className="text-lg text-slate-600">
              Interveniamo su ogni tipologia di area verde, privata o condominiale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {areas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 text-center hover:bg-emerald-50 transition-colors duration-300"
              >
                <p className="font-semibold text-slate-700">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Box */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg">
            <Leaf className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Promozione Speciale Condomini
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Per i condomini dove già effettuiamo le pulizie, offriamo condizioni vantaggiose
              per associare i servizi di giardinaggio e manutenzione del verde.
            </p>
            <div className="bg-emerald-50 rounded-lg p-6">
              <p className="text-emerald-800 font-semibold mb-2">
                Risparmia associando i servizi!
              </p>
              <p className="text-slate-600">
                Contattaci per scoprire le nostre offerte dedicate ai condomini con contratto pulizie attivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocationsGrid serviceSlug="giardinaggio" serviceName="Giardinaggio" showAll={false} />

      <RelatedBlogPosts serviceIds={['giardinaggio']} />

      <InternalLinkSection title="Servizi correlati al verde e alla pulizia" intro="Raggiungi le altre pagine Artic Pulizie per scoprire tutti i servizi disponibili, le zone operative, le testimonianze e richiedere un preventivo." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Trasforma le Tue Aree Verdi
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Richiedi un sopralluogo gratuito e senza impegno. Ti forniremo un preventivo
            personalizzato per la cura del tuo giardino o parco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/richiedi-preventivo"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-600 transition-all duration-300 shadow-lg hover:shadow-xl"
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

export default Giardinaggio;
