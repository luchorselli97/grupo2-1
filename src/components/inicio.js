import React from 'react'
import NuevaTarea from '../functios/inicioFunctions';
import Filtrar from '../functios/Filtrar';
import EditarTarea from '../functios/Editar';
import Eliminar from '../functios/Eliminar';
import Completa from '../functios/Completa';

function Inicio() {
    return (
    <>
      <div>
        <h2>Agregar nueva tarea:</h2>
        <NuevaTarea/>
      </div>
        <EditarTarea/>
        <Eliminar/>
        <Completa/>
        <br/>
        <Filtrar/>
    </>
    );
  }

export default Inicio