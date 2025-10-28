import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CTABadge {
  text: string;
}

interface CTAAction {
  text: string;
  href: string;
  variant?: 'default' | 'glow';
}

interface CTASectionProps {
  badge?: CTABadge;
  title: string;
  description: string;
  action: CTAAction;
}

export const CTASection: React.FC<CTASectionProps> = ({ badge, title, description, action }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-cyan-500/10"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {badge && (
          <div className="inline-flex items-center justify-center px-4 py-2 bg-emerald-500 text-white text-sm font-semibold rounded-full mb-6">
            {badge.text}
          </div>
        )}
        
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          {title}
        </h2>
        
        <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-3xl mx-auto">
          {description}
        </p>
        
        <Link
          to={action.href}
          className={`inline-flex items-center space-x-2 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
            action.variant === 'glow'
              ? 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white shadow-lg hover:shadow-xl hover:from-emerald-400 hover:to-cyan-400'
              : 'bg-gradient-to-r from-sky-500 to-cyan-500 text-white hover:from-sky-600 hover:to-cyan-600'
          }`}
        >
          <span>{action.text}</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
        
        <div className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
            <span>Risposta entro 24h</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-sky-400 rounded-full"></div>
            <span>Sopralluogo gratuito</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            <span>Nessun impegno</span>
          </div>
        </div>
      </div>
    </section>
  );
};