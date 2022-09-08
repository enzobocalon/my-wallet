import React from "react";
import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";

interface IProps {
  handleModal: () => void;
}

const AddTransaction = ({ handleModal }: IProps) => {
  return (
    <S.BlackOutLayer>
      <S.Container>
        <S.Header>
          <h1>New Transaction</h1>
          <AiOutlineClose onClick={handleModal} />
        </S.Header>
        <S.FormContainer>
            <S.FormField>
                <span>Title</span>
                <input placeholder='Electricity Bill' type='text'/>
            </S.FormField>
            <S.FormField style={{display: "flex", flexDirection: "column", alignItems: "flex-start", gap: ".5rem"}}>
                <span>Transaction Type</span>
                    <S.RadioButtons><input type='radio' name='type'/> <span>Incoming</span></S.RadioButtons>
                    <S.RadioButtons><input type='radio' name='type'/> <span>Bill</span></S.RadioButtons>
                    <S.RadioButtons><input type='radio' name='type'/> <span>Food</span></S.RadioButtons>
                    <S.RadioButtons><input type='radio' name='type'/> <span>Travel</span></S.RadioButtons>
                    <S.RadioButtons><input type='radio' name='type'/> <span>Entertainment</span></S.RadioButtons>
            </S.FormField>
            <S.FormField>
                <span>Value</span>
                <input placeholder="2000" type='text'/>
            </S.FormField>
            <S.FormField>
                <span>Counts towards your credit card limit?</span>
                <input type='checkbox'/>
            </S.FormField>
            <S.FormField>
                <span>Counts towards your balance?</span>
                <input type='checkbox'/>
            </S.FormField>
        </S.FormContainer>
      </S.Container>
    </S.BlackOutLayer>
  );
};

export default AddTransaction;
