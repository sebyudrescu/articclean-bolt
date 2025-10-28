import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { locations } from '@/data/servicesData';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import InternalLinkSection from '@/components/InternalLinkSection';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/utils/structuredData';

const DoveOperiamo = () => {
  const sortedLocations = [...locations].sort((a, b) => {
    if (a.id === 'brescia') return -1;
    if (b.id === 'brescia') return 1;
    return a.name.localeCompare(b.name);
  });

  const structuredData = [
    buildServiceSchema({
      name: 'Servizi di pulizia a Brescia e provincia',
      serviceType: 'Servizi di Pulizia Professionali',
      description: 'Copertura dei servizi di pulizia Artic Pulizie nelle principali località di Brescia e provincia.',
      url: '/dove-operiamo',
      areaServed: sortedLocations.map((location) => location.name)
    }),
    buildBreadcrumbSchema([{ name: 'Dove Operiamo', path: '/dove-operiamo' }])
  ];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title="Dove Operiamo a Brescia e Provincia | Artic Pulizie"
        description="Servizi di pulizia Artic Pulizie attivi a Brescia, Desenzano, Montichiari, Chiari e in oltre 15 località della provincia. Scopri le zone servite."
        keywords="dove operiamo artic pulizie, pulizie provincia brescia, località servite artic pulizie"
        canonical={buildCanonicalUrl('/dove-operiamo')}
        structuredData={structuredData}
      />

      <Breadcrumb
        items={[
          { label: 'Dove Operiamo' }
        ]}
      />

      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Dove Operiamo
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Servizi di pulizia professionali disponibili in tutta la provincia di Brescia
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 text-center">
              Le Nostre 15 Località
            </h2>
            <p className="text-lg text-slate-600 text-center max-w-2xl mx-auto">
              Dalla città di Brescia fino al Lago di Garda, dalla Val Trompia alla Franciacorta
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {sortedLocations.map((location) => (
              <div
                key={location.id}
                className="group bg-slate-50 rounded-xl p-5 hover:bg-sky-50 transition-all duration-300 border border-slate-200 hover:border-sky-300 hover:shadow-md"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center group-hover:bg-sky-200 transition-colors">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-1">
                      {location.name}
                    </h3>
                    {location.area && (
                      <p className="text-xs text-slate-500">
                        {location.area}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-slate-50 rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Non trovi la tua località?
              </h3>
              <p className="text-lg text-slate-600 mb-6">
                Contattaci per scoprire se operiamo nella tua zona. Siamo sempre disponibili ad estendere i nostri servizi.
              </p>
              <Link
                to="/richiedi-preventivo"
                className="inline-flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span>Richiedi Preventivo</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4">
              I Nostri Servizi
            </h2>
            <p className="text-lg text-slate-600">
              Disponibili in tutte le località che serviamo
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Pulizie Uffici', slug: 'pulizie-uffici' },
              { name: 'Pulizie Condomini', slug: 'pulizie-condomini' },
              { name: 'Pulizie Industriali', slug: 'pulizie-industriali' },
              { name: 'Sanificazione Ambienti', slug: 'sanificazione-ambienti' },
              { name: 'Pulizia Vetri', slug: 'pulizia-vetri' },
              { name: 'Pulizie Post Cantiere', slug: 'pulizie-post-cantiere' },
              { name: 'Giardinaggio', slug: 'giardinaggio' },
              { name: 'Gestione Carrellati', slug: 'gestione-carrellati' }
            ].map((service) => (
              <Link
                key={service.slug}
                to={`/servizi/${service.slug}`}
                className="group bg-white rounded-xl p-6 hover:bg-sky-50 transition-all duration-300 border border-slate-200 hover:border-sky-300 hover:shadow-md"
              >
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-2">
                  {service.name}
                </h3>
                <div className="flex items-center text-sky-600 text-sm font-medium">
                  <span>Scopri di più</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <InternalLinkSection title="Approfondisci i servizi Artic Pulizie" intro="Consulta le pagine chiave per scoprire l'intera offerta, leggere le recensioni e richiedere un preventivo dedicato alle tue esigenze." />
    </div>
  );
};

export default DoveOperiamo;
