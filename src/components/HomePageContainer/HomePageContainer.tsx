import React from 'react'
import * as S from './styles'
import {IoMdWallet} from 'react-icons/io'
import {MdOutlineMoneyOff} from 'react-icons/md'
import {AiOutlineSafety} from 'react-icons/ai'

import mainImage from '../../assets/image.png'


const HomePageContainer = () => {
  return (
    <S.Container>    
        <S.LeftContainer>
            <h1>Control your finances for free.</h1>
            <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio quisquam quae facilis, esse autem natus sunt corporis dolorum accusamus nobis architecto vel, aliquid quod provident aperiam eius. In, laborum enim.</span>
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

            <button>Register now!</button>
        </S.LeftContainer>

        <S.RightContainer>
            <img src={mainImage}/>
        </S.RightContainer>
    </S.Container>
  )
}

export default HomePageContainer