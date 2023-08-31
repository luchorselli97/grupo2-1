import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PaginaPrincipal from './PaginaPrincipal';
import Presentacion from './PaginaPrincipal';
import RegistroDeUsuarios from './RegistroUsuarios';
import InicioSesion from './InicioSesion';
import NuevaTarea from './AgregarTarea';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Presentacion />} />
        <Route path="/registro" element={<RegistroDeUsuarios />} />
        <Route path="/iniciosesion" element={<InicioSesion />} />
        <Route path="/agregartarea" element={<NuevaTarea />} />
        <Route path="/paginaprincipal" element={<PaginaPrincipal />} />
      </Routes>
    </Router>
  );
}

export default App;
