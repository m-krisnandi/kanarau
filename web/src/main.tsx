import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Auto-recover from stale chunks after a new deployment
if (typeof window !== 'undefined') {
  window.addEventListener('vite:preloadError', (event) => {
    event.preventDefault();
    const lastReload = Number(sessionStorage.getItem('last_chunk_reload') || 0);
    if (Date.now() - lastReload > 8000) {
      sessionStorage.setItem('last_chunk_reload', String(Date.now()));
      window.location.reload();
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

