import React, { FC, useRef, useContext, useState } from 'react'
import * as S from './style'
import {MdEmail, MdPassword} from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../../context/AuthContext"

import { Snackbar } from "@mui/material";

const LoginCard: FC = () => { 
    const { handleLogin, setRegistered, loggedIn, setLoggedIn } = useContext(AuthContext)
    setRegistered(false);
    
    const email= useRef<HTMLInputElement | null>(null);
    const password = useRef<HTMLInputElement | null>(null);
    const rememberMe = useRef<HTMLInputElement | null >(null);

    const navigate = useNavigate();

   const handleClickButton = () => {
        if (email.current?.value && password.current?.value) {
            handleLogin(email.current.value, password.current.value, rememberMe.current!.checked)
        }
   }

   const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
        handleClickButton();
    }
  };

  return (
    <S.LoginWrapper>
        <S.Card onKeyDown={(e) => handleEnter(e)}>
            <S.HeaderDiv>
                <h1>Nice to see you again!</h1>
                <span>Login to access your account.</span>
            </S.HeaderDiv>

            <S.InputFields>
                <span>
                    Your email:
                </span>
                <div>
                    <MdEmail size={25}/>
                    <input placeholder='Insert your email here...' ref={email} type='email'/>
                </div>
            </S.InputFields>
            <S.InputFields>
                <span>Your password:</span>
                <div>
                    <MdPassword size={25}/>
                    <input placeholder='Insert your password here...' ref={password} type='password'/>
                </div>    
                <S.Error>{loggedIn === false ? 'User or password wrong.' : ''}</S.Error>
            </S.InputFields>

            <S.RememberMeDiv>
                <div>
                    <input type='checkbox' ref={rememberMe}/> <span>Remember me!</span>
                </div>
                <span>Forgot your password?</span>
            </S.RememberMeDiv>

            <S.LoginButton onClick = {handleClickButton}>
                Login!
            </S.LoginButton>

            <S.RegisterDiv>
                Don't have an account yet? 
                <Link to='/register'>
                    <span> Register now!</span>
                </Link>
            </S.RegisterDiv>
        </S.Card>
        <Snackbar
          open={loggedIn!}
          onClose={() => {
            navigate('/dashboard')
            setLoggedIn(null);
          }}
          autoHideDuration={1000}
          message={"Logged in. Redirecting..."}
        />
    </S.LoginWrapper>
  )
}

export default LoginCard