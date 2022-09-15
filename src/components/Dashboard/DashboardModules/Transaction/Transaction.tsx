import React from "react";
import * as S from "./style";

import { MdOutlineFastfood } from "react-icons/md";
import { FaPlane, FaMoneyBillAlt } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { RiLuggageDepositLine } from "react-icons/ri";
import { AiFillDelete } from "react-icons/ai"

import { DocumentData } from "firebase/firestore";

interface IProps {
  docs: DocumentData;
}

const valueFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const Transaction = ({ docs }: IProps) => {
  return (
    <>
      <S.Transaction>
        <S.TransactionLeft>
          <S.TransactionIcon
            type={docs.data().type === "incoming" ? "incoming" : "expense"}
          >
            {docs.data().type === "incoming" ? (
              <RiLuggageDepositLine size={28} />
            ) : docs.data().type === "bills" ? (
              <FaMoneyBillAlt size={28} />
            ) : docs.data().type === "travel" ? (
              <FaPlane size={28} />
            ) : docs.data().type === "food" ? (
              <MdOutlineFastfood size={28} />
            ) : (
              <IoLogoGameControllerB size={28} />
            )}
          </S.TransactionIcon>

          <S.TransactionInfos>
            <span>
              {docs.data().name[0].toUpperCase() + docs.data().name.slice(1)}
            </span>
            <span style={{fontSize:".9rem", fontWeight: "200"}}>
            {docs.data().type[0].toUpperCase() + docs.data().type.slice(1)}
            </span>
            <span style={{ fontSize: ".8rem", fontWeight: "200" }}>
              {docs.data().transactionData.date}
            </span>
          </S.TransactionInfos>
        </S.TransactionLeft>
        <S.TransactionRight>
          <span>
            {docs.data().type === "incoming"
              ? "+ " + valueFormatter.format(docs.data().transactionData.value)
              : "- " + valueFormatter.format(docs.data().transactionData.value)}
          </span>
          <AiFillDelete id="delete"/>
        </S.TransactionRight>
      </S.Transaction>
    </>
  );
};

export default Transaction;
