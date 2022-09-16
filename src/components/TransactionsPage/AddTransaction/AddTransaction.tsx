import React, { useState, useContext, useRef } from "react";
import * as S from "./style";
import { AiOutlineClose } from "react-icons/ai";
import { DBContext } from "../../../context/DBContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface IProps {
  handleModal: () => void;
}

const AddTransaction = ({ handleModal }: IProps) => {
  const { addTransaction } = useContext(DBContext);

  const [renderQuestion, setRenderQuestion] = useState<boolean>(false);
  const [type, setType] = useState<string | null>(null);
  const [date, setDate] = useState(new Date());
  const titleRef = useRef<HTMLInputElement | null>(null);
  const valueRef = useRef<HTMLInputElement | null>(null);
  const balanceRef = useRef<HTMLInputElement | null>(null);
  const limitRef = useRef<HTMLInputElement | null>(null);


  const handleSubmit = () => {
    if (titleRef.current?.value && valueRef.current?.value && type) {
      if (type === "incoming") {
        addTransaction(
          titleRef.current.value,
          type,
          parseFloat(valueRef.current.value),
          false,
          true,
          date
        );
      } else {
        addTransaction(
          titleRef.current.value,
          type,
          parseFloat(valueRef.current.value),
          limitRef.current!.checked,
          balanceRef.current!.checked,
          date
        );
      }

      handleModal();

    }
  };

  return (
    <S.BlackOutLayer onClick={handleModal}>
      <S.Container onClick={(e) => e.stopPropagation()}>
        <S.Header>
          <h1>New Transaction</h1>
          <AiOutlineClose onClick={handleModal} />
        </S.Header>
        <S.FormContainer>
          <S.FormField>
            <span>Title</span>
            <input placeholder="Electricity Bill" type="text" ref={titleRef} />
          </S.FormField>
          <S.FormField
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: ".5rem",
            }}
          >
            <span>Transaction Type</span>
            <S.RadioButtons>
              <input
                type="radio"
                name="type"
                onClick={() => {
                  setRenderQuestion(false);
                  setType("incoming");
                }}
              />{" "}
              <span>Incoming</span>
            </S.RadioButtons>
            <S.RadioButtons>
              <input
                type="radio"
                name="type"
                onClick={() => {
                  setRenderQuestion(true);
                  setType("bills");
                }}
              />{" "}
              <span>Bill</span>
            </S.RadioButtons>
            <S.RadioButtons>
              <input
                type="radio"
                name="type"
                onClick={() => {
                  setRenderQuestion(true);
                  setType("food");
                }}
              />{" "}
              <span>Food</span>
            </S.RadioButtons>
            <S.RadioButtons>
              <input
                type="radio"
                name="type"
                onClick={() => {
                  setRenderQuestion(true);
                  setType("travel");
                }}
              />{" "}
              <span>Travel</span>
            </S.RadioButtons>
            <S.RadioButtons>
              <input
                type="radio"
                name="type"
                onClick={() => {
                  setRenderQuestion(true);
                  setType("entertainment");
                }}
              />{" "}
              <span>Entertainment</span>
            </S.RadioButtons>
          </S.FormField>
          <S.FormField>
            <span>Date</span>
            <div>
              <S.Calendar>
                <DatePicker
                  selected={date}
                  dateFormat="yyyy-MM-dd"
                  onChange={(date: Date) => setDate(date)}
                />
              </S.Calendar>
            </div>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <span>Value</span>
              <input placeholder="2000" type="text" ref={valueRef} />
            </div>
          </S.FormField>
          {renderQuestion ? (
            <S.FormField>
              <span>Counts towards your credit card limit?</span>
              <input type="checkbox" ref={limitRef} />
            </S.FormField>
          ) : (
            ""
          )}
          <S.FormField>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>Counts towards your balance?</span>
              <span style={{ fontSize: ".6rem" }}>
                Incomings will ALWAYS counts towards your balance.
              </span>
            </div>
            <input type="checkbox" ref={balanceRef} />
          </S.FormField>

          <S.AddTransactionButton onClick={handleSubmit}>
            Add Transaction
          </S.AddTransactionButton>
        </S.FormContainer>
      </S.Container>
    </S.BlackOutLayer>
  );
};

export default AddTransaction;
