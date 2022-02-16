import React, { useContext, useState } from 'react';
import myContext from '../Context/myContext';
import api from '../api';
import { AlertModal } from './Modal';
import { INTERNAL_ERROR, ERROR_TASK } from '../Dictionary/errorMessages';
import { useNavigate } from 'react-router-dom';

function TasksHeader() {
  const {
    email,
    setTextModal,
    setModal,
    token,
  } = useContext(myContext);
  const [task, setTask] = useState('');
  const navigate = useNavigate();

  const sendNewTask = async () => {
    await api.post('/tasks/newTask', { task }, { headers: { 'authorization': token } })
      .then((response) => setTask(response));
    
    return true;
  };

  const handleClick = async () => {
    try {
      const existTask = task.length > 0;
      if (!existTask) {
        setTextModal(ERROR_TASK);
        return setModal(true);
      }

      await sendNewTask();
      navigate('/loading');
      return navigate('/tasks');
    } catch (error) {
      setTextModal(INTERNAL_ERROR);
      return setModal(true);
    }
  };

  return (
    <header>
      <AlertModal />
      <span>{ email }</span>
      <form>
        <label htmlFor="input-new-task">
          <input
            type="text"
            id="input-new-task"
            placeholder="Insira sua tarefa"
            value={ task }
            onChange={ (e) => setTask(e.target.value) }
          />
        </label>
        <button onClick={ handleClick } type="button">
          Nova tarefa
        </button>
      </form>
    </header>
  );
}

export default TasksHeader;
