import React, { useState } from 'react';
import { Table, Modal, ModalBody, ModalFooter, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faStar, faHeart, faSmile } from '@fortawesome/free-solid-svg-icons';
import data from './data.json';

function TableComponent() {
  const [modal, setModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const toggleModal = (image) => {
    setModal(!modal);
    setSelectedImage(image);
  };

  const icons = [faInfoCircle, faStar, faHeart, faSmile];

  return (
    <div>
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>Columna 1</th>
            <th>Columna 2</th>
            <th>Icono</th>
            <th>Imagenes</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{item.column1}</td>
              <td>{item.column2}</td>
              <td>
                <FontAwesomeIcon icon={icons[index % icons.length]} />
              </td>
              <td>
                <Button color="primary" onClick={() => toggleModal(item.image)}>
                  Ver imagen
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalBody>
          <img src={selectedImage} alt="Imagen" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default TableComponent;