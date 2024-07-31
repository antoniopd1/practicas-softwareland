const express = require('express');
const app = express();
const port = 3002;

// Ruta 'users'
app.route('/users')
  .get((req, res) => {
    res.send('GET: Se ha realizado una solicitud GET a la ruta /users');
  })
  .post((req, res) => {
    res.send('POST: Se ha realizado una solicitud POST a la ruta /users');
  })
  .put((req, res) => {
    res.send('PUT: Se ha realizado una solicitud PUT a la ruta /users');
  })
  .delete((req, res) => {
    res.send('DELETE: Se ha realizado una solicitud DELETE a la ruta /users');
  });

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).send('Error 404: La ruta solicitada no existe');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});




// const express = require('express');
// const app = express();
// const port = 3002; 

// app.get('/hello', (req, res) => {
//   const { name, lastName } = req.query;
//   res.send(`Hola ${name} ${lastName}!`);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });