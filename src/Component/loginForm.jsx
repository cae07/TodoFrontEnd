import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../Context/myContext';
import api from "../api";

function LoginForm() {
  const { setToken } = useContext(myContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    const user = { email, password };

    try {
      const { data } = await api.post('/login', user);
      setToken(data.token);
      navigate('/tasks');
    } catch (error) {
      console.log(error);
      alert('Erro interno, tente atualizar a página.')
    }
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <form>
        <label htmlFor="email-input">
          <input
            type="text"
            id="email-input"
            placeholder="insira seu e-mail"
            value={ email }
            onChange={ (e) => setEmail(e.target.value) }
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            id="password-input"
            placeholder="insira sua senha"
            value={ password }
            onChange={ (e) => setPassword(e.target.value) }
          />
        </label>
        <button
          type="button"
          onClick={ handleClick }
        >
          Entrar
        </button>
        <span>Ainda não tem registro?</span>
        <a href="/createUser">Faça seu registro</a>
      </form>
    </div>
  );
}

export default LoginForm;