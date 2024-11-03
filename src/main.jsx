import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Pages/Home';
import './index.css';
import Login from './Pages/Login';
import Singin from './Pages/Singin';
import Detalhes from './Pages/Detalhes';
import Checkout from './Pages/Checkout';
import Criar from './Pages/Criar';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/singin" element={<Singin />} />
        <Route path="/detalhes" element={<Detalhes />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/criar" element={<Criar />} />
      </Routes>
    </Router>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Main />);