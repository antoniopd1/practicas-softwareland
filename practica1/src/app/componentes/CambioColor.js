import  { useState } from 'react';

const CambioColor = () => {
  const [colorFondo, setColorFondo] = useState('white'); // Color de fondo inicial

  const cambiarColor = () => {
    setColorFondo(colorFondo === 'white' ? 'lightblue' : 'white'); // Cambia los colores como desees
  };

  return (
    <div style={{ backgroundColor: colorFondo, padding: '20px', margin: '10px' }}>
      <button onClick={cambiarColor}>Cambiar Color de Fondo</button>
    </div>
  );
};

export default CambioColor;


//rafce ejemplo