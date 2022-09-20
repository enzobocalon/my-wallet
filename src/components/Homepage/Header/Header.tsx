import React, {FC, useContext} from 'react'
import {Link} from 'react-router-dom'
import * as S from './styles'
import logo from '../../../assets/logo.svg'
import { BiLogOut } from 'react-icons/bi'
import placeholderprofile from '../../../assets/placeholderprofile.jpg'
import { AuthContext } from "../../../context/AuthContext"

const Header:FC = () => {
    const { user, handleLogout } = useContext(AuthContext)
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

    {
        user ?
        (<S.HeaderSecondCol style={{"gap":"1rem"}}>
            <img src={placeholderprofile} />
            <S.AlreadyLoggedIn>
                <span>Welcome back, {user.displayName}</span>

                <div>
                <Link to='/dashboard'>
                    <button id="dashboard">Dashboard</button>
                </Link>
                    <BiLogOut style={{"cursor":"pointer"}} onClick={handleLogout}/>
                </div>
            </S.AlreadyLoggedIn>
        </S.HeaderSecondCol>)
        :
        (<S.HeaderSecondCol>
            <Link to = '/login'>
                <S.LoginButton>Login</S.LoginButton>
            </Link>
            <Link to = '/register'>
                <button>Register</button>
            </Link>
        </S.HeaderSecondCol>)

    }
    </S.HeaderWrapper>
    
  )
}

export default Header