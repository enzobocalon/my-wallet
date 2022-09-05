import React, {useContext} from 'react'
import * as S from './style'
import icon from '../../../../assets/icon.svg'
import { DBContext } from '../../../../context/DBContext'

const MyBalance = () => {
  const {} = useContext(DBContext)

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