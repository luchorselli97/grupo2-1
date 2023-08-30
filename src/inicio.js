import React from 'react'
import NuevaTarea from "./functios/inicioFunsiones";
import Completa from './functios/completa';
import EditarTarea from './functios/editar';
import Eliminar from './functios/eliminar';


function Inicio() {
    return (
      <div>
        <h2>Agregar nueva tarea:</h2>
          <NuevaTarea />
      </div>
    );
  }

export default Inicio