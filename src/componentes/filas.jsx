import React from 'react';

export function Filas({ nombre, apellido, telefono, onEliminar }) {
  return (
    <div className="fila-usuario">
      <span>{nombre}</span>
      <span>{apellido}</span>
      <span>{telefono}</span>
      <button onClick={onEliminar}>Eliminar</button>
    </div>
  );
}
