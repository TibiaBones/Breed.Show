import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './modules/header/header';


// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

