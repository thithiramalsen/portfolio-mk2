import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Smooth scroll with offset for fixed header.
// Intercept anchor clicks to apply an offset so target isn't hidden under the fixed navbar.
if (typeof window !== 'undefined') {
  document.addEventListener('click', (e) => {
    const target = e.target.closest && e.target.closest('a[href^="#"]');
    if (!target) return;
    const href = target.getAttribute('href');
    if (!href || href === '#') return;

    const id = href.slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const header = document.querySelector('header');
      const headerHeight = header ? header.getBoundingClientRect().height : 72;
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
}
