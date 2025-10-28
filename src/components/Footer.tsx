import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  src="/assets/logo.svg"
                  alt="Artic Clean logo"
                  className="w-full h-full object-contain"
                  width={40}
                  height={40}
                  loading="lazy"
                />
              </div>
              <div>
                <h1 className="text-lg font-bold">Artic Clean</h1>
              </div>
            </Link>
            <p className="text-slate-300 leading-relaxed">
              Impresa di pulizie a Brescia specializzata in uffici, condomini, industrie e sanificazioni.
              Squadre certificate, sopralluoghi rapidi e preventivo in 24 ore in tutta la provincia.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Servizi</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/servizi/pulizie-uffici" className="hover:text-sky-400 transition-colors">Pulizie Uffici</Link></li>
              <li><Link to="/servizi/pulizie-condomini" className="hover:text-sky-400 transition-colors">Pulizie Condomini</Link></li>
              <li><Link to="/servizi/pulizie-industriali" className="hover:text-sky-400 transition-colors">Pulizie Industriali</Link></li>
              <li><Link to="/servizi/pulizie-post-cantiere" className="hover:text-sky-400 transition-colors">Pulizie Post-Cantiere</Link></li>
              <li><Link to="/servizi/pulizie-vetri" className="hover:text-sky-400 transition-colors">Pulizie Vetri</Link></li>
              <li><Link to="/servizi/sanificazione-ambienti" className="hover:text-sky-400 transition-colors">Sanificazione Ambienti</Link></li>
              <li><Link to="/servizi/giardinaggio" className="hover:text-sky-400 transition-colors">Giardinaggio</Link></li>
              <li><Link to="/servizi/gestione-carrellati" className="hover:text-sky-400 transition-colors">Gestione Carrellati</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Azienda</h3>
            <ul className="space-y-2 text-slate-300">
              <li><Link to="/chi-siamo" className="hover:text-sky-400 transition-colors">Chi Siamo</Link></li>
              <li><Link to="/come-lavoriamo" className="hover:text-sky-400 transition-colors">Come Lavoriamo</Link></li>
              <li><Link to="/blog" className="hover:text-sky-400 transition-colors">Blog</Link></li>
              <li><Link to="/recensioni" className="hover:text-sky-400 transition-colors">Recensioni</Link></li>
              <li><Link to="/faq" className="hover:text-sky-400 transition-colors">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-sky-400 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contatti</h3>
            <div className="space-y-3 text-slate-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-sky-400" />
                    <a href="tel:+390305231285" className="hover:text-sky-400 transition-colors">+39 030 52 31 285</a>
                  </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-sky-400" />
                <a href="mailto:info@articpulizie.it" className="hover:text-sky-400 transition-colors">info@articpulizie.it</a>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-sky-400" />
                <span>Via Carpaccio 10, 25100 Brescia</span>
              </div>
            </div>
            <div className="mt-4 text-sm text-slate-400">
              <p className="font-semibold text-slate-300 mb-1">Orari:</p>
              <p>Lunedì - Venerdì: 8:00 - 17:00</p>
              <p>Sabato: 8:00 - 13:00</p>
              <p>Domenica: Chiuso</p>
              <p className="mt-2 text-sky-400">Pronto intervento: tutti i giorni (escluso domenica)</p>
            </div>

            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Seguici</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-sky-500 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2025 Artic Pulizie Srl · Via Carpaccio 10, 25100 Brescia · Zona operativa: Brescia e provincia</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
