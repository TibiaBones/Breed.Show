import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './modules/header/Header';
import Title from './modules/title/Title';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Header />
    <Title />
  </React.StrictMode>
);

