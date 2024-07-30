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
    Table,
    ModalHeader,
    FormFeedback,
  } from "reactstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faPencilAlt, faTimes } from "@fortawesome/free-solid-svg-icons";

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
    const [fechaRegistro, setFechaRegistro] = useState("");
    const [registros, setRegistros] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [registroEditar, setRegistroEditar] = useState({});

    const handleSaveData = () => {
      const nuevoRegistro = {
        nombre,
        apellido,
        email,
        contraseña,
        edad,
        genero,
        rol,
        opciones,
        notas,
        fechaRegistro,
      };
      setRegistros([...registros, nuevoRegistro]);
    };
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
      const isValid = /^[a-zA-Z0-9.]+@[a-zA-Z0-9.]+\.[a-zA-Z]{2,}$/.test(
        emailValue
      );
      setEmail(emailValue);
      event.target.classList.toggle("is-invalid", !isValid);
      event.target.classList.toggle("is-valid", isValid);
    };

    const handleEdadChange = (event) => {
      const edadValue = event.target.value;
      const isValid = /^\d+$/.test(edadValue) && parseInt(edadValue, 10) <= 100;
      setEdad(edadValue);
      event.target.classList.toggle("is-invalid", !isValid);
      event.target.classList.toggle("is-valid", isValid);
    };

    const handleRolChange = (event) => {
      const rolValue = event.target.value;
      setRol(event.target.value);
      const isValid = rolValue == "0" ? false : true;
      event.target.classList.toggle("is-invalid", !isValid);
      event.target.classList.toggle("is-valid", isValid);
    };

    const handleOpcionesChange = (event) => {
      setOpciones(event.target.checked);
    };

    const handleEliminarRegistro = (index) => {
      const nuevosRegistros = [...registros];
      nuevosRegistros.splice(index, 1);
      setRegistros(nuevosRegistros);
    };

    const handleEditarRegistro = (registro) => {
      setRegistroEditar(registro);
      setShowModal(true);
    };

    const handleGuardarEdicion = () => {
      const nuevosRegistros = [...registros];
      const index = nuevosRegistros.findIndex((r) => r.nombre === registroEditar.nombre);
      nuevosRegistros[index] = registroEditar;
      setRegistros(nuevosRegistros);
      setShowModal(false);
    };

    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="nombre">Nombre</Label>
            <Input
              type="text"
              id="nombre"
              value={nombre}
              onChange={handleNombreChange}
            />
            <FormFeedback>solo letras</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="apellido">Apellido</Label>
            <Input
              type="text"
              id="apellido"
              value={apellido}
              onChange={handleApellidoChange}
            />
            <FormFeedback>solo letras</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
            <FormFeedback>formato valido: a@gmail.com</FormFeedback>
          </FormGroup>
          <FormGroup>
            <Label for="contraseña">Contraseña</Label>
            <Input
              type="password"
              id="contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
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
                value="M"
                checked={genero === "M"}
                onChange={(e) => setGenero(e.target.value)}
              />{" "}
              Masculino
            </Label>
            <Label check>
              <Input
                type="radio"
                name="genero"
                value="F"
                checked={genero === "F"}
                onChange={(e) => setGenero(e.target.value)}
              />{" "}
              Femenino
            </Label>
          </FormGroup>
          <FormGroup>
            <Label for="rol">Rol</Label>
            <Input type="select" id="rol" value={rol} onChange={handleRolChange}>
              <option value="0">Seleccione un rol</option>
              <option>Administrador</option>
              <option>Usuario</option>
            </Input>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input
                type="checkbox"
                id="opciones"
                checked={opciones}
                onChange={(e) => setOpciones(e.target.checked)}
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
              onChange={(e) => setNotas(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label for="fechaRegistro">Fecha de Registro</Label>
            <Input
              type="date"
              id="fechaRegistro"
              value={fechaRegistro}
              onChange={(e) => setFechaRegistro(e.target.value)}
            />
          </FormGroup>
          <Button color="primary" onClick={handleSaveData}>
            Guardar
          </Button>
        </Form>
        <Table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Email</th>
              <th>Contraseña</th>
              <th>Edad</th>
              <th>Genero</th>
              <th>Rol</th>
              <th>Opciones</th>
              <th>Notas</th>
              <th>Fecha de Registro</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {registros.map((registro, index) => (
              <tr key={index}>
                <td>{registro.nombre}</td>
                <td>{registro.apellido}</td>
                <td>{registro.email}</td>
                <td>{registro.contraseña}</td>
                <td>{registro.edad}</td>
                <td>{registro.genero}</td>
                <td>{registro.rol}</td>
                <td>{registro.opciones ? "Sí" : "No"}</td>
                <td>{registro.notas}</td>
                <td>{registro.fechaRegistro}</td>
                <td>
                  <Button
                    color="warning"
                    onClick={() => handleEditarRegistro(registro)}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} />
                  </Button>
                  <Button
                    color="danger"
                    onClick={() => handleEliminarRegistro(index)}
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal isOpen={showModal} toggle={() => setShowModal(!showModal)}>
          <ModalHeader toggle={() => setShowModal(!showModal)}>
            Editar Registro
          </ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="nombre">Nombre</Label>
                <Input
                  type="text"
                  id="nombre"
                  value={registroEditar.nombre}
                  onChange={(e) =>
                    setRegistroEditar({
                      ...registroEditar,
                      nombre: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="apellido">Apellido</Label>
                <Input
                  type="text"
                  id="apellido"
                  value={registroEditar.apellido}
                  onChange={(e) =>
                    setRegistroEditar({
                      ...registroEditar,
                      apellido: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  value={registroEditar.email}
                  onChange={(e) =>
                    setRegistroEditar({
                      ...registroEditar,
                      email: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="contraseña">Contraseña</Label>
                <Input
                  type="password"
                  id="contraseña"
                  value={registroEditar.contraseña}
                  onChange={(e) =>
                    setRegistroEditar({
                      ...registroEditar,
                      contraseña: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="edad">Edad</Label>
                <Input
                  type="number"
                  id="edad"
                  value={registroEditar.edad}
                  onChange={(e) =>
                    setRegistroEditar({ ...registroEditar, edad: e.target.value })
                  }
                />
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="radio"
                    name="genero"
                    value="M"
                    checked={registroEditar.genero === "M"}
                    onChange={(e) =>
                      setRegistroEditar({
                        ...registroEditar,
                        genero: e.target.value,
                      })
                    }
                  />{" "}
                  Masculino
                </Label>
                <Label check>
                  <Input
                    type="radio"
                    name="genero"
                    value="F"
                    checked={registroEditar.genero === "F"}
                    onChange={(e) =>
                      setRegistroEditar({
                        ...registroEditar,
                        genero: e.target.value,
                      })
                    }
                  />{" "}
                  Femenino
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="rol">Rol</Label>
                <Input
                  type="select"
                  id="rol"
                  value={registroEditar.rol}
                  onChange={(e) =>
                    setRegistroEditar({ ...registroEditar, rol: e.target.value })
                  }
                >
                  <option value="0">Seleccione un rol</option>
                  <option>Administrador</option>
                  <option>Usuario</option>
                </Input>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    id="opciones"
                    checked={registroEditar.opciones}
                    onChange={(e) =>
                      setRegistroEditar({
                        ...registroEditar,
                        opciones: e.target.checked,
                      })
                    }
                  />{" "}
                  Opciones
                </Label>
              </FormGroup>
              <FormGroup>
                <Label for="notas">Notas</Label>
                <Input
                  type="textarea"
                  id="notas"
                  value={registroEditar.notas}
                  onChange={(e) =>
                    setRegistroEditar({
                      ...registroEditar,
                      notas: e.target.value,
                    })
                  }
                />
              </FormGroup>
              <FormGroup>
                <Label for="fechaRegistro">Fecha de Registro</Label>
                <Input
                  type="date"
                  id="fechaRegistro"
                  value={registroEditar.fechaRegistro}
                  onChange={(e) =>
                    setRegistroEditar({
                      ...registroEditar,
                      fechaRegistro: e.target.value,
                    })
                  }
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => setShowModal(!showModal)}>
              Cerrar
            </Button>
            <Button color="primary" onClick={handleGuardarEdicion}>
              Guardar
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  };

  export default FormComponent;
