import { Award, Users, MapPin, Calendar, Target, Heart, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/utils/structuredData';
import InternalLinkSection from '@/components/InternalLinkSection';
import LazyImage from '@/components/LazyImage';
import { cdnImage } from '@/utils/image';

const ChiSiamo = () => {
  const stats = [
    { number: "15+", label: "Anni di Esperienza" },
    { number: "28", label: "Dipendenti Qualificati" },
    { number: "200+", label: "Clienti Soddisfatti" },
    { number: "100%", label: "Professionalità" }
  ];

  const values = [
    {
      icon: Target,
      title: "Precisione",
      description: "Ogni intervento è eseguito con attenzione meticolosa ai dettagli per garantire risultati impeccabili."
    },
    {
      icon: Heart,
      title: "Passione",
      description: "Amiamo il nostro lavoro e ci impegniamo ogni giorno per offrire il meglio ai nostri clienti."
    },
    {
      icon: Shield,
      title: "Affidabilità",
      description: "Siamo un partner su cui puoi contare, con contratti chiari e servizi sempre puntuali."
    },
    {
      icon: Zap,
      title: "Efficienza",
      description: "Ottimizziamo tempi e risorse per offrirti servizi di qualità al giusto prezzo."
    }
  ];

  const team = [
    {
      role: "Personale Operativo",
      count: "24",
      description: "Operatori specializzati e formati per ogni tipo di intervento di pulizia"
    },
    {
      role: "Coordinatori",
      count: "3",
      description: "Supervisori che garantiscono la qualità del servizio e coordinano le operazioni"
    },
    {
      role: "Area Manager",
      count: "1",
      description: "Gestione strategica e rapporti con i clienti per un servizio personalizzato"
    }
  ];

  const structuredData = [
    buildServiceSchema({
      name: 'Impresa di pulizie Artic Pulizie',
      serviceType: 'Servizi di Pulizia Professionali',
      description: 'Artic Pulizie opera a Brescia con un team di 28 professionisti qualificati per aziende, condomini e industrie.',
      url: '/chi-siamo'
    }),
    buildBreadcrumbSchema([{ name: 'Chi Siamo', path: '/chi-siamo' }])
  ];

  return (
    <>
      <SEO
        title="Chi Siamo | Artic Pulizie Brescia"
        description="Conosci Artic Pulizie: impresa di pulizie a Brescia con 15 anni di esperienza, 28 professionisti qualificati e servizi certificati per aziende e condomini."
        keywords="artic pulizie chi siamo, impresa pulizie brescia team, azienda pulizie artic pulizie"
        canonical={buildCanonicalUrl('/chi-siamo')}
        structuredData={structuredData}
      />

      <main className="flex-grow pt-16">
        <section className="relative bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Chi Siamo
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Artic Pulizie è l’impresa di pulizie di Brescia con oltre 15 anni di esperienza al servizio di aziende, condomini e spazi industriali.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-sky-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  La Nostra Storia
                </h2>
                <div className="space-y-6 text-slate-600 leading-relaxed">
                  <p>
                    Fondata con la missione di portare eccellenza e professionalità nel settore
                    delle pulizie, <strong>Artic Pulizie</strong> è cresciuta fino a diventare
                    un punto di riferimento in Lombardia per servizi di pulizia professionali.
                  </p>
                  <p>
                    Con un team di <strong>28 dipendenti qualificati</strong>, operiamo quotidianamente
                    in uffici, condomini, stabilimenti industriali e spazi commerciali, garantendo
                    standard di qualità elevati e un servizio sempre puntuale e affidabile.
                  </p>
                  <p>
                    La nostra forza risiede nella formazione continua del personale, nell'utilizzo
                    di <strong>prodotti professionali certificati</strong> e nell'attenzione costante
                    alle esigenze specifiche di ogni cliente.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <LazyImage
                    src={cdnImage('https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1024, quality: 70, fit: 'cover' })}
                    fallbackSrc="https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Team Artic Pulizie al lavoro a Brescia"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    width={600}
                    height={512}
                  />
                  <LazyImage
                    src={cdnImage('https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1024, quality: 70, fit: 'cover' })}
                    fallbackSrc="https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Pulizie professionali per uffici a Brescia"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                    width={600}
                    height={420}
                  />
                </div>
                <div className="space-y-4 pt-8">
                  <LazyImage
                    src={cdnImage('https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1024, quality: 70, fit: 'cover' })}
                    fallbackSrc="https://images.pexels.com/photos/4099467/pexels-photo-4099467.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Prodotti professionali per la sanificazione"
                    className="rounded-2xl shadow-lg w-full h-48 object-cover"
                    width={600}
                    height={420}
                  />
                  <LazyImage
                    src={cdnImage('https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1024, quality: 70, fit: 'cover' })}
                    fallbackSrc="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=1200"
                    alt="Risultati impeccabili dopo l'intervento"
                    className="rounded-2xl shadow-lg w-full h-64 object-cover"
                    width={600}
                    height={512}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <InternalLinkSection title="Continua a conoscere Artic Pulizie" intro="Esplora i nostri servizi, scopri le zone servite, leggi le recensioni dei clienti e richiedi un preventivo in pochi minuti." />

        <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                I Nostri Valori
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Principi che guidano ogni nostra azione e ci rendono il partner ideale
                per le tue esigenze di pulizia professionale.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {value.description}
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
                Il Nostro Team
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                28 professionisti dedicati che lavorano ogni giorno per garantire
                ambienti puliti, sicuri e accoglienti.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {team.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-sky-50 to-cyan-50 rounded-2xl p-8 text-center"
                >
                  <div className="text-5xl font-bold text-sky-600 mb-3">
                    {member.count}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {member.role}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-sky-500 to-cyan-500 rounded-3xl p-8 md:p-12 text-center text-white">
              <Users className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Unisciti ai Nostri Clienti Soddisfatti
              </h3>
              <p className="text-lg mb-8 text-sky-50 max-w-2xl mx-auto">
                Oltre 200 aziende e condomini si affidano a noi per mantenere i loro
                spazi puliti e accoglienti. Scopri perché Artic Pulizie è la scelta giusta.
              </p>
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center space-x-2 bg-white text-sky-600 px-8 py-4 rounded-xl font-semibold hover:bg-sky-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <span>Richiedi un Preventivo Gratuito</span>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-sky-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Dove Operiamo
                </h3>
                <p className="text-slate-600">
                  Lombardia e province limitrofe
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Disponibilità
                </h3>
                <p className="text-slate-600">
                  Servizi programmati e interventi urgenti
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-sky-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Certificazioni
                </h3>
                <p className="text-slate-600">
                  Personale formato e prodotti certificati
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ChiSiamo;
