import React, {useContext} from 'react'
import * as S from './style'

import {AiOutlineClose} from "react-icons/ai"
import { DocumentData } from 'firebase/firestore';
import { DBContext } from '../../../../context/DBContext';

interface IProps {
    handleModal: () => void;
    transactionID: string
  }

const DeleteModule = ({handleModal, transactionID}: IProps) => {
    const {deleteTransaction} = useContext(DBContext);
  return (
    <S.BlackOutLayer onClick={handleModal}>
        <S.Container onClick={(e) => e.stopPropagation()}>
            <S.ContainerRow>
                <h1>Are you sure you want to delete this transaction?</h1>
                <AiOutlineClose size={20} onClick={handleModal}/>
            </S.ContainerRow>
            <S.ContainerRow>
                <S.ButtonConfirm onClick={() => {
                  deleteTransaction(transactionID)
                  handleModal()
                }}>Yes, delete now</S.ButtonConfirm>
                <S.ButtonDeny onClick={handleModal}>No, thanks.</S.ButtonDeny>
            </S.ContainerRow>
        </S.Container>
    </S.BlackOutLayer>
  )
}

export default DeleteModule