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
        <label htmlFor="input-update-task">
          Tarefa
          <input
            type="text"
            id="input-update-task"
            value={ toUpdateTask }
            onChange={ (e) => setToUpdateTask(e.target.value) }
          />
        </label>
        <label htmlFor="input-update-state">
          Status
          <select
            id="input-update-state"
            name="status"
            onChange={ (e) => setToUpdateState(e.target.value) }
          >
            <option value="pendente">pendente</option>
            <option value="em andamento">em andamento</option>
            <option value="pronto">pronto</option>
          </select>
        </label>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ handleClick }>
          atualizar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateModal;
