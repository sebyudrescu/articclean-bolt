import { Factory, CheckCircle, ArrowRight, Shield, Users, Wrench, AlertTriangle } from 'lucide-react';
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
    question: 'Quali ambienti industriali pulisce Artic Pulizie?',
    answer:
      'Puliamo capannoni, magazzini, stabilimenti produttivi, linee di produzione e impianti industriali in tutta la provincia di Brescia.'
  },
  {
    question: 'Che attrezzature utilizzate per le pulizie industriali?',
    answer:
      'Usiamo lavasciuga industriali, aspiratori ad alta potenza, idropulitrici e macchinari dedicati alle superfici continue.'
  },
  {
    question: 'È possibile programmare interventi notturni?',
    answer:
      'Sì, pianifichiamo anche interventi in orario notturno o nei weekend per non fermare la produzione.'
  }
];

const PulizieIndustriali = () => {
  const features = [
    "Pulizia capannoni e magazzini",
    "Aspirazione industriale specializzata",
    "Trattamenti pavimenti industriali",
    "Pulizia macchinari e impianti",
    "Rimozione polveri e residui di lavorazione",
    "Sanificazione aree produttive",
    "Pulizia sistemi di ventilazione",
    "Gestione rifiuti industriali"
  ];

  const benefits = [
    {
      icon: Shield,
      title: "Conformità Normative",
      description: "Rispetto rigoroso di tutte le normative di sicurezza e igiene industriale"
    },
    {
      icon: Users,
      title: "Ambienti di Lavoro Sicuri",
      description: "Riduzione dei rischi per i lavoratori attraverso pulizie specializzate"
    },
    {
      icon: Wrench,
      title: "Efficienza Impianti",
      description: "Manutenzione che preserva e migliora le prestazioni dei macchinari"
    },
    {
      icon: AlertTriangle,
      title: "Prevenzione Incidenti",
      description: "Ambienti puliti riducono significativamente i rischi di incidenti"
    }
  ];

  const industrialTypes = [
    {
      title: "Piccole Industrie",
      description: "1.000-5.000 mq",
      features: ["Pulizia settimanale", "Gestione rifiuti", "Trattamento pavimenti"],
      sectors: ["Artigianato", "Piccole manifatture", "Laboratori"]
    },
    {
      title: "Medie Industrie", 
      description: "5.000-20.000 mq",
      features: ["Pulizia programmata", "Macchinari specializzati", "Squadre dedicate"],
      sectors: ["Automotive", "Alimentare", "Chimico"]
    },
    {
      title: "Grandi Complessi",
      description: "20.000+ mq",
      features: ["Servizio H24", "Supervisione in loco", "Protocolli personalizzati"],
      sectors: ["Siderurgico", "Petrolchimico", "Farmaceutico"]
    }
  ];

  const equipment = [
    "Aspiratori industriali ad alta potenza",
    "Lavasciuga per grandi superfici", 
    "Idropulitrici professionali",
    "Sistemi di nebulizzazione",
    "Attrezzature per lavoro in altezza",
    "Macchinari per trattamento pavimenti"
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Pulizie industriali a Brescia',
      serviceType: 'Pulizie Industriali',
      description:
        'Pulizie industriali e manutenzione capannoni a Brescia con macchinari professionali, protocolli certificati e personale specializzato.',
      url: '/servizi/pulizie-industriali',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Pulizie Industriali', path: '/servizi/pulizie-industriali' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Pulizie Industriali a Brescia | Artic Pulizie"
        description="Pulizie industriali e manutenzione capannoni a Brescia con macchinari professionali e protocolli certificati. Artic Pulizie garantisce sicurezza e continuità produttiva."
        keywords="pulizie industriali brescia, pulizia capannoni brescia, pulizie fabbriche artic pulizie, manutenzione industriale brescia"
        canonical={buildCanonicalUrl('/servizi/pulizie-industriali')}
        structuredData={structuredData}
      />
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Factory className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Pulizie <span className="text-sky-500">Industriali</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Interventi specializzati per capannoni, magazzini e ambienti industriali. 
                Attrezzature professionali e personale formato per gestire ogni tipo di 
                ambiente produttivo in totale sicurezza.
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
                src={cdnImage('https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1280', { width: 1280, quality: 80 })}
                alt="Pulizie industriali a Brescia con Artic Pulizie"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={640}
                height={540}
                fallbackSrc="https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1280"
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
              Servizi Industriali Specializzati
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Interventi mirati per ogni tipo di ambiente industriale con attrezzature 
              e tecniche specifiche per il settore.
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
              Benefici per la Tua Industria
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Pulizie industriali professionali garantiscono sicurezza, efficienza e conformità normativa.
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

      {/* Industrial Types */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Soluzioni per Ogni Settore Industriale
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dall'artigianato alle grandi industrie, abbiamo l'esperienza e le competenze 
              per ogni tipo di ambiente produttivo.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {industrialTypes.map((type, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-2">{type.title}</h3>
                <p className="text-slate-600 mb-4">{type.description}</p>
                
                <div className="mb-6">
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
                
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Settori:</h4>
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

      {/* Equipment Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Attrezzature Professionali
            </h2>
            <p className="text-lg text-slate-600">
              Utilizziamo solo macchinari industriali di ultima generazione per garantire 
              risultati superiori e massima efficienza.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {equipment.map((item, index) => (
              <div 
                key={index}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm"
              >
                <Wrench className="w-6 h-6 text-sky-500 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-sky-50 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Sicurezza e Certificazioni
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Formazione del Personale:</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• Corso sicurezza sui luoghi di lavoro</li>
                  <li>• Formazione su sostanze chimiche</li>
                  <li>• Utilizzo DPI specifici per industria</li>
                  <li>• Procedure di emergenza</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Certificazioni:</h4>
                <ul className="space-y-1 text-slate-600">
                  <li>• ISO 45001 Sicurezza sul Lavoro</li>
                  <li>• Certificazione ambientale ISO 14001</li>
                  <li>• Abilitazioni per spazi confinati</li>
                  <li>• Autorizzazioni trasporto rifiuti</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <LocationsGrid serviceSlug="pulizie-industriali" serviceName="Pulizie Industriali" showAll={false} />

      <RelatedBlogPosts serviceIds={['pulizie-industriali']} />

      <InternalLinkSection title="Collegamenti per responsabili di stabilimento" intro="Approfondisci rapidamente gli altri contenuti Artic Pulizie: elenco servizi, zone operative, recensioni clienti industriali e richiesta preventivo." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Migliora la Sicurezza del Tuo Stabilimento
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Affidati ai nostri esperti per pulizie industriali sicure ed efficaci. 
            Sopralluogo gratuito e preventivo personalizzato entro 24 ore.
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

export default PulizieIndustriali;
