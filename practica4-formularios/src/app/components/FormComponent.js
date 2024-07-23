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
  FormFeedback
} from "reactstrap";

const FormComponent = () => {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [edad, setEdad] = useState(1);
  const [genero, setGenero] = useState("M");
  const [rol, setRol] = useState("");
  const [opciones, setOpciones] = useState(false);
  const [notas, setNotas] = useState("");
  const [fechaRegistro, setFechaRegistro] = useState(new Date());
  const [modal, setModal] = useState(false);

  const handleNombreChange = (event) => {
    const nombreValue = event.target.value;
    const isValid = /^[a-zA-Z]+$/.test(nombreValue);
    setNombre(nombreValue);
    event.target.classList.toggle("is-invalid", !isValid);
    event.target.classList.toggle("is-valid", isValid);
  };

  const handleApellidoChange = (event) => {
    const apellidoValue = event.target.value;
    const isValid = /^[a-zA-Z]+$/.test(apellidoValue);
    setApellido(apellidoValue);
    event.target.classList.toggle("is-invalid", !isValid);
    event.target.classList.toggle("is-valid", isValid);
  };

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    const isValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
      emailValue
    );
    setEmail(emailValue);
    event.target.classList.toggle("is-invalid", !isValid);
    event.target.classList.toggle("is-valid", isValid);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleEdadChange = (event) => {
    const edadValue = event.target.value;
    const isValid = /^\d+$/.test(edadValue) && parseInt(edadValue, 10) <= 100;
    setEdad(edadValue);
    event.target.classList.toggle("is-invalid", !isValid);
    event.target.classList.toggle("is-valid", isValid);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };

  const handleRolChange = (event) => {
    const rolValue=event.target.value;
    setRol(event.target.value);
    const isValid=(rolValue == '0'?false:true);
    event.target.classList.toggle("is-invalid", !isValid);
    event.target.classList.toggle("is-valid", isValid);
  };

  const handleOpcionesChange = (event) => {
    setOpciones(event.target.checked);
  };

  const handleNotasChange = (event) => {
    setNotas(event.target.value);
  };

  const handleFechaRegistroChange = (event) => {
    const fechaRegistroValue = event.target.valueAsDate;
    const isValid = fechaRegistroValue >= new Date();
    setFechaRegistro(fechaRegistroValue);
    event.target.classList.toggle("is-invalid", !isValid);
    event.target.classList.toggle("is-valid", isValid);
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
    setEdad(1);
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
          <FormFeedback>
      Solo se aceptan letras
    </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="apellido">Apellido</Label>
          <Input
            type="text"
            id="apellido"
            value={apellido}
            onChange={handleApellidoChange}
          />
          <FormFeedback>
      Solo se aceptan letras
    </FormFeedback>
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <FormFeedback>
      formato valido: antonio@gmail.com
    </FormFeedback>
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
            min="1"
            max="100"
            step="1"
          />
          <FormFeedback>
      Solo numeros entre 1 y 100
    </FormFeedback>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input
              type="radio"
              name="genero"
              value="M"
              checked={genero === "M"}
              onChange={handleGeneroChange}
            />{" "}
            Masculino
          </Label>
          <Label check>
            <Input
              type="radio"
              name="genero"
              value="F"
              checked={genero === "F"}
              onChange={handleGeneroChange}
            />{" "}
            Femenino
          </Label>
        </FormGroup>
        <FormGroup>
          <Label for="rol">Rol</Label>
          <Input type="select" id="rol" value={rol} onChange={handleRolChange}>
            <option value="0">Seleccione un rol</option>
            <option value="admin">Administrador</option>
            <option value="user">Usuario</option>
          </Input>
          <FormFeedback>
      Debe seleccionar un rol
    </FormFeedback>
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
            value={fechaRegistro.toLocaleDateString("en-CA")}
            onChange={handleFechaRegistroChange}
          />
          <FormFeedback>
      Debe seleccionar una fecha de hoy en adelante
    </FormFeedback>
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
          <p>Genero: {genero == "M" ? "Masculino" : "Femenino"}</p>
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
