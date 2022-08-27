import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import * as S from './styles'
import logo from '../../../assets/logo.svg'

const Header:FC = () => {
  return (
    <S.HeaderWrapper>

        <S.HeaderFirstCol>
            <img src={logo} />
            <div>
                <ul>
                    <Link to ='/'>
                        <li>Home</li>
                    </Link>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </S.HeaderFirstCol>

        <S.HeaderSecondCol>
            <Link to = '/login'>
                <S.LoginButton>Login</S.LoginButton>
            </Link>
            <Link to = '/register'>
                <button>Register</button>
            </Link>
        </S.HeaderSecondCol>

    </S.HeaderWrapper>
  )
}

export default Header