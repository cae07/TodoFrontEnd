import React, { useContext, useEffect, useState } from 'react';
import myContext from '../Context/myContext';
import api from '../api';
import { UpdateModal, DeleteModal } from './Modal';
import { Table } from 'react-bootstrap';
import '../CSS/todolist.css'

function TasksBody() {
  const {
    token,
    setIDToUpdate,
    setModalToUpdate,
    setToUpdateTask,
    setToUpdateState,
    modalToUpdate,
    modalToDelete,
    setModalToDelete,
  } = useContext(myContext);
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    // pag pesquisa: 'https://qastack.com.br/programming/40988238/sending-the-bearer-token-with-axios';
    api.get('/tasks', { headers: { authorization: token } })
    .then((response) => setTasks(response.data));
  }, [modalToUpdate, modalToDelete]);

  const handleUpdate = async (task) => {
    setIDToUpdate(task._id);
    setToUpdateTask(task.task);
    setToUpdateState(task.status);
    setModalToUpdate(true);
  };

  const handleDelete = async (task) => {
    setIDToUpdate(task._id);
    setModalToDelete(true);
  };
  
  return (
    // pag pesqisa: 'https://www.homehost.com.br/blog/criar-sites/tabela-html/'
    <div className="table-container">
    <UpdateModal />
    <DeleteModal />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Index</th>
            <th>TAREFA</th>
            <th>STATUS</th>
            <th>Atualizar/Deletar</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={ task._id }>
              <td>{ index + 1 }</td> {/* para não começar do valor 0 */}
              <td>{ task.task}</td>
              <td>{ task.status }</td>
              <td>
                <button
                  type="button"
                  onClick={ () => handleUpdate(task) }
                  data-toggle="modal"
                  data-target="#exampleModalCenter"
                  className="button button-update"
                >
                  Atualizar
                </button>
                <button
                  type="button"
                  onClick={ () => handleDelete(task) }
                  className="button button-delete"
                >
                  Deletar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default TasksBody;
