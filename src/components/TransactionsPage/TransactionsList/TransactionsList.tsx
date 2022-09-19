import React, { useContext, useEffect } from "react";
import { DBContext } from "../../../context/DBContext";
import Transaction from "../../Dashboard/DashboardModules/Transaction/Transaction";
import { DocumentData } from "firebase/firestore";

import * as S from "./style";

const TransactionsList = () => {
  const { getTransactions, filteredTransactions } =
    useContext(DBContext);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <S.Container>
      {filteredTransactions
        ? filteredTransactions.map((doc: DocumentData) => {
            return <Transaction docs={doc} key={doc.id} />;
          })
        : ""}
    </S.Container>
  );
};

export default TransactionsList;
