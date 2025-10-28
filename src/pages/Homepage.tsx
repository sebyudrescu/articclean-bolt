import { ArrowRight, Sparkles, Shield, Clock, Award, Users, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CTASection } from '@/components/ui/cta-with-rectangle';
import SEO from '@/components/SEO';
import LazyImage from '@/components/LazyImage';
import { siteMetadata, buildCanonicalUrl } from '@/data/siteMetadata';
import { cdnImage } from '@/utils/image';
import { buildBreadcrumbSchema, buildFAQSchema, buildServiceSchema } from '@/utils/structuredData';

const homepageStructuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteMetadata.baseUrl}#website`,
    name: siteMetadata.siteName,
    url: siteMetadata.baseUrl,
    publisher: {
      '@type': 'Organization',
      name: siteMetadata.legalName
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: `${siteMetadata.baseUrl}/ricerca?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  },
  buildServiceSchema({
    name: 'Servizi di pulizia professionale Artic Pulizie',
    serviceType: 'Pulizie Professionali',
    description: 'Impresa di pulizie a Brescia e provincia per uffici, condomini, industrie e sanificazioni specialistiche.',
    url: '/',
    areaServed: siteMetadata.locality,
    offers: [
      'Pulizie Uffici a Brescia',
      'Pulizie Condomini Brescia e Provincia',
      'Sanificazione Ambienti Professionale',
      'Pulizie Industriali e Capannoni'
    ],
    aggregateRating: siteMetadata.aggregateRating
  }),
  buildFAQSchema([
    {
      question: 'Offrite pulizie uffici a Brescia?',
      answer: 'Sì, Artic Pulizie gestisce pulizie uffici a Brescia e provincia con turni programmati e personale selezionato.'
    },
    {
      question: 'Quanto tempo impiegate per inviare un preventivo?',
      answer: 'Invieremo un preventivo personalizzato entro 24 ore dalla richiesta, con possibilità di sopralluogo gratuito.'
    },
    {
      question: 'Disponete di certificazioni e prodotti professionali?',
      answer: 'Utilizziamo esclusivamente prodotti professionali certificati e protocolli di sanificazione aggiornati.'
    }
  ]),
  buildBreadcrumbSchema([])
].filter(Boolean) as Record<string, unknown>[];

const Homepage = () => {
  const services = [
    {
      title: "Pulizie Uffici",
      description: "Servizi completi per uffici e spazi lavorativi con prodotti professionali e personale qualificato.",
      icon: "🏢",
      features: ["Pulizia quotidiana", "Sanificazione postazioni", "Gestione rifiuti"],
      link: "/servizi/pulizie-uffici",
      image: cdnImage('https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 75 }),
      fallbackImage: 'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Pulizie Condomini",
      description: "Pulizie professionali per aree comuni condominiali con contratti singoli o periodici programmati.",
      icon: "🏘️",
      features: ["Aree comuni", "Scale e ascensori", "Gestione carrellati"],
      link: "/servizi/pulizie-condomini",
      image: cdnImage('https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Pulizie Industriali",
      description: "Interventi specializzati per capannoni, magazzini e ambienti industriali di ogni dimensione.",
      icon: "🏭",
      features: ["Pulizia capannoni", "Aspirazione industriale", "Trattamento pavimenti"],
      link: "/servizi/pulizie-industriali",
      image: cdnImage('https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 75 }),
      fallbackImage: 'https://images.pexels.com/photos/4484078/pexels-photo-4484078.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Pulizie Vetri e Vetrate",
      description: "Servizio specializzato per vetri, vetrate e superfici trasparenti di ogni tipo e dimensione.",
      icon: "✨",
      features: ["Vetri senza aloni", "Interventi in altezza", "Grandi superfici"],
      link: "/servizi/pulizie-vetri",
      image: cdnImage('https://images.pexels.com/photos/7735355/pexels-photo-7735355.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 75 }),
      fallbackImage: 'https://images.pexels.com/photos/7735355/pexels-photo-7735355.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Giardinaggio",
      description: "Cura e manutenzione di parchi, giardini e aiuole. Promozione speciale per condomini.",
      icon: "🌳",
      features: ["Manutenzione verde", "Potature", "Cura aiuole"],
      link: "/servizi/giardinaggio",
      image: cdnImage('https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      title: "Gestione Carrellati",
      description: "Gestione professionale dei bidoni per la raccolta differenziata in condomini e aziende.",
      icon: "♻️",
      features: ["Raccolta differenziata", "Pulizia carrellati", "Gestione periodica"],
      link: "/servizi/gestione-carrellati",
      image: cdnImage('https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 960, quality: 70, fit: 'cover' }),
      fallbackImage: 'https://images.pexels.com/photos/3735218/pexels-photo-3735218.jpeg?auto=compress&cs=tinysrgb&w=1200'
    }
  ];

  const advantages = [
    {
      icon: Award,
      title: "Alta Qualità del Servizio",
      description: "Un team di 28 dipendenti qualificati al servizio di aziende e privati con standard elevati."
    },
    {
      icon: Clock,
      title: "Puntualità Garantita",
      description: "Rispettiamo sempre gli orari concordati per non interferire con le tue attività lavorative."
    },
    {
      icon: Shield,
      title: "Prodotti Professionali",
      description: "Utilizziamo prodotti professionali ad alta efficacia sgrassante per risultati impeccabili."
    },
    {
      icon: Users,
      title: "Personale Qualificato",
      description: "Staff formato e aggiornato sui migliori standard di qualità e sicurezza sul lavoro."
    }
  ];

  const testimonials = [
    {
      name: "Marco Rossi",
      company: "TechCorp Milano",
      text: "Artic Pulizie si occupa dei nostri uffici da 3 anni. Professionalità e qualità eccellenti, il nostro team lavora sempre in un ambiente perfetto.",
      rating: 5,
      role: "Responsabile Facilities"
    },
    {
      name: "Laura Bianchi", 
      company: "Studio Legale Associato",
      text: "Servizio impeccabile e puntuale. I clienti apprezzano sempre la pulizia dei nostri locali. Consiglio vivamente Artic Pulizie.",
      rating: 5,
      role: "Partner"
    },
    {
      name: "Giuseppe Verdi",
      company: "Industrie Meccaniche Spa",
      text: "Per i nostri capannoni industriali, Artic Pulizie garantisce standard elevati di pulizia e sicurezza. Un partner affidabile.",
      rating: 5,
      role: "Direttore Operativo"
    }
  ];

  return (
    <div>
      <SEO
        title="Impresa di Pulizie a Brescia e Provincia | Artic Pulizie"
        description="Impresa di pulizie a Brescia per uffici, condomini e industrie. Squadra Artic Pulizie attiva in provincia con preventivo gratuito in 24 ore."
        keywords="impresa pulizie brescia, pulizie uffici brescia, pulizie condomini brescia, sanificazione ambienti brescia, pulizie industriali brescia"
        canonical={buildCanonicalUrl('/')}
        structuredData={homepageStructuredData}
      />
      {/* Hero Section */}
      <section className="pt-24 pb-20 relative overflow-hidden min-h-screen bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="wave-container">
            <div className="wave wave-1"></div>
            <div className="wave wave-2"></div>
            <div className="wave wave-3"></div>
          </div>
          
          <div className="particles-container">
            <div className="particle particle-1"></div>
            <div className="particle particle-2"></div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-12">
            <div className="space-y-8">
              <h1 className="hero-title-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 leading-tight max-w-5xl mx-auto tracking-tight">
                PULIZIE
                <span className="block bg-gradient-to-r from-sky-600 via-cyan-500 to-teal-500 bg-clip-text text-transparent">
                  PROFESSIONALI
                </span>
                <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-sky-700 mt-2">
                  PER LA TUA AZIENDA
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-4">
                Offriamo servizi di pulizia specializzati per uffici, aziende e ambienti industriali.
                <span className="block mt-2 font-medium text-sky-700">
                  Affidabilità, qualità e risultati garantiti per il tuo business.
                </span>
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center items-center mt-16 px-4">
              <Link to="/richiedi-preventivo">
                <button className="primary-cta-button group relative overflow-hidden w-full sm:w-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 transition-all duration-300 group-hover:from-emerald-400 group-hover:via-teal-400 group-hover:to-cyan-400"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                  
                  <div className="relative z-10 flex items-center justify-center space-x-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5">
                    <Sparkles className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                    <span className="font-bold text-base sm:text-lg lg:text-xl text-white whitespace-nowrap">
                      Richiedi Preventivo
                    </span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                  
                  <div className="absolute inset-0 rounded-xl border-2 border-white/30 group-hover:scale-105 group-hover:border-white/50 transition-all duration-300"></div>
                </button>
              </Link>
              
              <Link to="/servizi">
                <button className="white-bg-button group relative overflow-hidden rounded-xl transition-all duration-300 transform perspective-1000 hover:translateY(-3px) shadow-lg hover:shadow-xl w-full sm:w-auto">
                  {/* Background completamente bianco */}
                  <div className="absolute inset-0 bg-white rounded-xl"></div>
                  
                  {/* Border gradient */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-300 via-cyan-400 to-teal-400 p-[2px] group-hover:from-sky-400 group-hover:via-cyan-500 group-hover:to-teal-500">
                    <div className="h-full w-full rounded-[10px] bg-white"></div>
                  </div>
                  
                  {/* Subtle Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl"></div>
                  
                  <div className="relative z-10 flex items-center justify-center space-x-3 px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5">
                    <span className="font-bold text-base sm:text-lg lg:text-xl text-slate-700 group-hover:text-sky-700 transition-colors duration-300 whitespace-nowrap">
                      Scopri i Nostri Servizi
                    </span>
                    <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 text-slate-600 group-hover:text-sky-600 group-hover:translate-x-1 transition-all duration-300" />
                  </div>
                </button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-12 text-xs sm:text-sm lg:text-base text-slate-600 px-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span>Sopralluoghi gratuiti</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-sky-500 rounded-full"></div>
                <span>28 dipendenti qualificati</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
                <span>Prezzi competitivi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              I Nostri <span className="text-sky-500">Servizi</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Soluzioni complete per ogni esigenza di pulizia aziendale, 
              con personale qualificato e attrezzature professionali.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link 
                key={index}
                to={service.link}
                className="group bg-slate-50 rounded-xl p-6 hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-sky-100 cursor-pointer transform hover:scale-105"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <LazyImage
                  src={service.image}
                  fallbackSrc={service.fallbackImage}
                  alt={`${service.title} a Brescia e provincia`}
                  className="w-full h-44 object-cover rounded-xl mb-4"
                  width={600}
                  height={320}
                />
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-500">
                      <div className="w-1.5 h-1.5 bg-sky-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-sky-600 font-semibold group-hover:text-sky-700 transition-colors">
                  <span>Scopri di più</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/servizi"
              className="inline-flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <span>Vedi Tutti i Servizi</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Perché Scegliere la Nostra <span className="text-sky-500">Impresa di Pulizie</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Alta qualità del servizio e prezzi competitivi che ci distinguono nel settore delle pulizie professionali a Brescia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-6 shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
                  <advantage.icon className="w-8 h-8 text-sky-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Cosa Dicono i Nostri <span className="text-sky-500">Clienti</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              La soddisfazione dei nostri clienti è la nostra migliore referenza. 
              Scopri perché ci scelgono e ci consigliano.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-50 rounded-xl p-6 relative group hover:bg-sky-50 transition-colors duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sky-600 text-sm">{testimonial.role}</p>
                  <p className="text-slate-500 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/recensioni"
              className="inline-flex items-center space-x-2 text-sky-600 hover:text-sky-700 font-semibold"
            >
              <span>Leggi Tutte le Recensioni</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section - Nuovo Design Elegante */}
      <CTASection
        badge={{
          text: "Preventivo Gratuito"
        }}
        title="Pronto a iniziare con la nostra Impresa di Pulizie?"
        description="Contattaci per un preventivo personalizzato e gratuito. Sopralluoghi senza impegno. Serviamo aziende e privati a Brescia e provincia con contratti singoli o periodici programmati."
        action={{
          text: "Richiedi Preventivo Gratuito",
          href: "/richiedi-preventivo",
          variant: "glow"
        }}
      />
    </div>
  );
};

export default Homepage;
