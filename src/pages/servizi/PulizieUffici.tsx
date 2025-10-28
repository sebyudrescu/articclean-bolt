import { Building2, CheckCircle, ArrowRight, Users, Clock, Shield, Sparkles, MapPin } from 'lucide-react';
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
    question: 'Come funziona il servizio di pulizie uffici a Brescia?',
    answer:
      'Effettuiamo un sopralluogo gratuito, definiamo un piano personalizzato e programmiamo gli interventi con personale dedicato Artic Pulizie.'
  },
  {
    question: 'Utilizzate prodotti certificati per gli uffici?',
    answer:
      'Sì, impieghiamo detergenti professionali certificati e protocolli conformi alle norme igienico-sanitarie.'
  },
  {
    question: 'Quali orari sono disponibili per la pulizia degli uffici?',
    answer:
      'Programmiamo interventi serali, mattutini o nel weekend per non interferire con l’attività lavorativa.'
  }
];

const PulizieUffici = () => {
  const features = [
    "Pulizia quotidiana postazioni di lavoro",
    "Sanificazione bagni e aree comuni",
    "Pulizia vetri interni ed esterni",
    "Gestione rifiuti e raccolta differenziata",
    "Aspirazione tappeti e moquette",
    "Pulizia e disinfezione superfici",
    "Pulizia sale riunioni e aree break",
    "Manutenzione aree reception e ingresso"
  ];

  const benefits = [
    {
      icon: Users,
      title: "Ambiente Professionale",
      description: "Uffici sempre puliti che trasmettono professionalità a clienti e collaboratori"
    },
    {
      icon: Clock,
      title: "Puntualità Garantita",
      description: "Interventi programmati negli orari concordati senza interferire con il lavoro"
    },
    {
      icon: Shield,
      title: "Prodotti Certificati",
      description: "Utilizziamo solo detergenti professionali ad alta efficacia sgrassante"
    },
    {
      icon: Sparkles,
      title: "Personale Qualificato",
      description: "Team formato con oltre 28 operatori esperti a vostra disposizione"
    }
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Pulizie uffici a Brescia',
      serviceType: 'Pulizie Uffici',
      description:
        'Servizi completi di pulizia e sanificazione uffici a Brescia e provincia con personale qualificato e prodotti certificati.',
      url: '/servizi/pulizie-uffici',
      areaServed: 'Brescia',
      offers: features
    }),
    buildFAQSchema(faqItems),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: 'Pulizie Uffici', path: '/servizi/pulizie-uffici' }
    ])
  ].filter(Boolean) as Record<string, unknown>[];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Pulizie Uffici a Brescia | Artic Pulizie"
        description="Pulizia uffici a Brescia e provincia con team dedicato, prodotti certificati e orari flessibili. Artic Pulizie offre preventivo gratuito in 24 ore."
        keywords="pulizie uffici brescia, impresa pulizie uffici brescia, pulizia uffici aziende brescia, sanificazione uffici artic pulizie"
        canonical={buildCanonicalUrl('/servizi/pulizie-uffici')}
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <Building2 className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold">Servizio Specializzato</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                Pulizie Uffici a Brescia – Servizi Professionali per Aziende e Studi
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-4">
                Offriamo servizi di <strong>pulizia uffici a Brescia e provincia</strong> con personale qualificato,
                attrezzature professionali e prodotti ad alta efficacia. La nostra impresa garantisce ambienti
                sempre puliti e ordinati per aziende, studi professionali e spazi di coworking.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Con oltre <strong>28 dipendenti qualificati</strong>, operiamo in tutta la provincia di Brescia
                offrendo contratti flessibili e sopralluoghi gratuiti.
              </p>
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Richiedi Preventivo Gratuito</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div>
              <LazyImage
                src={cdnImage('https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1200, quality: 75 })}
                alt="Pulizie uffici a Brescia con Artic Pulizie"
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={640}
                height={540}
                fallbackSrc="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Intro Text Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            Pulizie Professionali per Uffici a Brescia e Provincia
          </h2>
          <div className="prose prose-lg text-slate-600 space-y-4">
            <p>
              La nostra impresa di pulizie è specializzata nella <strong>pulizia e sanificazione di uffici</strong> a
              Brescia e in tutta la provincia. Serviamo quotidianamente aziende, studi professionali, uffici pubblici
              e spazi di coworking con un servizio puntuale e di alta qualità.
            </p>
            <p>
              Sappiamo quanto sia importante lavorare in un ambiente pulito e ordinato. Per questo motivo, il nostro
              team di operatori qualificati utilizza <strong>prodotti professionali ad alta efficacia sgrassante</strong> e
              attrezzature moderne per garantire risultati impeccabili in ogni intervento.
            </p>
            <p>
              Operiamo con <strong>contratti flessibili</strong>: puoi scegliere tra interventi singoli, pulizie settimanali
              o contratti periodici programmati. Ogni servizio è personalizzato in base alle tue esigenze specifiche.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Cosa Include il Nostro Servizio di Pulizia Uffici
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un servizio completo che copre ogni aspetto della pulizia professionale per il tuo ufficio a Brescia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg hover:shadow-md transition-all duration-300"
              >
                <CheckCircle className="w-5 h-5 text-sky-500 mt-0.5 flex-shrink-0" />
                <span className="text-slate-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Vantaggi delle Pulizie Professionali per Uffici
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Perché scegliere la nostra impresa per la pulizia dei tuoi uffici a Brescia
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-xl p-6 hover:bg-sky-50 transition-all duration-300 text-center"
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

      {/* Service Area */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="w-6 h-6 text-sky-500" />
              <h2 className="text-2xl font-bold text-slate-900">
                Zona Operativa: Brescia e Provincia
              </h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed">
              Operiamo in tutta la città di <strong>Brescia</strong> e nei comuni della provincia, garantendo
              puntualità e professionalità in ogni intervento. I nostri servizi di pulizia uffici sono disponibili
              sia per piccoli studi professionali che per grandi aziende in tutta la <strong>provincia di Brescia</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Perché Scegliere i Nostri Servizi di Pulizia Uffici
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">✓ Esperienza e Professionalità</h3>
              <p className="text-slate-600 leading-relaxed">
                28 dipendenti qualificati con esperienza consolidata nel settore delle pulizie professionali per uffici e aziende a Brescia
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">✓ Attrezzature Professionali</h3>
              <p className="text-slate-600 leading-relaxed">
                Utilizziamo solo macchinari certificati e prodotti ad alta efficacia sgrassante per risultati superiori
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">✓ Flessibilità e Puntualità</h3>
              <p className="text-slate-600 leading-relaxed">
                Interventi programmati negli orari più comodi per la tua attività, senza interferire con il lavoro quotidiano
              </p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-3">✓ Prezzi Competitivi</h3>
              <p className="text-slate-600 leading-relaxed">
                Tariffe trasparenti e convenienti con preventivi gratuiti e personalizzati per ogni esigenza
              </p>
            </div>
          </div>
        </div>
      </section>

      <LocationsGrid serviceSlug="pulizie-uffici" serviceName="Pulizie Uffici" showAll={false} />

      <RelatedBlogPosts serviceIds={['pulizie-uffici']} />

      <InternalLinkSection title="Collegamenti utili per i servizi di pulizia uffici" intro="Accedi rapidamente alle pagine chiave di Artic Pulizie per approfondire servizi, zone coperte, recensioni e preventivi." />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Contattaci per un Preventivo Gratuito a Brescia e Provincia
          </h2>
          <p className="text-xl text-slate-300 mb-4 leading-relaxed">
            Offriamo <strong>sopralluoghi gratuiti</strong> per valutare le tue esigenze e proporti
            la soluzione più adatta al tuo ufficio o studio professionale.
          </p>
          <p className="text-lg text-slate-400 mb-8">
            Servizio attivo in tutta Brescia e provincia con risposta entro 24 ore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/richiedi-preventivo"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Richiedi Preventivo Gratuito</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contatti"
              className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              Contattaci Ora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PulizieUffici;
