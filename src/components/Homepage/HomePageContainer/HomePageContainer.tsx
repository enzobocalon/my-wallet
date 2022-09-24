import React from 'react'
import * as S from './styles'
import {IoMdWallet} from 'react-icons/io'
import {MdOutlineMoneyOff} from 'react-icons/md'
import {AiOutlineSafety} from 'react-icons/ai'

import { Link } from 'react-router-dom'

import mainImage from '../../../assets/image.png'

const HomePageContainer = () => {
  return (
        <S.Container>    
            <S.LeftContainer>
                <h1>Control your finances for free.</h1>
                <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</span>
                <ul>
                    <li>
                        <IoMdWallet />
                        Your finances, one place.
                    </li>
                    <li>
                        <MdOutlineMoneyOff />
                        100% Free.
                    </li>
                    <li>
                        <AiOutlineSafety />
                        100% Safe.
                    </li>
                </ul>

                <Link to ='/register'>
                <button>Register now!</button>
                </Link>
            </S.LeftContainer>

            <S.RightContainer>
                <img src={mainImage}/>
            </S.RightContainer>
        </S.Container>   
  )
}

export default HomePageContainer