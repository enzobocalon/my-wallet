import React, {useContext, useEffect} from 'react'
import { DBContext } from '../../../context/DBContext'
import Transaction from '../../Dashboard/DashboardModules/Transaction/Transaction'
import { DocumentData } from "firebase/firestore";

import * as S from './style'

const TransactionsList = () => {
    const {getTransactions, userTransactions} = useContext(DBContext)

    useEffect(() => {
        getTransactions();
      }, [getTransactions]);
    
  return (
    <S.Container>
        {userTransactions
        ? userTransactions.map((doc: DocumentData) => {
            return <Transaction docs={doc} key={doc.id} />;
          })
        : ""}
    </S.Container>
  )
}

export default TransactionsList