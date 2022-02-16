import React, { useContext, useEffect, useState } from 'react';
import myContext from '../Context/myContext';
import api from '../api';
import { UpdateModal, DeleteModal } from './Modal';

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
    // setTextModal,
    // setModal,
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
    // try {
    //   const id = task._id;
    //   await api.delete('/tasks/delete', { data: { id }, headers: { 'authorization': token } })
    // } catch (error) {      
    //   setTextModal(INTERNAL_ERROR);
    //   return setModal(true);
    // }
  };
  
  return (
    // pag pesqisa: 'https://www.homehost.com.br/blog/criar-sites/tabela-html/'
    <div>
    <UpdateModal />
    <DeleteModal />
      <table>
        <tr>
          <td>Index</td>
          <td>TAREFA</td>
          <td>STATUS</td>
          <td>Atualizar/Deletar</td>
        </tr>
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
              >
                Atualizar
              </button>
              <button
                type="button"
                onClick={ () => handleDelete(task) }
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default TasksBody;
