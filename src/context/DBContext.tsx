import { createContext, useCallback, useState, useContext } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, getDocs, query, where, orderBy, DocumentData } from "firebase/firestore";
import { AuthContext } from "./UserContext";

type DBContextProps = {
  getTransactions: () => void
  userTransactions: DocumentData | null
};

type DBProviderProps = {
  children: React.ReactNode;
};



export const DBContext = createContext({} as DBContextProps);

export function DBProvider({ children }: DBProviderProps) {
  const transactions = collection(db, "transactions");
  const [userTransactions, setUserTransactions] = useState<DocumentData | null>(null);

  const { user } = useContext(AuthContext);

  const getTransactions = useCallback(async () => {
    if (user) {
      const data = query(transactions, where('userId', '==', user.uid), orderBy('transactionData.date', 'desc'))
      await getDocs(data).then((docs) => {
        console.log(docs.docs)
        setUserTransactions(docs.docs)
      })
    }
  }, [user])
  
  return (
    <DBContext.Provider
      value={{
        getTransactions,
        userTransactions
      }}
    >
      {children}
    </DBContext.Provider>
  );
}
