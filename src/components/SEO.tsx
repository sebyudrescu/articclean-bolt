import { Helmet } from 'react-helmet-async';
import { buildCanonicalUrl, siteMetadata } from '@/data/siteMetadata';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
  structuredData?: Record<string, unknown>[];
}

const escapeRegex = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

const normalizeTitle = (rawTitle: string) => {
  let normalized = rawTitle.trim();
  const segmentsToStrip = [
    siteMetadata.brandTitle,
    siteMetadata.siteName,
    siteMetadata.brandPromise
  ].filter(Boolean) as string[];

  segmentsToStrip.forEach((segment) => {
    const pattern = new RegExp(`\\s*\\|\\s*${escapeRegex(segment)}\\s*`, 'gi');
    normalized = normalized.replace(pattern, ' ');
  });

  return normalized.replace(/\s*\|\s*$/g, '').replace(/\s{2,}/g, ' ').trim();
};

const buildBrandAwareTitle = (rawTitle: string) => {
  const brandTitle = siteMetadata.brandTitle ?? siteMetadata.siteName;
  const brandSegments = Array.from(
    new Set(
      [brandTitle, siteMetadata.siteName]
        .filter(Boolean)
        .map((segment) => segment.toLowerCase())
    )
  );

  const brandPromise = siteMetadata.brandPromise;
  let fullTitle = normalizeTitle(rawTitle);
  let normalizedFullTitle = fullTitle.toLowerCase();

  brandSegments.forEach((segmentLower) => {
    const segmentOriginal =
      segmentLower === (brandTitle ?? '').toLowerCase()
        ? brandTitle
        : siteMetadata.siteName;

    if (segmentOriginal && !normalizedFullTitle.includes(segmentLower)) {
      fullTitle = `${fullTitle} | ${segmentOriginal}`;
      normalizedFullTitle = fullTitle.toLowerCase();
    }
  });

  if (brandPromise && !normalizedFullTitle.includes(brandPromise.toLowerCase())) {
    fullTitle = `${fullTitle} | ${brandPromise}`;
  }

  return fullTitle;
};

const buildCanonical = (canonical?: string) => {
  if (!canonical) {
    return buildCanonicalUrl(typeof window !== 'undefined' ? window.location.pathname : '/');
  }

  return canonical.startsWith('http') ? canonical : buildCanonicalUrl(canonical);
};

const buildOpeningHours = () => {
  if (!siteMetadata.openingHours?.length) return undefined;

  return siteMetadata.openingHours.map((spec) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: spec.dayOfWeek,
    opens: spec.opens,
    closes: spec.closes
  }));
};

const buildAreaServed = () => {
  const areas =
    siteMetadata.serviceAreas?.length > 0
      ? siteMetadata.serviceAreas
      : [siteMetadata.areaServed].filter(Boolean);

  return areas.map((area) => ({
    '@type': 'AdministrativeArea',
    name: area
  }));
};

const buildOfferCatalog = () => {
  if (!siteMetadata.serviceCatalog?.length) return undefined;

  return {
    '@type': 'OfferCatalog',
    name: 'Catalogo servizi Artic Clean Service',
    itemListElement: siteMetadata.serviceCatalog.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service
      }
    }))
  };
};

const buildGeoCoordinates = () => {
  if (!siteMetadata.geo?.latitude || !siteMetadata.geo?.longitude) return undefined;

  return {
    '@type': 'GeoCoordinates',
    latitude: siteMetadata.geo.latitude,
    longitude: siteMetadata.geo.longitude
  };
};

const SEO = ({
  title = 'Impresa di Pulizie a Brescia e Provincia',
  description = 'Artic Clean Service è l’impresa di pulizie di Brescia specializzata in uffici, condomini, industrie e sanificazioni dal 2005. Preventivo gratuito entro 24 ore.',
  keywords = 'impresa di pulizie brescia, artic clean service, pulizie uffici brescia, pulizie industriali brescia, sanificazione ambienti brescia, pulizie condomini brescia',
  canonical,
  ogImage = `${siteMetadata.baseUrl}/assets/og-default.png`,
  type = 'website',
  structuredData
}: SEOProps) => {
  const fullTitle = buildBrandAwareTitle(title);
  const canonicalUrl = buildCanonical(canonical);

  const cleaningServiceSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'CleaningService',
    '@id': `${siteMetadata.baseUrl}#localbusiness`,
    name: siteMetadata.brandTitle ?? siteMetadata.siteName,
    alternateName: siteMetadata.alternateName,
    url: siteMetadata.baseUrl,
    image: siteMetadata.logoUrl,
    telephone: siteMetadata.phone,
    email: siteMetadata.email,
    priceRange: siteMetadata.priceRange,
    aggregateRating: siteMetadata.aggregateRating,
    areaServed: buildAreaServed(),
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteMetadata.streetAddress,
      addressLocality: siteMetadata.locality,
      addressRegion: siteMetadata.province,
      postalCode: siteMetadata.postalCode,
      addressCountry: siteMetadata.countryCode
    },
    openingHoursSpecification: buildOpeningHours(),
    paymentAccepted: siteMetadata.paymentAccepted,
    currenciesAccepted: siteMetadata.currenciesAccepted,
    sameAs: siteMetadata.socialProfiles,
    hasOfferCatalog: buildOfferCatalog(),
    foundingDate: siteMetadata.foundingDate,
    geo: buildGeoCoordinates()
  };

  if (siteMetadata.geo?.latitude && siteMetadata.geo?.longitude) {
    cleaningServiceSchema.hasMap = `https://www.google.com/maps/search/?api=1&query=${siteMetadata.geo.latitude},${siteMetadata.geo.longitude}`;
  }

  const organizationSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteMetadata.legalName,
    alternateName: siteMetadata.alternateName,
    url: siteMetadata.baseUrl,
    logo: siteMetadata.logoUrl,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: siteMetadata.phone,
      email: siteMetadata.email,
      contactType: 'customer service',
      availableLanguage: ['Italian']
    }
  };

  const websiteSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteMetadata.baseUrl}#website`,
    url: siteMetadata.baseUrl,
    name: siteMetadata.brandTitle ?? siteMetadata.siteName,
    inLanguage: 'it-IT',
    publisher: {
      '@id': `${siteMetadata.baseUrl}#localbusiness`
    }
  };

  const baseStructuredData = [websiteSchema, cleaningServiceSchema, organizationSchema].filter(Boolean);

  const schemaToRender = structuredData
    ? [...baseStructuredData, ...structuredData].filter(Boolean) as Record<string, unknown>[]
    : baseStructuredData;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={siteMetadata.legalName} />
      <link rel="canonical" href={canonicalUrl} />
      <link rel="alternate" hrefLang="it" href={canonicalUrl} />
      <link rel="alternate" hrefLang="it-IT" href={canonicalUrl} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteMetadata.brandTitle ?? siteMetadata.siteName} />
      <meta property="og:locale" content="it_IT" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemaToRender.map((schema, index) => (
        <script
          key={`structured-data-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </Helmet>
  );
};

export default SEO;
