import React, { useContext } from 'react';
import myContext from '../Context/myContext';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import StartButton from './StartButton';

function LoginForm() {
  const {
    modal,
    textModal,
    setModal,
    email,
    setEmail,
    password,
    setPassword
  } = useContext(myContext);

  return (
    <div>
      <h1>LOGIN</h1>
      <Modal show={ modal } onHide={ () => setModal(false) }>
          <Modal.Header closeButton>
            <Modal.Title>Erro!</Modal.Title>
          </Modal.Header>
          <Modal.Body>{ textModal }</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={ () => setModal(false) }>
              fechar
            </Button>
          </Modal.Footer>
        </Modal>
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