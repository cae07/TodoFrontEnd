import React, { useContext, useEffect, useState } from 'react';
import myContext from '../Context/myContext';
import api from '../api';

function TasksBody() {
  const { token } = useContext(myContext);
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    // pag pesquisa: 'https://qastack.com.br/programming/40988238/sending-the-bearer-token-with-axios';
    api.get('/tasks', { headers: { authorization: token } })
    .then((response) => setTasks(response.data));
  }, []);
  console.log(tasks);
  
  return (
    // pag pesqisa: 'https://www.homehost.com.br/blog/criar-sites/tabela-html/'
    <table> 
      <tr>
        <td>Index</td>
        <td>TAREFA</td>
        <td>STATUS</td>
        <td>Atualizar/Deletar</td>
      </tr>
      {tasks.map((task, index) => (
        <tr key={ task.id }>
          <td>{ index + 1 }</td> {/* para não começar do valor 0 */}
          <td>{ task.task}</td>
          <td>{ task.status }</td>
          <td>
            <button type="button">
              Atualizar
            </button>
            <button type="button">
              Deletar
            </button>
          </td>
        </tr>
      ))}
    </table>
  );
}

export default TasksBody;
