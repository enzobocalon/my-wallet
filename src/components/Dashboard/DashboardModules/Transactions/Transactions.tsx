import React from 'react'
import * as S from './style'

import {MdOutlineFastfood} from 'react-icons/md'
import {FaPlane, FaMoneyBillAlt} from 'react-icons/fa'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiLuggageDepositLine} from 'react-icons/ri'

const Transactions = () => {
  return (
    <S.TransactionContainer>
    
    <S.Transaction>
        <S.TransactionLeft>
            <S.TransactionIcon type={'expenses'}>
                <FaMoneyBillAlt size={28}/>
            </S.TransactionIcon>

            <S.TransactionInfos>
                <span>Bills</span>
                <span style={{"fontSize":".8rem", "fontWeight":"200"}}>2022-08-28</span>
            </S.TransactionInfos>

        </S.TransactionLeft>
        <S.TransactionRight>
            <span>- $2,000.00</span>
        </S.TransactionRight>
    </S.Transaction>

    <S.Transaction>
        <S.TransactionLeft>
            <S.TransactionIcon type={'expenses'}>
                <FaPlane size={28}/>
            </S.TransactionIcon>

            <S.TransactionInfos>
                <span>Travel</span>
                <span style={{"fontSize":".8rem", "fontWeight":"200"}}>2022-08-27</span>
            </S.TransactionInfos>

        </S.TransactionLeft>
        <S.TransactionRight>
            <span>- $500.00</span>
        </S.TransactionRight>
    </S.Transaction>

    <S.Transaction>
        <S.TransactionLeft>
            <S.TransactionIcon type={'expenses'}>
                <IoLogoGameControllerB size={28}/>
            </S.TransactionIcon>

            <S.TransactionInfos>
                <span>Fun</span>
                <span style={{"fontSize":".8rem", "fontWeight":"200"}}>2022-08-26</span>
            </S.TransactionInfos>

        </S.TransactionLeft>
        <S.TransactionRight>
            <span>- $500.00</span>
        </S.TransactionRight>
    </S.Transaction>

    <S.Transaction>
        <S.TransactionLeft>
            <S.TransactionIcon type={'expenses'}>
                <MdOutlineFastfood size={28}/>
            </S.TransactionIcon>

            <S.TransactionInfos>
                <span>Food</span>
                <span style={{"fontSize":".8rem", "fontWeight":"200"}}>2022-08-25</span>
            </S.TransactionInfos>

        </S.TransactionLeft>
        <S.TransactionRight>
            <span>- $500.00</span>
        </S.TransactionRight>
    </S.Transaction>

    <S.Transaction>
        <S.TransactionLeft>
            <S.TransactionIcon type={'incoming'}>
                <RiLuggageDepositLine size={28}/>
            </S.TransactionIcon>

            <S.TransactionInfos>
                <span>Incoming</span>
                <span style={{"fontSize":".8rem", "fontWeight":"200"}}>2022-08-24</span>
            </S.TransactionInfos>

        </S.TransactionLeft>
        <S.TransactionRight>
            <span>+ $20,000.00</span>
        </S.TransactionRight>
    </S.Transaction>
    <S.Transaction>
        <S.TransactionLeft>
            <S.TransactionIcon type={'incoming'}>
                <RiLuggageDepositLine size={28}/>
            </S.TransactionIcon>

            <S.TransactionInfos>
                <span>Incoming</span>
                <span style={{"fontSize":".8rem", "fontWeight":"200"}}>2022-08-24</span>
            </S.TransactionInfos>

        </S.TransactionLeft>
        <S.TransactionRight>
            <span>+ $50.00</span>
        </S.TransactionRight>
    </S.Transaction>

    </S.TransactionContainer>
  )
}

export default Transactions