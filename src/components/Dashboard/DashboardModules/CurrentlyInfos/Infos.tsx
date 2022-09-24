import React, { useContext, useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import * as S from "./style";
import { DBContext } from "../../../../context/DBContext";

const Infos = () => {
  const { userTransactions, getValues, values } = useContext(DBContext);
  const navigate = useNavigate();

  const valueFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
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
          <span>Your all time incomings.</span>
        </S.CurrentInfo>
        <S.CurrentInfo>
          <h1 style={{ color: "#CE49E6" }}>
            {valueFormatter.format(values.expenses)}
          </h1>
          <span>Your all time expenses.</span>
        </S.CurrentInfo>
        <S.CurrentInfo>
          <h1 style={{ color: "#7A4CB3" }}>
            {valueFormatter.format(values.incoming - values.expenses)}
          </h1>
          <span>Your all time profit.</span>
        </S.CurrentInfo>
      </S.Infos>
      <span id="transactions" onClick={() => navigate('/transactions')}>View Transactions</span>
    </S.Container>
  );
};

export default Infos;
