import React from 'react'
import NuevaTarea, { Completa, EditarTarea, Eliminar, Filtrar } from "./functios/inicioFunctions";

function Inicio() {
    return (
    <>
      <div>
        <h2>Agregar nueva tarea:</h2>
        <NuevaTarea/>
      </div>
      <br/>
        <Filtrar/>
      <br/>
        <EditarTarea/>
        <Eliminar/>
        <Completa/>
    </>
    );
  }

export default Inicio