import React, { useContext } from 'react';
import myContext from '../../Context/myContext';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import api from '../../api';
import { INTERNAL_ERROR } from '../../Dictionary/errorMessages';

function UpdateModal() {
  const {
    token,
    setModal,
    modalToUpdate,
    setModalToUpdate,
    setTextModal,
    toUpdateTask,
    setToUpdateTask,
    toUpdateState,
    setToUpdateState,
    idToUpdate,
  } = useContext(myContext);

  const handleClick = async () => {
    try {
      const id = idToUpdate;
      const task = toUpdateTask;
      const status = toUpdateState;

      await api.put('/tasks/update', { id, task, status }, { headers: { 'authorization': token } })
      setModalToUpdate(false)
    } catch (error) {
      setTextModal(INTERNAL_ERROR)
      setModal(true);
    }
  };

  return (
    <Modal show={ modalToUpdate } onHide={ () => setModal(false) }>
      <Modal.Header closeButton>
        <Modal.Title>Atualizar tarefa</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <input
          type="text"
          value={ toUpdateTask }
          onChange={ (e) => setToUpdateTask(e.target.value) }
        />
        <input
          type="text"
          value={ toUpdateState }
          onChange={ (e) => setToUpdateState(e.target.value) }
        />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ handleClick }>
          fechar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateModal;
