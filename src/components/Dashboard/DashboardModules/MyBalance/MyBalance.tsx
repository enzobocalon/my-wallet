import React from 'react'
import * as S from './style'
import icon from '../../../../assets/icon.svg'

const MyBalance = () => {
  return (
    <S.Container>
      <div>
        <span>Available Balance</span>
        <h1>$12,234</h1>
      </div>
      <S.CCFooter>
        <div>
          <span>****</span>
          <span>2022</span>
        </div>
        <img src={icon} />
      </S.CCFooter>
    </S.Container>
  )
}

export default MyBalance