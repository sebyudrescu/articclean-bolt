import { Star, Quote, Building2, Home, Factory } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from '@/components/SEO';
import InternalLinkSection from '@/components/InternalLinkSection';
import { buildCanonicalUrl, siteMetadata } from '@/data/siteMetadata';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/utils/structuredData';

const Recensioni = () => {
  const reviews = [
    {
      id: 1,
      name: "Marco Rossi",
      company: "TechCorp Milano",
      role: "Responsabile Facilities",
      rating: 5,
      date: "Gennaio 2024",
      text: "Artic Pulizie si occupa dei nostri uffici da 3 anni. Professionalità e qualità eccellenti, il nostro team lavora sempre in un ambiente perfetto. Non potremmo essere più soddisfatti del servizio ricevuto.",
      service: "Pulizie Uffici",
      icon: Building2
    },
    {
      id: 2,
      name: "Laura Bianchi",
      company: "Studio Legale Associato",
      role: "Partner",
      rating: 5,
      date: "Dicembre 2023",
      text: "Servizio impeccabile e puntuale. I clienti apprezzano sempre la pulizia dei nostri locali. Il team è discreto, efficiente e molto professionale. Consiglio vivamente Artic Pulizie.",
      service: "Pulizie Uffici",
      icon: Building2
    },
    {
      id: 3,
      name: "Giuseppe Verdi",
      company: "Industrie Meccaniche SpA",
      role: "Direttore di Stabilimento",
      rating: 5,
      date: "Novembre 2023",
      text: "Per i nostri capannoni industriali, Artic Pulizie garantisce standard elevati di pulizia e sicurezza. Un partner affidabile che comprende le esigenze del settore industriale.",
      service: "Pulizie Industriali",
      icon: Factory
    },
    {
      id: 4,
      name: "Anna Ferrari",
      company: "Condominio Via Roma 45",
      role: "Amministratrice",
      rating: 5,
      date: "Ottobre 2023",
      text: "Finalmente un'impresa seria e affidabile! Le aree comuni del nostro condominio sono sempre perfette. I condomini sono molto soddisfatti del servizio.",
      service: "Pulizie Condomini",
      icon: Home
    },
    {
      id: 5,
      name: "Roberto Martini",
      company: "Retail Fashion Group",
      role: "Store Manager",
      rating: 5,
      date: "Settembre 2023",
      text: "La pulizia dei nostri negozi è fondamentale per l'immagine del brand. Artic Pulizie lo ha capito perfettamente e ci garantisce standard altissimi ogni giorno.",
      service: "Pulizie Commerciali",
      icon: Building2
    },
    {
      id: 6,
      name: "Chiara Lombardi",
      company: "Medical Center",
      role: "Responsabile Sanitario",
      rating: 5,
      date: "Agosto 2023",
      text: "In un centro medico, l'igiene è prioritaria. Artic Pulizie utilizza prodotti certificati e protocolli rigorosi. Ci fidiamo completamente di loro.",
      service: "Sanificazione Ambienti",
      icon: Building2
    },
    {
      id: 7,
      name: "Stefano Colombo",
      company: "Condominio Parco Verde",
      role: "Amministratore",
      rating: 5,
      date: "Luglio 2023",
      text: "Ottimo servizio di gestione dei carrellati e pulizia delle aree comuni. Sempre puntuali e disponibili per qualsiasi esigenza straordinaria.",
      service: "Gestione Carrellati",
      icon: Home
    },
    {
      id: 8,
      name: "Elena Russo",
      company: "Hotel Millennium",
      role: "Direttore",
      rating: 5,
      date: "Giugno 2023",
      text: "Collaboriamo con Artic Pulizie per le pulizie post-ristrutturazione delle nostre suite. Risultati impeccabili in tempi record. Altamente raccomandati.",
      service: "Pulizie Post-Cantiere",
      icon: Building2
    },
    {
      id: 9,
      name: "Paolo Galli",
      company: "Shopping Mall Centrale",
      role: "Facility Manager",
      rating: 5,
      date: "Maggio 2023",
      text: "Gestiscono le pulizie di un centro commerciale con oltre 50 negozi. Organizzazione perfetta, personale qualificato e sempre disponibile.",
      service: "Pulizie Commerciali",
      icon: Building2
    }
  ];

  const stats = [
    { number: "200+", label: "Clienti Attivi" },
    { number: "4.9/5", label: "Valutazione Media" },
    { number: "98%", label: "Clienti Soddisfatti" },
    { number: "85%", label: "Rinnovo Contratti" }
  ];

  const reviewStructuredData = [
    buildServiceSchema({
      name: 'Servizi Artic Pulizie',
      serviceType: 'Servizi di Pulizia Professionali',
      description: 'Recensioni dei clienti di Artic Pulizie a Brescia e provincia.',
      url: '/recensioni',
      aggregateRating: siteMetadata.aggregateRating,
      reviews: reviews.slice(0, 8).map((review) => ({
        author: review.name,
        reviewBody: review.text,
        ratingValue: review.rating
      }))
    }),
    buildBreadcrumbSchema([{ name: 'Recensioni', path: '/recensioni' }])
  ].filter(Boolean) as Record<string, unknown>[];

  const renderStars = (rating: number) => {
    return (
      <div className="flex space-x-1">
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating
                ? 'fill-yellow-400 text-yellow-400'
                : 'text-slate-300'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <SEO
        title="Recensioni Clienti | Artic Pulizie Brescia"
        description="Leggi le recensioni reali sui servizi Artic Pulizie: oltre 200 aziende e condomini di Brescia si affidano al nostro team per pulizie professionali."
        keywords="recensioni artic pulizie, testimonianze clienti pulizie brescia, opinioni artic pulizie"
        canonical={buildCanonicalUrl('/recensioni')}
        structuredData={reviewStructuredData}
      />

      <main className="flex-grow pt-16">
        <section className="relative bg-gradient-to-br from-sky-50 via-white to-cyan-50 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
                Recensioni dei Nostri Clienti
              </h1>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                La soddisfazione dei nostri clienti è la nostra migliore referenza.
                Scopri cosa dicono di noi le aziende e i condomini che si affidano ad Artic Pulizie.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
            <div className="grid lg:grid-cols-2 gap-8">
              {reviews.map((review) => {
                const Icon = review.icon;
                return (
                  <div
                    key={review.id}
                    className="bg-gradient-to-br from-slate-50 to-sky-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">{review.name}</h3>
                          <p className="text-sm text-slate-600">{review.role}</p>
                        </div>
                      </div>
                      <Quote className="w-8 h-8 text-sky-200" />
                    </div>

                    <div className="mb-4">
                      {renderStars(review.rating)}
                    </div>

                    <p className="text-slate-700 leading-relaxed mb-6">
                      "{review.text}"
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{review.company}</p>
                        <p className="text-xs text-slate-500">{review.service}</p>
                      </div>
                      <span className="text-sm text-slate-500">{review.date}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-slate-50 to-sky-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Perché i Clienti Scelgono Artic Pulizie?
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Professionalità Costante</h4>
                    <p className="text-slate-600 text-sm">Standard elevati in ogni intervento, sempre</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Puntualità Garantita</h4>
                    <p className="text-slate-600 text-sm">Rispettiamo sempre gli orari concordati</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Personale Qualificato</h4>
                    <p className="text-slate-600 text-sm">28 operatori formati e certificati</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Flessibilità Oraria</h4>
                    <p className="text-slate-600 text-sm">Adattiamo gli orari alle tue esigenze</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Prodotti Certificati</h4>
                    <p className="text-slate-600 text-sm">Solo prodotti professionali di qualità</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-sky-500 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Supporto Continuo</h4>
                    <p className="text-slate-600 text-sm">Un referente sempre a tua disposizione</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <InternalLinkSection title="Collegamenti dopo aver letto le recensioni" intro="Dai un'occhiata ai nostri servizi, verifica le zone coperte, consulta tutte le recensioni e richiedi un preventivo dedicato." />

        <section className="py-20 bg-gradient-to-r from-sky-500 to-cyan-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Vuoi Diventare Anche Tu un Cliente Soddisfatto?
            </h2>
            <p className="text-xl mb-8 text-sky-50">
              Unisciti alle oltre 200 aziende e condomini che hanno scelto Artic Pulizie
              per la qualità e l'affidabilità del servizio.
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

export default Recensioni;
