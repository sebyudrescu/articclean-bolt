import { buildCanonicalUrl, siteMetadata } from '@/data/siteMetadata';

type BreadcrumbInput = {
  name: string;
  path?: string;
};

type FAQItem = {
  question: string;
  answer: string;
};

type ReviewInput = {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished?: string;
};

type ServiceSchemaInput = {
  name: string;
  serviceType?: string;
  description?: string;
  url?: string;
  areaServed?: string | string[];
  offers?: string[];
  aggregateRating?: Record<string, unknown>;
  reviews?: ReviewInput[];
};

const buildAreaServed = (areaServed?: string | string[]) => {
  if (!areaServed || (Array.isArray(areaServed) && areaServed.length === 0)) {
    return {
      '@type': 'AdministrativeArea',
      name: siteMetadata.areaServed
    };
  }

  if (Array.isArray(areaServed)) {
    return areaServed.map((area) => ({
      '@type': 'AdministrativeArea',
      name: area
    }));
  }

  return {
    '@type': 'AdministrativeArea',
    name: areaServed
  };
};

export const buildBreadcrumbSchema = (items: BreadcrumbInput[]): Record<string, unknown> => {
  const normalizedItems: BreadcrumbInput[] = [{ name: 'Home', path: '/' }, ...items];

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: normalizedItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.path ? { item: buildCanonicalUrl(item.path) } : {})
    }))
  };
};

export const buildFAQSchema = (items: FAQItem[]): Record<string, unknown> | undefined => {
  if (!items.length) {
    return undefined;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer
      }
    }))
  };
};

export const buildServiceSchema = ({
  name,
  serviceType,
  description,
  url,
  areaServed,
  offers,
  aggregateRating,
  reviews
}: ServiceSchemaInput): Record<string, unknown> => {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    serviceType: serviceType ?? name,
    provider: {
      '@type': 'LocalBusiness',
      name: siteMetadata.siteName,
      url: siteMetadata.baseUrl,
      telephone: siteMetadata.phone
    },
    areaServed: buildAreaServed(areaServed)
  };

  if (description) {
    schema.description = description;
  }

  if (url) {
    schema.url = buildCanonicalUrl(url);
  }

  if (offers && offers.length > 0) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      itemListElement: offers.map((offer) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: offer
        }
      }))
    };
  }

  if (aggregateRating) {
    schema.aggregateRating = aggregateRating;
  }

  if (reviews && reviews.length > 0) {
    schema.review = reviews.map((review) => ({
      '@type': 'Review',
      author: review.author,
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.ratingValue,
        bestRating: '5',
        worstRating: '1'
      },
      ...(review.datePublished ? { datePublished: review.datePublished } : {})
    }));
  }

  return schema;
};
