import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, CheckCircle, MapPin, Phone, Users, Clock, Shield, Sparkles } from 'lucide-react';
import SEO from '@/components/SEO';
import Breadcrumb from '@/components/Breadcrumb';
import { getLocalPageContent } from '@/data/localContent';
import { services, locations } from '@/data/servicesData';
import { getRelatedServices, getNearbyLocations } from '@/utils/internalLinks';
import InternalLinkSection from '@/components/InternalLinkSection';
import { buildCanonicalUrl } from '@/data/siteMetadata';
import LazyImage from '@/components/LazyImage';
import RelatedBlogPosts from '@/components/RelatedBlogPosts';
import { cdnImage } from '@/utils/image';
import { buildBreadcrumbSchema, buildServiceSchema } from '@/utils/structuredData';

const ServizioLocale = () => {
  const { servizio, localita } = useParams<{ servizio: string; localita: string }>();

  if (!servizio || !localita) {
    return <Navigate to="/servizi" replace />;
  }

  const content = getLocalPageContent(servizio, localita);
  const service = services.find(s => s.slug === servizio);
  const location = locations.find(l => l.slug === localita);

  if (!content || !service || !location) {
    return <Navigate to="/servizi" replace />;
  }

  const relatedServices = getRelatedServices(service.id, location.id);
  const relatedLocations = getNearbyLocations(location.id, service.id);

  const benefits = [
    {
      icon: Users,
      title: 'Esperienza Consolidata',
      description: `Oltre 28 operatori qualificati attivi su ${location.name} e provincia`
    },
    {
      icon: Clock,
      title: 'Puntualità Garantita',
      description: 'Interventi programmati negli orari concordati senza ritardi'
    },
    {
      icon: Shield,
      title: 'Prodotti Certificati',
      description: 'Solo detergenti professionali certificati e sicuri'
    },
    {
      icon: Sparkles,
      title: 'Qualità Superiore',
      description: 'Standard elevati per risultati impeccabili e duraturi'
    }
  ];

  const structuredData = [
    buildServiceSchema({
      name: `${service.name} a ${location.name}`,
      serviceType: service.name,
      description: content.metaDescription,
      url: `/servizi/${servizio}/${localita}`,
      areaServed: location.name,
      offers: service.features
    }),
    buildBreadcrumbSchema([
      { name: 'Servizi', path: '/servizi' },
      { name: service.name, path: `/servizi/${servizio}` },
      { name: location.name, path: `/servizi/${servizio}/${localita}` }
    ])
  ];

  return (
    <div className="pt-24 pb-20">
      <SEO
        title={content.metaTitle}
        description={content.metaDescription}
        keywords={`${service.name.toLowerCase()} ${location.name}, impresa pulizie ${location.name}, ${service.slug} ${location.slug}, pulizie professionali ${location.name}`}
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
                {content.h1}
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                {content.introText}
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

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">
            {service.name} Professionali a {location.name}
          </h2>
          <div className="prose prose-lg text-slate-600 space-y-4">
            <p>{content.whyChooseText}</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Cosa Include il Nostro Servizio a {location.name}
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Un servizio completo per la tua tranquillità
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
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

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-6">
              Vantaggi del Nostro Servizio
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Perché scegliere la nostra impresa a {location.name}
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

      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-md">
            <div className="flex items-center space-x-3 mb-6">
              <MapPin className="w-6 h-6 text-sky-500" />
              <h2 className="text-2xl font-bold text-slate-900">
                Area Operativa: {location.name} e Dintorni
              </h2>
            </div>
            <div className="prose prose-lg text-slate-600 space-y-4 mb-6">
              <p>{content.areaDescription}</p>
            </div>
            {content.nearbyAreas.length > 0 && (
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">
                  Serviamo anche le località vicine:
                </h3>
                <div className="flex flex-wrap gap-2">
                  {content.nearbyAreas.map((area, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-sky-50 text-sky-700 rounded-lg text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Altri servizi in {location.name}
            </h2>
            <p className="text-lg text-slate-600">
              Scopri anche questi servizi attivi a {location.name}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedServices.map((relService) => (
              <Link
                key={relService.service.id}
                to={`/servizi/${relService.service.slug}/${localita}`}
                className="group bg-gradient-to-br from-slate-50 to-slate-100/50 rounded-2xl p-6 hover:from-sky-50 hover:to-cyan-50/50 transition-all duration-300 border border-slate-200 hover:border-sky-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow">
                    <CheckCircle className="w-6 h-6 text-sky-600" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">
                  {relService.anchorText}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {relService.service.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
            {relatedLocations.map((relLocation) => (
              <Link
                key={relLocation.location.id}
                to={`/servizi/${servizio}/${relLocation.location.slug}`}
                className="group bg-white rounded-xl p-5 hover:bg-sky-50 transition-all duration-300 border border-slate-200 hover:border-sky-300 hover:shadow-md text-center"
              >
                <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-sky-200 transition-colors">
                  <MapPin className="w-6 h-6 text-sky-600" />
                </div>
                <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors mb-1">
                  {relLocation.anchorText}
                </h3>
                {relLocation.location.area && (
                  <p className="text-slate-500 text-xs">
                    {relLocation.location.area}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <RelatedBlogPosts serviceIds={[service.id]} />

      <InternalLinkSection title="Altri collegamenti utili" intro={`Consulta le pagine chiave di Artic Pulizie per scoprire tutti i servizi, verificare le zone coperte, leggere le recensioni e richiedere un preventivo per ${location.name}.`} />

      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Richiedi un Preventivo Gratuito a {location.name}
          </h2>
          <p className="text-xl text-slate-300 mb-4 leading-relaxed">
            {content.ctaText}
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

export default ServizioLocale;
