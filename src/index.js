import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { NombreCompleto as Name} from './components/NombreCompleto';
import Mascota from './components/Mascota';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Name name="Serg" age="11"/>
    <Mascota name="Solovino" age = {8} />{/* Cualquier dato no string debe ser puesto entre llaves */}
    <Name name="Paxim" age="12"/>
    <Name name="Mira" age="1312"/>
    <Name name="Carl" age="50"/>
    
  </React.StrictMode>
);

