import React, { useContext } from 'react';
import myContext from '../../Context/myContext';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import api from '../../api';

function DeleteModal() {
  const {
    token,
    modalToDelete,
    idToUpdate,
    setModalToDelete
  } = useContext(myContext);

  const handleDeleteTask = async () => {
    // pag pesquisa: 'https://stackoverflow.com/questions/51069552/axios-delete-request-with-body-and-headers/51069816'
    await api.delete('/tasks/delete', { 
      data: { id: idToUpdate },
      headers: { 'authorization': token }
    });
    setModalToDelete(false)
  };

  return (
    <Modal show={ modalToDelete } onHide={ () => setModalToDelete(false) }>
      <Modal.Header closeButton>
        <Modal.Title>Deletar arquivo</Modal.Title>
      </Modal.Header>
      <Modal.Body>Tem certeza de que quer deletar a tarefa?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ () => setModalToDelete(false) }>
          cancelar
        </Button>
        <Button variant="secondary" onClick={ handleDeleteTask }>
          deletar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default DeleteModal;
