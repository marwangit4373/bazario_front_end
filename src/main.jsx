import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // إضافة BrowserRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* تغليف التطبيق بـ BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);
