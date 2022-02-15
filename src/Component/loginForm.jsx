import React, { useState } from 'react';
import api from "../api";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleClick = async () => {
    const data = { email, password };

    try {
      const token = await api.post('/login', data);
      console.log(token);
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
        <a href="/createUser">Faça seu registro</a>
      </form>
    </div>
  );
}

export default LoginForm;