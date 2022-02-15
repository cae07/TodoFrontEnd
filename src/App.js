import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, CreateNewUser } from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/createUser" element={ <CreateNewUser /> } />
    </Routes>
  );
}

export default App;
