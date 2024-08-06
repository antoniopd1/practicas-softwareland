const express = require('express');
const app = express();
const port = 3002;
const fs = require('fs');
const path = require('path');

const dataUsersFilePath = path.join(__dirname, 'users.json');
let dataUsers = require(dataUsersFilePath);

// Middleware para parsear el body de la solicitud
app.use(express.json());

// Ruta 'users'
app.route('/users')
  .get((req, res) => {
    res.json(dataUsers);
  })
  // agrega un nuevo elemento
  .post((req, res) => {
    const { password, first_name, last_name, username, email, gender } = req.body;
    const newUser = {
      id: dataUsers.length + 1,
      password,
      first_name,
      last_name,
      username,
      email,
      gender,
    };

    dataUsers.push(newUser);

    // sobre escribe lo elementos
    fs.writeFileSync(dataUsersFilePath, JSON.stringify(dataUsers, null, 2));

    res.status(201).json(newUser); // 201= nuevo elemento creado
  })
  // editar por id
  app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const userIndex = dataUsers.findIndex((user) => user.id === parseInt(id));
  
    if (userIndex === -1) {
      res.status(404).json({ error: `Usuario con id: ${id} no encontrado` });
    } else {
      const { password, first_name, last_name, username, email, gender } = req.body;
      dataUsers[userIndex] = {
        id: parseInt(id),
        password,
        first_name,
        last_name,
        username,
        email,
        gender,
      };
  
      fs.writeFileSync(dataUsersFilePath, JSON.stringify(dataUsers, null, 2));
      res.status(200).json(dataUsers[userIndex]);
    }
  })
  // eliminar por id
  app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    const userIndex = dataUsers.findIndex((user) => user.id === parseInt(id));
  
    if (userIndex === -1) {
      res.status(404).json({ error: `Usuario con id: ${id} no encontrado` });
    } else {
      dataUsers.splice(userIndex, 1);
      fs.writeFileSync(dataUsersFilePath, JSON.stringify(dataUsers, null, 2));
      res.status(200).json({ message: `Usuario con id: ${id} elminado con exito` });
    }
  });


// Ruta 'users/id'
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = dataUsers.find((user) => user.id === parseInt(id));

  if (user) {
    res.json(user); 
  } else {
    res.status(404).send(`Error 404: No se encontró el usuario con id ${id}`);
  }
});

// Manejo de errores 404
app.use((req, res) => {
  res.status(404).send('Error 404: La ruta solicitada no existe');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});



