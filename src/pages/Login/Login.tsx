import React from 'react'
import Header from '../../components/Header/Header'
import LoginCard from '../../components/LoginCard/LoginCard'
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