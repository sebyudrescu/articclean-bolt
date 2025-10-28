export const siteMetadata = {
  siteName: 'Artic Pulizie',
  brandTitle: 'Artic Clean Service',
  brandTagline: 'Impresa di Pulizie a Brescia e Provincia',
  brandPromise: 'Pulizie dal 2005',
  legalName: 'Artic Clean Service Srl',
  alternateName: ['Artic Clean Service', 'Artic Pulizie'],
  baseUrl: 'https://www.articpulizie.it',
  phone: '+39 030 52 31 285',
  email: 'info@articpulizie.it',
  streetAddress: 'Via Carpaccio 10',
  postalCode: '25100',
  locality: 'Brescia',
  province: 'BS',
  countryCode: 'IT',
  geo: {
    latitude: '45.5416',
    longitude: '10.2118'
  },
  areaServed: 'Brescia e provincia',
  serviceAreas: ['Brescia', 'Bergamo', 'Cremona', 'Mantova', 'Milano Est'],
  openingHours: [
    {
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '19:00'
    },
    {
      dayOfWeek: ['Saturday'],
      opens: '08:00',
      closes: '13:00'
    }
  ],
  priceRange: '€€',
  paymentAccepted: ['Contanti', 'Bonifico', 'Carta di credito'],
  currenciesAccepted: ['EUR'],
  logoUrl: 'https://www.articpulizie.it/assets/logo.svg',
  socialProfiles: [
    'https://www.facebook.com/articpulizie',
    'https://www.instagram.com/articpulizie',
    'https://www.linkedin.com/company/artic-clean-service'
  ],
  aggregateRating: {
    ratingValue: '4.9',
    reviewCount: '87'
  },
  foundingDate: '2005-01-01',
  serviceCatalog: [
    'Pulizie uffici',
    'Pulizie industriali',
    'Pulizie condomini',
    'Pulizie post cantiere',
    'Sanificazione ambienti',
    'Pulizia vetri e vetrate',
    'Gestione carrellati',
    'Giardinaggio e manutenzione verde'
  ]
};

export const buildCanonicalUrl = (path: string) => {
  if (!path || path === '/') {
    return siteMetadata.baseUrl;
  }

  return `${siteMetadata.baseUrl}${path.startsWith('/') ? path : `/${path}`}`;
};
