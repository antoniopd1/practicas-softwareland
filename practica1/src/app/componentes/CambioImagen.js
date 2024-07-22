
const CambioImagen = ({imagen, setImagen}) => {
  
  return (
    <div>
      <img src={imagen} alt="Imagen" style={{ maxWidth: '300px' }} />
      <br />
      <button onClick={()=>setImagen("imgs/mt09_22_1.jpg")}>Cambiar Imagen</button>
    </div>
  );
};

export default CambioImagen;
