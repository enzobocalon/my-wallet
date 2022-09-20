import React from 'react';
import { GlobalStyle } from './styles/global';
import {Route, Routes} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import { AuthProvider } from "./context/AuthContext"
import { DBProvider } from './context/DBContext';
import TransactionsPage from './pages/TransactionsPage/TransactionsPage';
import Profile from './pages/Profile/Profile';

function App() {
  return (
  <AuthProvider>
    <DBProvider>
      <Routes>
        <Route path='/' element = {<Homepage/>} />
        <Route path='/login' element={<Login />} />
        <Route path ='/register' element={<Register />} />
        <Route path = '/dashboard' element = {<Dashboard />} />
        <Route path = '/transactions' element = {<TransactionsPage />} />
        <Route path = '/profile' element = {<Profile />} />
      </Routes>
      <GlobalStyle />
    </DBProvider>
  </AuthProvider>
  );
}

export default App;
