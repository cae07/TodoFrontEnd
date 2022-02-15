import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../Context/myContext';
import api from "../api";

function CreateNewUser() {
  const { setToken } = useContext(myContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleClick = async () => {
    const newUser = { email, password };

    try {
      const { data } = await api.post('/createUser', newUser);
      setToken(data.token);
      navigate('/tasks');
    } catch (error) {
      alert(error.message)
    }
  };

  return (
    <div>
        <h1>Faça seu cadastro</h1>
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
      </form>
    </div>
  );
}

export default CreateNewUser;
