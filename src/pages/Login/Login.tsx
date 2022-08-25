import React from 'react'
import Header from '../../components/Homepage/Header/Header'
import LoginCard from '../../components/Homepage/LoginCard/LoginCard'
import { LoginPage } from './style'

const Login = () => {
  return (
    <>
      <Header />
      <LoginCard />
      <LoginPage />
    </>
  )
}

export default Login