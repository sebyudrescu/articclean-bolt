import { Link } from 'react-router-dom';
import { MapPin, ArrowRight } from 'lucide-react';
import { locations } from '@/data/servicesData';

interface LocationsGridProps {
  serviceSlug: string;
  serviceName: string;
  showAll?: boolean;
}

const LocationsGrid = ({ serviceSlug, serviceName, showAll = true }: LocationsGridProps) => {
  const mainLocations = [
    locations.find(l => l.id === 'brescia'),
    locations.find(l => l.id === 'desenzano-del-garda'),
    locations.find(l => l.id === 'montichiari')
  ].filter((l): l is typeof locations[0] => l !== undefined);

  const sortedLocations = [...locations].sort((a, b) => {
    if (a.id === 'brescia') return -1;
    if (b.id === 'brescia') return 1;
    return a.name.localeCompare(b.name);
  });

  const displayLocations = showAll ? sortedLocations : mainLocations;

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Dove Operiamo
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            {serviceName} disponibili in tutte queste località di Brescia e provincia
          </p>
        </div>

        <div className={`grid ${showAll ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5' : 'md:grid-cols-3 max-w-4xl mx-auto'} gap-4 md:gap-6`}>
          {displayLocations.map((location) => (
            <Link
              key={location.id}
              to={`/servizi/${serviceSlug}/${location.slug}`}
              className="group bg-white rounded-xl p-5 md:p-6 hover:bg-sky-50 transition-all duration-300 border border-slate-200 hover:border-sky-300 hover:shadow-md"
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
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all opacity-0 group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>

        {!showAll && (
          <div className="mt-8 md:mt-12 text-center">
            <Link
              to="/dove-operiamo"
              className="inline-flex items-center space-x-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <span>Scopri tutte le località servite</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}

        {showAll && (
          <div className="mt-12 text-center">
            <p className="text-slate-600">
              Non trovi la tua località? Contattaci per scoprire se operiamo nella tua zona
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default LocationsGrid;
