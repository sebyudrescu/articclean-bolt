import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const coreLinks = [
  {
    to: '/servizi',
    title: 'Servizi di Pulizia',
    description: 'Scopri l\'intera offerta Artic Pulizie per imprese, condomini e ambienti speciali.'
  },
  {
    to: '/dove-operiamo',
    title: 'Zone Servite',
    description: 'Consulta tutte le località di Brescia e provincia in cui operiamo ogni giorno.'
  },
  {
    to: '/recensioni',
    title: 'Recensioni Clienti',
    description: 'Leggi le testimonianze di aziende e condomini che hanno scelto Artic Pulizie.'
  },
  {
    to: '/richiedi-preventivo',
    title: 'Preventivo Gratuito',
    description: 'Invia la tua richiesta e ricevi un preventivo personalizzato in 24 ore.'
  }
];

interface InternalLinkSectionProps {
  title?: string;
  intro?: string;
  className?: string;
}

const InternalLinkSection = ({
  title = 'Approfondisci i nostri servizi',
  intro = 'Accedi rapidamente alle pagine più richieste e ottimizzate per la SEO locale.',
  className = ''
}: InternalLinkSectionProps) => {
  return (
    <section className={`py-16 bg-slate-50 ${className}`} aria-labelledby="internal-links-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="internal-links-heading" className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            {title}
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            {intro}
          </p>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {coreLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="group bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {link.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-sky-600 group-hover:translate-x-1 transition-all" />
              </div>
              <p className="text-sm text-slate-600 leading-relaxed">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternalLinkSection;
