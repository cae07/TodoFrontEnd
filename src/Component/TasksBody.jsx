import React, { useContext, useEffect, useState } from 'react';
import myContext from '../Context/myContext';
import api from '../api';

function TasksBody() {
  const { token } = useContext(myContext);
  const [tasks, setTasks] = useState([]);
  console.log(tasks);

  useEffect(() => {
    api.get('/tasks', { headers: { authorization: token } })
      .then((response) => setTasks(response));
  }, []);

  return (
    <table>
    <tr>
      <td>TAREFA</td>
      <td>STATUS</td>
      <td>
        <button type="button">
          Atualizar
        </button>
        <button type="button">
          Deletar
        </button>
      </td>
      <td></td>
    </tr>
    {/* {tasks.map((task) => (
      <tr key={ task.id }>
        <td>{ task.}</td>
        <td></td>
        <td></td>
      </tr>
    ))} */}
    </table>
  );
}

export default TasksBody;
