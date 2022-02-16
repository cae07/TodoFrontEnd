import React, { useState } from 'react';
import PropTypes from 'prop-types';
import myContext from './myContext';

function Provider({ children }) {
  const [token, setToken] = useState('');

  const [modal, setModal] = useState(false);
  const [textModal, setTextModal] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const providerValue = {
    token,
    setToken,
    modal,
    setModal,
    textModal,
    setTextModal,
    email,
    setEmail,
    password,
    setPassword,
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
