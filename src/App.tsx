import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

const Homepage = lazy(() => import('./pages/Homepage'));
const ChiSiamo = lazy(() => import('./pages/ChiSiamo'));
const ComeLavoriamo = lazy(() => import('./pages/ComeLavoriamo'));
const Recensioni = lazy(() => import('./pages/Recensioni'));
const Servizi = lazy(() => import('./pages/Servizi'));
const DoveOperiamo = lazy(() => import('./pages/DoveOperiamo'));
const PulizieUffici = lazy(() => import('./pages/servizi/PulizieUffici'));
const PulizieCondomini = lazy(() => import('./pages/servizi/PulizieCondomini'));
const PulizieIndustriali = lazy(() => import('./pages/servizi/PulizieIndustriali'));
const PuliziePostCantiere = lazy(() => import('./pages/servizi/PuliziePostCantiere'));
const PulizieVetri = lazy(() => import('./pages/servizi/PulizieVetri'));
const SanificazioneAmbienti = lazy(() => import('./pages/servizi/SanificazioneAmbienti'));
const Giardinaggio = lazy(() => import('./pages/servizi/Giardinaggio'));
const GestioneCarrellati = lazy(() => import('./pages/servizi/GestioneCarrellati'));
const RichidiPreventivo = lazy(() => import('./pages/RichidiPreventivo'));
const ServizioLocaleDynamic = lazy(() => import('./pages/ServizioLocaleDynamic'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/blog/BlogPost'));
const FAQ = lazy(() => import('./pages/FAQ'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));

const LoadingSpinner = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sky-500"></div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Header />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/chi-siamo" element={<ChiSiamo />} />
          <Route path="/come-lavoriamo" element={<ComeLavoriamo />} />
          <Route path="/recensioni" element={<Recensioni />} />
          <Route path="/servizi" element={<Servizi />} />
          <Route path="/dove-operiamo" element={<DoveOperiamo />} />
          <Route path="/servizi/pulizie-uffici" element={<PulizieUffici />} />
          <Route path="/servizi/pulizie-condomini" element={<PulizieCondomini />} />
          <Route path="/servizi/pulizie-industriali" element={<PulizieIndustriali />} />
          <Route path="/servizi/pulizie-post-cantiere" element={<PuliziePostCantiere />} />
          <Route path="/servizi/pulizie-vetri" element={<PulizieVetri />} />
          <Route path="/servizi/sanificazione-ambienti" element={<SanificazioneAmbienti />} />
          <Route path="/servizi/giardinaggio" element={<Giardinaggio />} />
          <Route path="/servizi/gestione-carrellati" element={<GestioneCarrellati />} />
          <Route path="/servizi/:servizio/:localita" element={<ServizioLocaleDynamic />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/richiedi-preventivo" element={<RichidiPreventivo />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}

export default App;
