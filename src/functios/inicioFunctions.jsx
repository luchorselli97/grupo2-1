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