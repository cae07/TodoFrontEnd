import React from 'react';

function LoginForm() {
  return (
    <div>
      <h1>LOGIN</h1>
      <form>
        <label htmlFor="email-input">
          <input
            type="text"
            id="email-input"
            placeholder="insira seu e-mail"
          />
        </label>
        <label htmlFor="password-input">
          <input
            type="password"
            id="password-input"
            placeholder="insira sua senha"
          />
        </label>
        <button
          type="button"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}

export default LoginForm;