import React from 'react'
import * as S from './style'
import {MdEmail, MdPassword} from 'react-icons/md'

const LoginCard = () => {
  return (
    <S.LoginWrapper>
        <S.Card>
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
                    <input />
                </div>
            </S.InputFields>
            <S.InputFields>
                <span>Your password:</span>
                <div>
                    <MdPassword size={25}/>
                    <input />
                </div>    
            </S.InputFields>

            <S.RememberMeDiv>
                <div>
                    <input type='checkbox'/> <span>Remember me!</span>
                </div>
                <span>Forgot your password?</span>
            </S.RememberMeDiv>

            <S.LoginButton>
                Login!
            </S.LoginButton>

            <S.RegisterDiv>
                Don't have an account yet? Register now!
            </S.RegisterDiv>

        </S.Card>
    </S.LoginWrapper>
  )
}

export default LoginCard