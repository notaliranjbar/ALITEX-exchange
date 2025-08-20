import React from 'react';
import ReactDOM from 'react-dom/client';
import './StartingPage/StartingPage.css';
import App from './App';
import { CurrenciesProvider } from "./CurrenciesProvide";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrenciesProvider>
          <App />
    </CurrenciesProvider>

  </React.StrictMode>
); 