import React, { useContext, useState } from 'react';
import myContext from '../Context/myContext';
import api from '../api';
import { AlertModal } from '../Component';
import { INTERNAL_ERROR, ERROR_TASK } from '../Dictionary/errorMessages';

function TasksHeader() {
  const { email, setTextModal, setModal, token } = useContext(myContext);
  const [task, setTask] = useState('');

  const sendNewTask = async () => {
    await api.post('/newTask', { header: { authorization: token } }, task);
  };

  const handleClick = async () => {
    try {
      const existTask = task.length > 0;
      if (!existTask) {
        setTextModal(ERROR_TASK);
        return setModal(true);
      }

      return await sendNewTask();
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
