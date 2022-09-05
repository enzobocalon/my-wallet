import React, { useContext, useEffect, useState } from "react";
import * as S from "./style";
import { DBContext } from "../../../../context/DBContext";
import { DocumentData } from "firebase/firestore";

const Infos = () => {
  const { userTransactions, getValues, values } = useContext(DBContext);

  const valueFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  useEffect(() => {
    getValues();
  }, [userTransactions]);
  return (
    <S.Container>
      <h1 style={{ fontSize: "1.4rem" }}>Overview</h1>
      <S.Infos style={{ marginTop: ".7rem" }}>
        <S.CurrentInfo>
          <h1 style={{ color: "#FF3AF9" }}>
            {valueFormatter.format(values.incoming)}
          </h1>
          <span>This month's incomings</span>
        </S.CurrentInfo>
        <S.CurrentInfo>
          <h1 style={{ color: "#CE49E6" }}>
            {valueFormatter.format(values.expenses)}
          </h1>
          <span>This month's expenses</span>
        </S.CurrentInfo>
        <S.CurrentInfo>
          <h1 style={{ color: "#7A4CB3" }}>
            {valueFormatter.format(values.incoming - values.expenses)}
          </h1>
          <span>This month's profit</span>
        </S.CurrentInfo>
      </S.Infos>
      <span id="transactions">View Transactions</span>
    </S.Container>
  );
};

export default Infos;
