import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Login, Tasks, Loading } from './Pages';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Login /> } />
      <Route path="/tasks" element={ <Tasks /> } />
      <Route path="/loading" element={ <Loading /> } />
    </Routes>
  );
}

export default App;
