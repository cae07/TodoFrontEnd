import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';

function AlertModal() {
  const {
    modal,
    textModal,
    setModal,
  } = useContext(myContext);

  return (
    <Modal show={ modal } onHide={ () => setModal(false) }>
      <Modal.Header closeButton>
        <Modal.Title>Erro!</Modal.Title>
      </Modal.Header>
      <Modal.Body>{ textModal }</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ () => setModal(false) }>
          fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default AlertModal;
