import React from 'react'
import * as S from './style'

const Infos = () => {
  return (
    <S.Container>

        <h1 style={{"fontSize":"1.4rem"}}>Overview</h1>
      <S.Infos style={{"marginTop":".7rem"}}>
        <S.CurrentInfo>
          <h1 style={{"color":"#FF3AF9"}}>$20,000.00</h1>
          <span>This month's incomings</span>
        </S.CurrentInfo>
        <S.CurrentInfo>
          <h1 style={{"color":"#CE49E6"}}>$5,000.00</h1>
          <span>This month's expenses</span>
        </S.CurrentInfo>
        <S.CurrentInfo>
          <h1 style={{"color":"#7A4CB3"}}>$15,000.00</h1>
          <span>This month's profit</span>
        </S.CurrentInfo>
      </S.Infos>
      <span id='transactions'>View Transactions</span>
    </S.Container>
  )
}

export default Infos

