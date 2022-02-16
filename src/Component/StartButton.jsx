import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import api from "../api";
import { validateFields } from './helpers';
import myContext from '../Context/myContext';
import {
  ERROR_FIELD,
  ERROR_EMAIL,
  ERROR_PASSWORD,
  INTERNAL_ERROR,
} from '../Dictionary/errorMessages';

function StartButton() {
  const {
    email,
    password,
    setModal,
    setTextModal,
    setToken,
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

  const handleClick = async () => {
    try {
      const isValid = validateFields(email, password);
      if (isValid !== 'readyToGo') return validateErrors(isValid);
  
      const user = { email, password };
      await logUser(user);      
    } catch (error) {
      setTextModal(INTERNAL_ERROR);
      setModal(true);
    }
  };

  return (
    <button
      type="button"
      onClick={ handleClick }
    >
      Entrar
    </button>
  );
}

export default StartButton;
