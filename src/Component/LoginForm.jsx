import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import { StartButton } from './index';
import { AlertModal } from './Modal';

function LoginForm() {
  const {
    email,
    setEmail,
    password,
    setPassword
  } = useContext(myContext);

  return (
    <div>
      <h1>LOGIN</h1>
      <AlertModal />
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
        <StartButton value={ email, password } />
        <span>Ainda não tem registro?</span>
        <a href="/createUser">Faça seu registro</a>
      </form>
    </div>
  );
}

export default LoginForm;