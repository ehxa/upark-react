import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ParkFacilities from './pages/parkfacilities';
import SpotStatus from './pages/spotstatus/[spotstatus]';
import Clients from './pages/clients';
import Client from './pages/cliente/[client]';
import Tickets from './pages/tickets';
import Ticket from './pages/ticket/[ticket]';

import reportWebVitals from './reportWebVitals';
import './styles/globals.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/pages/parkfacilities" element={<ParkFacilities />} />
        <Route path="/pages/spotstatus/:parkName" element={<SpotStatus />} />
        <Route path="/pages/clients" element={<Clients />} />
        <Route path="/pages/cliente/:clientId" element={<Client />} />
        <Route path="/pages/tickets" element={<Tickets />} />
        <Route path="/pages/ticket/:ticketName" element={<Ticket />} />
      </Routes>
    </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

