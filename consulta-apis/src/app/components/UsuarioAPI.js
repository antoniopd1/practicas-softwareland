import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button } from 'reactstrap';

const UsuarioAPI = () => {
  const [usuario, setUsuario] = useState(null);

  const type = "users";
  const url = new URL(`https://random-data-api.com/api/v2/${type}`);
  let params = new URLSearchParams();
  params.set("size",10);// cantidad de objetos
  params.set("response_type","json");
  url.search = params;

  const obtenerUsuarioAleatorio = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("consulta no realizada exitosamente");
      const datos = await response.json();
      setUsuario(datos); // Assuming the API returns an array of objects
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div>
      <Button color="warning" onClick={obtenerUsuarioAleatorio}>Obtener usuario aleatorio</Button>
      {usuario && (
        <Card>
          <CardHeader>
            <h2>{usuario[0].first_name} {usuario[0].last_name}</h2>
          </CardHeader>
          <CardBody>
            <p>Correo electrónico: {usuario[0].email}</p>
            <p>Teléfono: {usuario[0].phone_number}</p>
            <img src={usuario[0].avatar} alt='imagen avatar'/> 
          </CardBody>
          <CardFooter>
            <h3>Suscripción</h3>
            <p>Payment method: {usuario[0].subscription.payment_method}</p>
            <p>Plan: {usuario[0].subscription.plan}</p>
            <p>Term: {usuario[0].subscription.term}</p>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default UsuarioAPI;