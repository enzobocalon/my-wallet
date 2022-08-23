import React from 'react'
import * as S from './style'

import {HiOutlineCurrencyDollar} from 'react-icons/hi'

const QuickAddCard = () => {
  return (
    <S.Container>
        <h1>Add transactions</h1>

        <S.AddContainer>
            <p>Choose the type of transaction!</p>
            <div>
                <span><input type='radio' name='option'/>Earnings</span>
                <span><input type='radio' name='option'/>Costs</span>
            </div>

            <p>Amount</p>
            <S.inputField>
                <HiOutlineCurrencyDollar size={28}/>
                <input type='text'/>
            </S.inputField>
            <button>Add</button>
        </S.AddContainer>
    </S.Container>
  )
}

export default QuickAddCard