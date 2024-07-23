import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Modal,
  ModalBody,
  ModalFooter,
} from "reactstrap";

const FormComponent = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [edad, setEdad] = useState(0);
  const [genero, setGenero] = useState(false);
  const [rol, setRol] = useState("");
  const [opciones, setOpciones] = useState(false);
  const [notas, setNotas] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState(new Date());
  const [modal, setModal] = useState(false);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleEdadChange = (event) => {
    setEdad(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.checked);
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
  };

  const handleOpcionesChange = (event) => {
    setOpciones(event.target.checked);
  };

  const handleNotasChange = (event) => {
    setNotas(event.target.value);
  };

  const handleFechaRegistroChange = (event) => {
    setFechaRegistro(new Date(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setModal(true);
  };

  const handleReset = () => {
    setNombre("");
    setApellido("");
    setEmail("");
    setContraseña("");
    setEdad(0);
    setGenero(false);
    setRol("");
    setOpciones(false);
    setNotas("");
    setFechaRegistro(new Date());
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label for="nombre">Nombre</Label>
          <Input
            type="text"
            id="nombre"
            value={nombre}
            onChange={handleNombreChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="apellido">Apellido</Label>
          <Input
            type="text"
            id="apellido"
            value={apellido}
            onChange={handleApellidoChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="contraseña">Contraseña</Label>
          <Input
            type="password"
            id="contraseña"
            value={contraseña}
            onChange={handleContraseñaChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="edad">Edad</Label>
          <Input
            type="number"
            id="edad"
            value={edad}
            onChange={handleEdadChange}
          />
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="genero"
              value="true"
              checked={genero}
              onChange={handleGeneroChange}
            />{" "}
            Masculino
          </Label>
          <Label check>
            <Input
              type="radio"
              name="genero"
              value="false"
              checked={!genero}
              onChange={handleGeneroChange}
            />{" "}
            Femenino
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="rol">Rol</Label>
          <Input type="select" id="rol" value={rol} onChange={handleRolChange}>
            <option value="">Seleccione un rol</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </Input>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="checkbox"
              id="opciones"
              checked={opciones}
              onChange={handleOpcionesChange}
            />{" "}
            Opciones
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="notas">Notas</Label>
          <Input
            type="textarea"
            id="notas"
            value={notas}
            onChange={handleNotasChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="fechaRegistro">Fecha de Registro</Label>
          <Input
            type="date"
            id="fechaRegistro"
            value={fechaRegistro.toLocaleDateString()}
            onChange={handleFechaRegistroChange}
          />
        </FormGroup>
        <Button color="primary" type="submit">
          Mostrar
        </Button>
        <Button color="secondary" onClick={handleReset}>
          Reiniciar
        </Button>
      </Form>

      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalBody>
          <h4>Información Registrada</h4>
          <p>Nombre: {nombre}</p>
          <p>Apellido: {apellido}</p>
          <p>Email: {email}</p>
          <p>Contraseña: {contraseña}</p>
          <p>Edad: {edad}</p>
          <p>Genero: {genero ? "Masculino" : "Femenino"}</p>
          <p>Rol: {rol}</p>
          <p>Opciones: {opciones ? "Si" : "No"}</p>
          <p>Notas: {notas}</p>
          <p>Fecha de Registro: {fechaRegistro.toLocaleDateString()}</p>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setModal(!modal)}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default FormComponent;