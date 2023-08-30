import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';

import Presentacion from './PaginaPrincipal';
import RegistroDeUsuarios from './registro';
import Inicio from './inicio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/registro" element={<RegistroDeUsuarios />} />
        <Route path="/inicio" element={<Inicio/>} />
      </Routes>
    </Router>
  );
}

export default App;