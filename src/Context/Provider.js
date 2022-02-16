import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
  const [token, setToken] = useState('');

  const [modal, setModal] = useState(false);
  const [textModal, setTextModal] = useState('');
  const [modalToUpdate, setModalToUpdate] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [toUpdateTask, setToUpdateTask] = useState('')
  const [toUpdateState, setToUpdateState] = useState('')
  const [idToUpdate, setIDToUpdate] = useState('');

  const providerValue = {
    token,
    setToken,
    modal,
    setModal,
    textModal,
    setTextModal,
    modalToUpdate,
    setModalToUpdate,
    email,
    setEmail,
    password,
    setPassword,
    toUpdateTask,
    setToUpdateTask,
    toUpdateState,
    setToUpdateState,
    idToUpdate,
    setIDToUpdate,
  };

  return (
    <myContext.Provider value={ providerValue }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
