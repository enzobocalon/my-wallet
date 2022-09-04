import { createContext, useCallback, useState, useContext } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, getDocs, query, where, DocumentData } from "firebase/firestore";
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
      const data = query(transactions, where('userId', '==', user.uid))
      await getDocs(data).then((docs) => {
        setUserTransactions(docs.docs)
      })
    }
  }, [user])
  
  userTransactions?.map((doc: DocumentData) => {
    console.log(doc.data())
  })
  
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
