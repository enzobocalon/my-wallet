import React from 'react'
import * as S from './style'

const MyBalance = () => {
  return (
    <S.Container>
        <S.ContainerRow>
          <span>Your Balance</span>
        </S.ContainerRow>
        <S.ContainerRow>
          <p>$1200.00</p>
        </S.ContainerRow>
        <S.ContainerRow>
          <S.ButtonAdd>Add transaction</S.ButtonAdd>
          <S.ButtonCheck>See transactions</S.ButtonCheck>
        </S.ContainerRow>
    </S.Container>
  )
}

export default MyBalance