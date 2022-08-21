import React, {FC} from 'react'
import {Link} from 'react-router-dom'
import * as S from './styles'

const Header:FC = () => {
  return (
    <S.HeaderWrapper>

        <S.HeaderFirstCol>
            <h1>My Wallet</h1>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                </ul>
            </div>
        </S.HeaderFirstCol>

        <S.HeaderSecondCol>
            <Link to = '/login'>
                <button>Login</button>
            </Link>
            <button>Register</button>
        </S.HeaderSecondCol>

    </S.HeaderWrapper>
  )
}

export default Header