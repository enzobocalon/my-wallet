import { useContext, useEffect } from "react";
import * as S from "./style";

import { DBContext } from "../../../../context/DBContext";
import Transaction from "../Transaction/Transaction";
import { DocumentData } from "firebase/firestore";

const Transactions = () => {
  const { getTransactions, userTransactions } = useContext(DBContext);

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return (
    <S.TransactionContainer>
      {userTransactions
        ? userTransactions.slice(0, 4).map((doc: DocumentData) => {
            return <Transaction docs={doc} key={doc.id} />;
          })
        : ""}
    </S.TransactionContainer>
  );
};

export default Transactions;
