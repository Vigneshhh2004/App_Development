import React from 'react';
import Login from './Component/Login.jsx';
import Register from './Component/Register.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>
       </BrowserRouter>
  );
}

export default App;
