import  { useState } from 'react';

const CardContainer = ({ children }) => {
  // Estado para manejar la disposición actual (columnas por defecto)
  const [layout, setLayout] = useState('column');

  // Función para cambiar la disposición según la selección del usuario
  const handleLayoutChange = (event) => {
    setLayout(event.target.value);
  };

  return (
    <div>
      {/* Desplegable para seleccionar la disposición */}
      <label htmlFor="layout-select">Selecciona disposición:</label>
      <select id="layout-select" value={layout} onChange={handleLayoutChange}>
        <option value="column">Columnas</option>
        <option value="row">Filas</option>
      </select>

      {/* Contenedor de tarjetas con disposición seleccionada */}
      <div
        className="card-container"
        style={{
          display: 'flex',
          flexDirection: layout,
          gap: '1rem', // Espacio entre tarjetas
          padding: '1rem',
          border: '1px solid #ccc',
          borderRadius: '8px',
          marginTop: '1rem'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default CardContainer;
