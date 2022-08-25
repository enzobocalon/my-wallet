import React from 'react'
import * as S from './style'

import { Link } from 'react-router-dom'

import {MdEmail, MdPassword} from 'react-icons/md'
import {AiOutlineUser} from 'react-icons/ai'

import illustration1 from '../../../assets/register.svg'
import illustration2 from '../../../assets/register2.svg'

const RegisterCard = () => {
  return (
    <S.RegisterWrapper>
        <S.RegisterDiv>
            <img src={illustration1} id='first'/>
            <img src={illustration2} id='second'/>

            <S.RegisterFields>
                <h1>Welcome to our family!</h1>
                <span>Register now to get started. Totally free!</span>

                <S.RegisterField>
                    <span>Your username</span>
                    <div>
                        <AiOutlineUser size={25}/>
                        <input type='text' placeholder='e.g: Michael'/>
                    </div>
                </S.RegisterField>

                <S.RegisterField>
                    <span>Your email</span>
                    <div>
                        <MdEmail size={25}/>
                        <input type='email' placeholder='email@email.com'/>
                    </div>
                </S.RegisterField>

                <S.RegisterField>
                    <span>Your password</span>
                    <div>
                        <MdPassword size={25}/>
                        <input type='password' placeholder='Your password here...'/>
                    </div>
                </S.RegisterField>

                <S.RegisterButton>
                    Register now!
                </S.RegisterButton>
                <S.PCustom>Already have an account? 
                    <Link to ='/login'>
                     <span> Login now!</span>
                    </Link>
                    </S.PCustom>    
            </S.RegisterFields>
        </S.RegisterDiv>
    </S.RegisterWrapper>
  )
}

export default RegisterCard