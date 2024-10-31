import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter.tsx';
import ScrollToTop from './modules/ScrollToTop.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ScrollToTop />
    <AppRouter />
  </BrowserRouter>
);
