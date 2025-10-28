import { useEffect, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Phone, Clock, Shield, Sparkles, Loader2 } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import InternalLinkSection from '@/components/InternalLinkSection';
import LazyImage from '@/components/LazyImage';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import { getLocalServicePage, LocalServicePage, getAllServices, getAllLocations } from '@/lib/supabase';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import { cdnImage } from '@/utils/image';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/utils/structuredData';

const ServizioLocaleDynamic = () => {
  const { servizio, localita } = useParams<{ servizio: string; localita: string }>();
  const [pageData, setPageData] = useState<LocalServicePage | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [otherServices, setOtherServices] = useState<any[]>([]);
  const [nearbyLocations, setNearbyLocations] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!servizio || !localita) {
        setNotFound(true);
        setLoading(false);
        return;
      }

      try {
        const data = await getLocalServicePage(servizio, localita);

        if (!data) {
          setNotFound(true);
          setLoading(false);
          return;
        }

        setPageData(data);

        const [services, locations] = await Promise.all([
          getAllServices(),
          getAllLocations()
        ]);

        const currentLocation = locations.find(l => l.slug === localita);
        if (currentLocation && currentLocation.nearby_locations) {
          setNearbyLocations(currentLocation.nearby_locations as string[]);
        }

        const filteredServices = services
          .filter(s => s.slug !== servizio)
          .slice(0, 3);
        setOtherServices(filteredServices);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching page data:', error);
        setNotFound(true);
        setLoading(false);
      }
    };

    fetchData();
  }, [servizio, localita]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-sky-500 animate-spin mx-auto mb-4" />
          <p className="text-slate-600">Caricamento...</p>
        </div>
      </div>
    );
  }

  if (notFound || !pageData || !pageData.service || !pageData.location) {
    return <Navigate to="/servizi" replace />;
  }

  const { service, location } = pageData;
  const sectionOrder = pageData.section_order || ['whyChoose', 'coverage', 'problems', 'detailed', 'standards'];
  const h2Titles = pageData.h2_titles || {};

  const structuredData = [
    buildServiceSchema({
      name: `${service.name} a ${location.name}`,
      serviceType: service.name,
      description: pageData.meta_description ?? pageData.intro_text,
      url: `/servizi/${servizio}/${localita}`,
      areaServed: location.name,
      offers: pageData.detailed_services ? Object.keys(pageData.detailed_services) : undefined
    }),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: service.name, path: `/servizi/${servizio}` },
      { name: location.name, path: `/servizi/${servizio}/${localita}` }
    ])
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Puntualità Garantita',
      description: 'Interventi programmati negli orari concordati'
    },
    {
      icon: Shield,
      title: 'Prodotti Certificati',
      description: 'Detergenti professionali e sicuri'
    },
    {
      icon: Sparkles,
      title: 'Qualità Superiore',
      description: 'Standard elevati per risultati impeccabili'
    }
  ];

  const renderSection = (sectionKey: string) => {
    switch (sectionKey) {
      case 'whyChoose':
        return (
          <section key="whyChoose" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                {h2Titles.whyChoose || `Perché sceglierci a ${location.name}`}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {pageData.why_choose_us.map((reason, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-slate-50 rounded-xl hover:bg-sky-50 transition-all duration-300"
                  >
                    <CheckCircle className="w-6 h-6 text-sky-500 mt-1 flex-shrink-0" />
                    <p className="text-slate-700 leading-relaxed">{reason}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'coverage':
        return (
          <section key="coverage" className="py-16 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white rounded-xl p-8 shadow-md">
                <div className="flex items-center space-x-3 mb-6">
                  <MapPin className="w-6 h-6 text-sky-500" />
                  <h2 className="text-2xl font-bold text-slate-900">
                    {h2Titles.coverage || `Aree coperte a ${location.name}`}
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {pageData.coverage_areas.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-sky-50 text-sky-700 rounded-lg text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        );

      case 'problems':
        return (
          <section key="problems" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-8">
                {h2Titles.problems || `Problemi tipici a ${location.name}`}
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {pageData.typical_problems.map((problem, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-red-50 rounded-xl border border-red-100"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-slate-700 leading-relaxed">{problem}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'detailed':
        return (
          <section key="detailed" className="py-16 bg-slate-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                {h2Titles.detailed || 'Cosa facciamo nel dettaglio'}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(pageData.detailed_services).map(([title, description], index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );

      case 'standards':
        return (
          <section key="standards" className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
                {h2Titles.standards || 'Standard e garanzie'}
              </h2>
              <div className="max-w-3xl mx-auto">
                <div className="bg-slate-50 rounded-xl p-8">
                  <p className="text-slate-700 leading-relaxed text-center">
                    {pageData.standards_guarantees}
                  </p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-8 mt-12">
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
        );

      default:
        return null;
    }
  };

  return (
    <div className="pt-24 pb-20">
      <SEO
        title={pageData.meta_title}
        description={pageData.meta_description}
        keywords={`${service.name.toLowerCase()} ${location.name}, impresa pulizie ${location.name}, pulizie professionali ${location.name}`}
        canonical={buildCanonicalUrl(`/servizi/${servizio}/${localita}`)}
        structuredData={structuredData}
      />

      <Breadcrumb
        items={[
          { label: 'Servizi', path: '/servizi' },
          { label: service.name, path: `/servizi/${servizio}` },
          { label: location.name }
        ]}
      />

      <section className="py-20 bg-gradient-to-br from-white via-sky-50/30 to-cyan-50/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <MapPin className="w-8 h-8 text-sky-500" />
                <span className="text-sky-600 font-semibold">{location.name}, Provincia di Brescia</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                {pageData.h1_title}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {pageData.intro_text}
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
                src={cdnImage('https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&w=1200', { width: 1280, quality: 70, fit: 'cover' })}
                fallbackSrc="https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt={`${service.name} a ${location.name}`}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
                width={640}
                height={540}
              />
            </div>
          </div>
        </div>
      </section>

      {sectionOrder.map(sectionKey => renderSection(sectionKey))}

      {otherServices.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                Altri servizi a {location.name}
              </h2>
              <p className="text-lg text-slate-600">
                Scopri anche questi servizi disponibili
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherServices.map((otherService) => (
                <Link
                  key={otherService.id}
                  to={`/servizi/${otherService.slug}/${localita}`}
                  className="group bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-6 hover:from-sky-50 hover:to-cyan-50/50 transition-all duration-300 border border-slate-200 hover:border-sky-300 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                      <CheckCircle className="w-6 h-6 text-sky-600" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                    {otherService.name} a {location.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {otherService.base_description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {nearbyLocations.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                {service.name} nelle località vicine
              </h2>
              <p className="text-lg text-slate-600">
                Lo stesso servizio è disponibile anche in queste zone
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {nearbyLocations.slice(0, 4).map((nearbySlug, index) => (
                <Link
                  key={index}
                  to={`/servizi/${servizio}/${nearbySlug}`}
                  className="group bg-white rounded-xl p-5 hover:bg-sky-50 transition-all duration-300 border border-slate-200 hover:border-sky-300 hover:shadow-md text-center"
                >
                  <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-200 transition-colors">
                    <MapPin className="w-6 h-6 text-sky-600" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors capitalize">
                    {nearbySlug.replace(/-/g, ' ')}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedBlogPosts serviceIds={[service.id]} />

      <InternalLinkSection title="Continua ad approfondire con Artic Pulizie" intro={`Esplora le altre pagine principali per servizi aggiuntivi, aree servite, recensioni e preventivi rapidi dedicati a ${location.name}.`} />

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            {pageData.cta_text} a {location.name}
          </h2>
          <p className="text-xl text-slate-300 mb-4 leading-relaxed">
            {pageData.cta_subtext}
          </p>
          <p className="text-lg text-slate-400 mb-8">
            Risposta garantita entro 24 ore • Sopralluogo senza impegno
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/richiedi-preventivo"
              className="inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-sky-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-sky-600 hover:to-cyan-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Richiedi Preventivo</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="tel:+390305231285"
              className="inline-flex items-center justify-center space-x-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>Chiamaci Ora</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServizioLocaleDynamic;
