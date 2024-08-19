import React, { useState } from 'react';
import { Filas, Carta } from '../componentes';
import { Instala } from './instala';

export function Registrados({ datos, onEliminar }) {
  const [busqueda, setBusqueda] = useState('');
  const [usuarios, setUsuarios] = useState(datos);

  const usuariosFiltrados = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().startsWith(busqueda.toLowerCase())
  );

  const handleAgregarUsuarios = (newUsers) => {
    setUsuarios(prevUsuarios => [...prevUsuarios, ...newUsers]);
  };

  return (
    <Carta>
      <h2>Usuarios Registrados</h2>
      
      <input 
        type="text" 
        placeholder="nombre de la persona" 
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="barra-busqueda"
      />

      <Instala onAgregarUsuarios={handleAgregarUsuarios} />
      
      {busqueda && usuariosFiltrados.length > 0 && (
        <div className="tabla-usuarios">
          <div className="fila-usuario">
            <span>Nombre</span>
            <span>Apellido</span>
            <span>Teléfono</span>
            <span>Acciones</span>
          </div>
          {usuariosFiltrados.map((usuario, index) => (
            <Filas 
              key={index} 
              nombre={usuario.nombre} 
              apellido={usuario.apellido} 
              telefono={usuario.telefono}
              onEliminar={onEliminar}
            />
          ))}
        </div>
      )}
    </Carta>
  );
}
