import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../Context/myContext';
import api from "../api";
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { validateFields } from './helpers';

function LoginForm() {
  const { modal, textModal, setModal, setTextModal, setToken } = useContext(myContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const ERROR_FIELD = 'Todos os campos precisam ser preenchidos.';
  const ERROR_EMAIL = 'Necessário email válido.';
  const ERROR_PASSWORD = 'O password deve ter no mínimo 6 dígitos.';

  const validateErrors = (error) => {
    console.log('entrou no erro');
    switch (error) {
      case 'errorFields':
        setTextModal(ERROR_FIELD);
        setModal(true);
        break;
      case 'errorEmail':
        setTextModal(ERROR_EMAIL);
        setModal(true);
        break;
      case 'errorPassword':
        setTextModal(ERROR_PASSWORD);
        setModal(true);
      break;
      default:
        break;
    }
  };

  const handleClick = async () => {
    try {
      const isValid = validateFields(email, password);
      console.log(isValid);
      if (isValid !== 'readyToGo') return validateErrors(isValid);
      console.log('pronto pra logar');

      const user = { email, password };
      const { data } = await api.post('/login', user);
      setToken(data.token);
      navigate('/tasks');
    } catch (error) {
      console.log(error);
      alert(error)
    }
    
  };

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