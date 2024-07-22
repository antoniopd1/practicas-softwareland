
const Contador = ({contador, setContador}) => {
  // contador es el nombre del estado, funcion setContador para cambiar contador


  // useEffect se ejecuta cuando se monta el componente
 // useEffect(()=>{

  //},[])
  return (
    <div>
      <p>Contador: {contador}</p>
      <button onClick={()=>setContador(contador+1)}>Incrementar</button>
    </div>
  );
};

export default Contador;
