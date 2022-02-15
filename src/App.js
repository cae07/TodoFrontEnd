import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, CreateNewUser, Tasks } from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/createUser" element={ <CreateNewUser /> } />
      <Route path="/tasks" element={ <Tasks /> } />
    </Routes>
  );
}

export default App;
