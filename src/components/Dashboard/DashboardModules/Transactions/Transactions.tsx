import { useContext, useEffect } from "react";
import * as S from "./style";

import { DBContext } from "../../../../context/DBContext";
import { AuthContext } from "../../../../context/UserContext";
import Transaction from "../Transaction/Transaction";
import { DocumentData } from "firebase/firestore";

const Transactions = () => {
  const { getTransactions, userTransactions } = useContext(DBContext);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getTransactions();
  }, [user]);

  return (
    <S.TransactionContainer>
      {userTransactions
        ? userTransactions.map((doc: DocumentData) => {
            return <Transaction docs={doc} key={doc.id} />;
          })
        : ""}
    </S.TransactionContainer>
  );
};

export default Transactions;
