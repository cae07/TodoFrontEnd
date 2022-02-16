import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import StartButton from '../Component/StartButton';

function CreateNewUser() {
  const { password, setPassword, email, setEmail } = useContext(myContext);

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
          <StartButton />
      </form>
    </div>
  );
}

export default CreateNewUser;
