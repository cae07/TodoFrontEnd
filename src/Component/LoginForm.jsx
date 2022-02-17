import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import myContext from '../Context/myContext';
import { AlertModal } from './Modal';
import { Tabs, Tab, Form, Button } from 'react-bootstrap';
import { validateFields } from './helpers';
import api from "../api";
import {
  ERROR_FIELD,
  ERROR_EMAIL,
  ERROR_PASSWORD,
  INTERNAL_ERROR,
} from '../Dictionary/errorMessages';

function LoginForm() {
  const {
    setModal,
    setTextModal,
    setToken,
    email,
    setEmail,
    password,
    setPassword
  } = useContext(myContext);
  const navigate = useNavigate();

  const validateErrors = (error) => {
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

  const logUser = async (user) => {
    const { data } = await api.post('/login', user);
    setToken(data.token);
    navigate('/tasks');
  };

  const logNewUser = async (user) => {
    const { data } = await api.post('/createUser', user);
    setToken(data.token);
    navigate('/tasks');
  };

  const handleClick = async (event) => {
    try {
      const isValid = validateFields(email, password);
      if (isValid !== 'readyToGo') return validateErrors(isValid)
  
      const user = { email, password };
      if (event === 'login') return await logUser(user);
  
      return await logNewUser(user);      
    } catch (error) {
      setTextModal(INTERNAL_ERROR);
      setModal(true);
    }
  };

  return (
    <div className="login-container">
      <AlertModal />
      <Tabs defaultActiveKey="Login" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="Login" title="Login">
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control 
                type="email"
                placeholder="insira seu e-mail"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
                data-testid="input-email"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control
                type="password"
                placeholder="insira sua senha"
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
                data-testid="input-password"
              />
            </Form.Group>
            <Button
              type="button"
              onClick={ () => handleClick('login') }
              className="button-login"
            >
              Entrar
            </Button>
          </Form>
        </Tab>
        <Tab eventKey="Cadastro" title="Cadastro">
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmailtwo">
          <Form.Control
                type="email"
                placeholder="insira seu e-mail"
                value={ email }
                onChange={ (e) => setEmail(e.target.value) }
              />
              <Form.Text className="text-muted">
                email precisa ser válido.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPasswordtwo">
            <Form.Control
                type="password"
                placeholder="insira sua senha"
                value={ password }
                onChange={ (e) => setPassword(e.target.value) }
              />
              <Form.Text className="text-muted">
                minimo de 6 digitos.
              </Form.Text>
            </Form.Group>
            <Button
              type="button"
              onClick={ () => handleClick('create') }
              className="button-login"
            >
              Entrar
            </Button>
          </Form>
        </Tab>
      </Tabs>
    </div>
  );
}

export default LoginForm;