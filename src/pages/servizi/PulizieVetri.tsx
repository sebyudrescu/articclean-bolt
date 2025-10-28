import { Sparkles, CheckCircle, ArrowRight, Sun, Building, Eye, Droplets } from 'lucide-react';
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
    question: 'Con che frequenza consigliate la pulizia delle vetrate?',
    answer:
      'Per uffici e negozi consigliamo interventi mensili o bimestrali, valutando esposizione e traffico.'
  },
  {
    question: 'Effettuate pulizie di vetri in altezza?',
    answer:
      'Sì, i nostri operatori sono abilitati ai lavori in quota e utilizzano sistemi di sicurezza certificati.'
  },
  {
    question: 'Utilizzate prodotti che non lasciano aloni?',
    answer:
      'Utilizziamo sistemi ad acqua osmotizzata e detergenti professionali per garantire vetri brillanti senza aloni.'
  }
];

const PulizieVetri = () => {
  const features = [
    "Pulizia vetri interni ed esterni",
    "Vetrate di grandi dimensioni",
    "Lucernari e vetri di copertura", 
    "Rimozione calcare e macchie persistenti",
    "Trattamenti antistatici",
    "Interventi anche in altezza",
    "Pulizia cornici e infissi",
    "Manutenzione programmata"
  ];

  const benefits = [
    {
      icon: Sun,
      title: "Luminosità Naturale Ottimale",
      description: "Massima trasparenza per sfruttare al meglio la luce naturale"
    },
    {
      icon: Building,
      title: "Immagine Professionale",
      description: "Vetrate impeccabili trasmettono cura e attenzione ai dettagli"
    },
    {
      icon: Eye,
      title: "Durata delle Superfici",
      description: "Manutenzione regolare preserva e prolunga la vita dei vetri"
    },
    {
      icon: Droplets,
      title: "Risparmio Energetico",
      description: "Vetri puliti migliorano l'efficienza dell'illuminazione naturale"
    }
  ];

  const serviceTypes = [
    {
      title: "Vetri Standard",
      description: "Finestre e vetrate normali",
      features: ["Pulizia interna/esterna", "Prodotti specifici", "Intervento sicuro"],
      frequency: "Mensile/Trimestrale",
      difficulty: "Base"
    },
    {
      title: "Grandi Vetrate",
      description: "Superfici oltre 10 mq",
      features: ["Attrezzature professionali", "Squadre specializzate", "Tecniche avanzate"],
      frequency: "Bimestrale",
      difficulty: "Avanzata"
    },
    {
      title: "Interventi in Altezza",
      description: "Vetri oltre 3 metri",
      features: ["Operatori abilitati", "Sistemi di sicurezza", "Autorizzazioni complete"],
      frequency: "Su richiesta",
      difficulty: "Specialistica"
    }
  ];

  const techniques = [
    {
      title: "Metodo Tradizionale",
      description: "Tergivetro e pelle di daino per risultati perfetti",
      best: "Vetri di dimensioni standard"
    },
    {
      title: "Sistema ad Acqua Pura",
      description: "Tecnologia osmosi inversa per vetri senza aloni",
      best: "Grandi superfici e altezze"
    },
    {
      title: "Trattamenti Speciali",
      description: "Prodotti specifici per macchie persistenti e calcare",
      best: "Vetri danneggiati o trascurati"
    }
  ];

  const buildingTypes = [
    "Uffici e centri direzionali",
    "Negozi e vetrine commerciali",
    "Strutture sanitarie",
    "Scuole e università", 
    "Hotel e ristoranti",
    "Centri commerciali",
    "Edifici residenziali",
    "Capannoni industriali"
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Pulizia vetri e vetrate a Brescia',
      serviceType: 'Pulizie Vetri',
      description:
        'Pulizia professionale di vetri, vetrate e facciate continue a Brescia con sistemi ad acqua pura e personale qualificato per lavori in quota.',
      url: '/servizi/pulizie-vetri',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Pulizie Vetri', path: '/servizi/pulizie-vetri' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Pulizia Vetri e Vetrate a Brescia | Artic Pulizie"
        description="Pulizia professionale di vetri, vetrate e facciate continue a Brescia. Artic Pulizie opera in quota con sistemi ad acqua pura e prodotti anti-aloni."
        keywords="pulizie vetri brescia, pulizia vetrate brescia, lavaggio vetri in quota artic pulizie"
        canonical={buildCanonicalUrl('/servizi/pulizie-vetri')}
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Sparkles className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pulizia <span className="text-sky-500">Vetri e Vetrate</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Servizio specializzato per vetri, vetrate e superfici trasparenti. 
                Risultati perfetti senza aloni o striature, anche per interventi 
                in altezza e grandi superfici.
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
                src={cdnImage('https://images.pexels.com/photos/7735355/pexels-photo-7735355.jpeg?auto=compress&cs=tinysrgb&w=1280', { width: 1280, quality: 80 })}
                alt="Pulizia vetri a Brescia con Artic Pulizie"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={640}
                height={540}
                fallbackSrc="https://images.pexels.com/photos/7735355/pexels-photo-7735355.jpeg?auto=compress&cs=tinysrgb&w=1280"
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
              Servizi Specializzati per Vetri
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dalla finestra singola alle grandi vetrate, utilizziamo tecniche 
              e attrezzature specifiche per ogni tipo di superficie.
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
              Vantaggi dei Vetri Sempre Puliti
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Vetri puliti non sono solo una questione estetica, ma portano benefici concreti 
              per il comfort e l'efficienza energetica.
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
              Tipologie di Intervento
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Ogni tipo di vetrata richiede approcci e attrezzature specifiche 
              per garantire risultati ottimali in sicurezza.
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
                
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-slate-500 text-xs">Frequenza</p>
                    <p className="font-semibold text-slate-900 text-sm">{type.frequency}</p>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-slate-500 text-xs">Complessità</p>
                    <p className="font-semibold text-slate-900 text-sm">{type.difficulty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Techniques Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Tecniche e Metodologie
            </h2>
            <p className="text-lg text-slate-600">
              Utilizziamo diverse tecniche in base al tipo di vetro e al risultato desiderato.
            </p>
          </div>

          <div className="space-y-8">
            {techniques.map((technique, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md">
                <div className="grid md:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{technique.title}</h3>
                    <p className="text-slate-600">{technique.description}</p>
                  </div>
                  <div className="md:col-span-2">
                    <div className="bg-sky-50 rounded-lg p-4">
                      <p className="text-sky-800 font-semibold text-sm">
                        ✓ Ideale per: {technique.best}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-sky-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Sicurezza e Autorizzazioni
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Lavori in Altezza:</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• Operatori certificati per lavori in quota</li>
                  <li>• Sistemi di sicurezza omologati</li>
                  <li>• Assicurazione specifica per altezza</li>
                  <li>• Coordinamento con amministrazioni</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Attrezzature:</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• Piattaforme aeree certificate</li>
                  <li>• Sistemi ad acqua demineralizzata</li>
                  <li>• Aste telescopiche professionali</li>
                  <li>• DPI specifici per ogni situazione</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Building Types */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Edifici che Serviamo
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              La nostra esperienza abbraccia ogni tipo di struttura e contesto architettonico.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {buildingTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-lg p-4 text-center hover:bg-sky-50 transition-colors duration-300"
              >
                <p className="font-semibold text-slate-700">{type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LocationsGrid serviceSlug="pulizia-vetri" serviceName="Pulizia Vetri" showAll={false} />

      <RelatedBlogPosts serviceIds={['pulizia-vetri']} />

      <InternalLinkSection title="Altri link sulla cura delle superfici vetrate" intro="Approfondisci servizi correlati, zone operative, testimonianze e preventivo rapido offerti da Artic Pulizie." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Illumina i Tuoi Spazi con Vetri Perfetti
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Affida la pulizia delle tue vetrate ai nostri specialisti. 
            Risultati garantiti senza aloni, anche per interventi complessi.
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

export default PulizieVetri;
