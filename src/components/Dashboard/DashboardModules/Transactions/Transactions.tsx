import React, {useContext, useEffect} from 'react'
import * as S from './style'

import {MdOutlineFastfood} from 'react-icons/md'
import {FaPlane, FaMoneyBillAlt} from 'react-icons/fa'
import {IoLogoGameControllerB} from 'react-icons/io'
import {RiLuggageDepositLine} from 'react-icons/ri'

import { DBContext } from '../../../../context/DBContext'
import { AuthContext } from '../../../../context/UserContext'
import { DocumentData } from 'firebase/firestore'


const Transactions = () => {
    const {getTransactions, userTransactions} = useContext(DBContext)
    const {user} = useContext(AuthContext)


    useEffect(() => {
        getTransactions();
    }, [user])

  return (
    <S.TransactionContainer>
    {

        userTransactions ? 
        userTransactions.slice(0, 4).map((docs: DocumentData) => {
            const valueFormatter = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2
            })
            return (  
                    <S.Transaction>
                    <S.TransactionLeft>
                        <S.TransactionIcon type={docs.data().type === 'incoming' ? 'incoming' : 'expense'}>
                            <FaMoneyBillAlt size={28}/> {/* to be changed */}
                        </S.TransactionIcon>
            
                        <S.TransactionInfos>
                            <span>{docs.data().type[0].toUpperCase() + docs.data().type.slice(1)}</span>
                            <span style={{"fontSize":".8rem", "fontWeight":"200"}}>{docs.data().transactionData.date}</span>
                        </S.TransactionInfos>
            
                    </S.TransactionLeft>
                    <S.TransactionRight>
                        <span>{docs.data().type === 'incoming' ? '+ ' + valueFormatter.format(docs.data().transactionData.value) : '- ' + valueFormatter.format(docs.data().transactionData.value)}</span>
                    </S.TransactionRight>
                </S.Transaction>   
            )
        })
         : 
        (
            <h1>To be done!</h1>
        )

    }
    


    </S.TransactionContainer>
  )
}

export default Transactions