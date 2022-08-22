import React from 'react';
import { GlobalStyle } from './styles/global';
import {Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element = {<Homepage/>} />
      <Route path='/login' element={<Login />} />
      <Route path ='/register' element={<Register />} />
    </Routes>
    <GlobalStyle />
    </>
  );
}

export default App;
