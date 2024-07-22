import React, { useState } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

const ModalButton = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div>
      <Button color="primary" onClick={toggleModal}>
        Mostrar Modal
      </Button>
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Título del Modal</ModalHeader>
        <ModalBody>
          Contenido del Modal
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            Aceptar
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            Cancelar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalButton;