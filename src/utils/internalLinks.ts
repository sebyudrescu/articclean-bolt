import { services, locations, Service, Location } from '@/data/servicesData';

interface RelatedService {
  service: Service;
  anchorText: string;
}

interface NearbyLocation {
  location: Location;
  anchorText: string;
}

const nearbyLocationsMap: Record<string, string[]> = {
  'brescia': ['brescia-centro', 'brescia-sud', 'san-polo', 'borgo-trento'],
  'brescia-centro': ['brescia', 'borgo-trento', 'san-polo', 'fornaci'],
  'borgo-trento': ['brescia', 'brescia-centro', 'sarezzo', 'concesio'],
  'brescia-sud': ['brescia', 'san-polo', 'fornaci', 'montichiari'],
  'san-polo': ['brescia', 'brescia-sud', 'fornaci', 'castenedolo'],
  'fornaci': ['brescia-sud', 'san-polo', 'brescia', 'montichiari'],
  'desenzano-del-garda': ['lonato-del-garda', 'salo', 'montichiari', 'brescia'],
  'montichiari': ['ghedi', 'castenedolo', 'lonato-del-garda', 'brescia-sud'],
  'ghedi': ['montichiari', 'castenedolo', 'rezzato', 'brescia'],
  'chiari': ['rovato', 'palazzolo-oglio', 'orzinuovi', 'travagliato'],
  'rovato': ['chiari', 'palazzolo-oglio', 'travagliato', 'orzinuovi'],
  'rezzato': ['brescia', 'castenedolo', 'concesio', 'montichiari'],
  'lonato-del-garda': ['desenzano-del-garda', 'montichiari', 'salo', 'brescia'],
  'palazzolo-oglio': ['chiari', 'rovato', 'travagliato', 'orzinuovi'],
  'salo': ['desenzano-del-garda', 'lonato-del-garda', 'rezzato', 'brescia'],
  'castenedolo': ['rezzato', 'brescia-sud', 'montichiari', 'ghedi'],
  'sarezzo': ['concesio', 'brescia', 'borgo-trento', 'travagliato'],
  'orzinuovi': ['chiari', 'rovato', 'palazzolo-oglio', 'travagliato'],
  'concesio': ['brescia', 'sarezzo', 'borgo-trento', 'rezzato'],
  'travagliato': ['rovato', 'chiari', 'palazzolo-oglio', 'brescia'],
  'bergamo': ['brescia', 'milano-est', 'mantova', 'cremona'],
  'cremona': ['brescia', 'mantova', 'bergamo', 'milano-est'],
  'mantova': ['brescia', 'cremona', 'montichiari', 'bergamo'],
  'milano-est': ['brescia', 'bergamo', 'cremona', 'mantova']
};

export const getRelatedServices = (currentServiceId: string, locationId: string): RelatedService[] => {
  const otherServices = services.filter(s => s.id !== currentServiceId);

  const selectedServices = otherServices
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  const location = locations.find(l => l.id === locationId);
  if (!location) return [];

  const anchorVariations = [
    (s: Service) => `${s.name} a ${location.name}`,
    (s: Service) => `Servizi di ${s.name.toLowerCase()} a ${location.name}`,
    (s: Service) => `${s.name} professionali a ${location.name}`
  ];

  return selectedServices.map((service, index) => ({
    service,
    anchorText: anchorVariations[index % anchorVariations.length](service)
  }));
};

export const getNearbyLocations = (currentLocationId: string, serviceId: string): NearbyLocation[] => {
  const nearbyLocationIds = nearbyLocationsMap[currentLocationId];

  if (!nearbyLocationIds || nearbyLocationIds.length === 0) {
    return [];
  }

  const nearbyLocationsList = nearbyLocationIds
    .map(id => locations.find(l => l.id === id))
    .filter((l): l is Location => l !== undefined)
    .slice(0, 4);

  const service = services.find(s => s.id === serviceId);
  if (!service) return [];

  const anchorVariations = [
    (l: Location) => `${service.name} a ${l.name}`,
    (l: Location) => `Servizio di ${service.name.toLowerCase()} a ${l.name}`,
    (l: Location) => `${service.name} ${l.name}`,
    (l: Location) => `${service.name} professionali a ${l.name}`
  ];

  return nearbyLocationsList.map((location, index) => ({
    location,
    anchorText: anchorVariations[index % anchorVariations.length](location)
  }));
};
