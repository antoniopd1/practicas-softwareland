import React, { useState, useEffect } from 'react';
import {  Button } from 'reactstrap';

const BeerAPI = () => {
  const [beer, setBeer] = useState(null);

  const type = "beers";
  const url = new URL(`https://random-data-api.com/api/v2/${type}`);
  let params = new URLSearchParams();
  params.set("size",15);
  params.set("response_type","json");
  url.search = params;

  useEffect(() => {
    const obtenerBeerAleatorio = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("consulta no realizada exitosamente");
        const datos = await response.json();
        setBeer(datos); 
      } catch (error) {
        console.error(error);
      }
    };
    obtenerBeerAleatorio();
  }, []);

  const obtenerMasBeers = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("consulta no realizada exitosamente");
      const datos = await response.json();
      setBeer([...beer, ...datos]); 
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {beer && (
        <table>
          <thead>
            <tr>
              {Object.keys(beer[0]).map((key, index) => (
                <th key={index}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {beer.map((item, index) => (
              <tr key={index}>
                {Object.values(item).map((value, index) => (
                  <td key={index}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {beer && (
        <Button color="warning" onClick={obtenerMasBeers}>Obtener más beers</Button>
      )}
    </div>
  );
};

export default BeerAPI;