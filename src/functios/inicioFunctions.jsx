import React, { useState } from 'react'

export default function NuevaTarea() {
  const [tarea, setTarea] = useState();
  const [desc, setDesc] = useState();

  const handleTareaChange = (event) => {
    setTarea(event.target.value);
  };

  const handleDescChange = (event) => {
    setDesc(event.target.value);
  };

  const handleAgregar = () => {
    console.log('Tarea:', tarea);
    console.log('Descripción:', desc);
  };
    return(
      <div>
        <div>
          <label>Crear nueva tarea:</label> <br/>
          <input type="text" value={tarea} onChange={handleTareaChange}/><br/>
        </div>
        <div>
          <label>Descripción:</label> <br/>
          <input type="textarea" value={desc} onChange={handleDescChange}/><br/>
        </div>
        <br/>
        <br/>
          <button onClick={handleAgregar}>Agregar tarea</button>
      </div>
    )
}
export function Eliminar() {
  const handleEliminar = () => {
      console.log('este boton elimina')};
  return(
      <div>
          <button onClick={handleEliminar}>Eliminar</button>
      </div>
  )
}
export function EditarTarea () {
  const handleEditar = () => {
      console.log('este boton edita');
    };
  return(
      <div>
          <button onClick={handleEditar}>Editar</button>
      </div>
  )
}
export function Completa() {
  return(
      <div>
          <input type="checkbox"/>
          <label>Completa</label>
      </div>
  )
}

export function Filtrar() {
  return(
    <div>
      <label for="Tareas">Filtrar por tarea:</label>
      <select name="Tareas">
        <option>Todas las tareas</option>
        <option>Tarea 1</option>
        <option>Tarea 2</option>
        <option>Tarea 3</option>
        <option>Tarea 4</option>
        <option>Tarea 5</option>
        <option>Tarea 6</option>
      </select>
    </div>
  )
}