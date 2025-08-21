import React from 'react';
import ReactDOM from 'react-dom/client';
import './StartingPage/StartingPage.css';
import App from './App';
import { UsersProvider } from "./UsersProvider";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UsersProvider>
          <App />
    </UsersProvider>

  </React.StrictMode>
); 