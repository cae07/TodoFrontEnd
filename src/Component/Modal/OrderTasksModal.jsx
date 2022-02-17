import React, { useContext } from 'react';
import myContext from '../../Context/myContext';
import Modal from 'react-bootstrap/Modal';
import { Button, Form } from 'react-bootstrap';

function OrderTasksModal() {
  const {
    setModal,
    modalToSort,
  } = useContext(myContext);

  const handleOrderedTasks = (e) => {
    console.log(e);
  };

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <Modal show={ modalToSort } onHide={ () => setModal(false) }>
      <Modal.Header closeButton>
        <Modal.Title>Ordenar tarefas</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            Ordenar por
            <Form.Select
              name="orderedTasks"
              onChange={ handleOrderedTasks }
            >
              <option value="name">Name</option>
              <option value="status">Status</option>
              <option value="data">Data criação</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={ handleClick }>
          ordenar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default OrderTasksModal;
