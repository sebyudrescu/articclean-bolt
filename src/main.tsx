import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';

// (opzionale) lazy load CSS come facevi tu
const loadAppStyles = () => import('./index.css');

if (typeof window !== 'undefined') {
  const { requestIdleCallback } = window as typeof window & {
    requestIdleCallback?: (callback: () => void) => number;
  };

  if (typeof requestIdleCallback === 'function') {
    requestIdleCallback(() => {
      loadAppStyles();
    });
  } else {
    setTimeout(() => {
      loadAppStyles();
    }, 0);
  }
}

const container = document.getElementById('root')!;
createRoot(container).render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>
);

