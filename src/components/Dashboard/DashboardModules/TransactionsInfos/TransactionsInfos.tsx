import React from 'react'
import * as S from './style'

import { LinearProgress } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'

import {MdMoreVert} from 'react-icons/md'

const TransactionsInfos = () => {
  return (
    <>
    <S.Container>
        <S.FirstRow>
            <S.CCLimit>
                <S.CCLimitHeader>
                  <h1>Monthly credit card limit</h1>
                  <MdMoreVert size={20}/>

                  {/* CHANGE LIMIT MENU */}
                </S.CCLimitHeader>
                <Tooltip title={"10%"} placement="bottom">
                  <LinearProgress variant="determinate" value={10} color={'inherit'} sx={{background: '#7A4CB3', padding: "0.3rem 0", borderRadius: '10px'}}/>
                </Tooltip>
                <div>
                  <span>0%</span>
                  <span>100%</span>
                </div>
            </S.CCLimit>
          
        </S.FirstRow>

    </S.Container>
    <S.Container style={{"marginTop":"1rem"}}>
      <S.TransactionsHeader>
        <h1>Latest Transactions</h1>
      </S.TransactionsHeader>
    </S.Container>
    </>
  )
}

export default TransactionsInfos