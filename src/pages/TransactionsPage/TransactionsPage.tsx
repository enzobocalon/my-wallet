import React from 'react'
import TransactionsContent from '../../components/TransactionsPage/TransactionsContent/TransactionsContent'
import { GlobalTransactionStyle } from './style'

const TransactionsPage = () => {
  return (
    <>
      <TransactionsContent />
      <GlobalTransactionStyle />
    </>
  )
}

export default TransactionsPage