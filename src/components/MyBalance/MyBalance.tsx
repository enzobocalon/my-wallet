import React from 'react'
import * as S from './style'

import {MdPending, MdDone} from 'react-icons/md'


const MyBalance = () => {
  return (
    <S.Container>
        <S.MyBalanceContainer>
        <h1>My Balance</h1>

            <S.BalanceContainer>
                <S.AvailableBalance>
                    <S.iconBg type='available'>
                    <MdDone/>
                    </S.iconBg>
                    <div>
                        <span id='available-balance'>Available Balance</span>
                        <span className='money'>$43,781</span>
                        <p>View Transactions</p>
                    </div>
                </S.AvailableBalance>

                <S.PendingBalance>
                    <S.iconBg type='pending'>
                        <MdPending />
                    </S.iconBg>
                    <div>
                        <span id="pending">Pending</span>
                        <span className="money">$865.00</span>
                        <p>View Transactions</p>
                    </div>
                </S.PendingBalance>
            </S.BalanceContainer>
        </S.MyBalanceContainer>

        <S.Last>
            <h1>All Time</h1>

            <div>
                <span>Number of transactions</span>
                <p>38</p>
            </div>

            <div>
                <span>Earnings</span>
                <p>$2,400</p>
            </div>
        </S.Last>

    </S.Container>
  )
}

export default MyBalance