import { createContext, useCallback, useState, useContext, useRef } from "react";
import { db } from "../services/firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  orderBy,
  DocumentData,
  updateDoc,
  doc,
  getDoc,
} from "firebase/firestore";
import { AuthContext } from "./UserContext";

interface Values {
  incoming: number;
  expenses: number;
}

type DBContextProps = {
  getTransactions: () => void;
  userTransactions: DocumentData | null;
  getValues: () => void;
  values: Values;
  getMyBalance: () => void;
  balance: DocumentData | null;
  updateLimit: (limit: string) => Promise<void>;
};

type DBProviderProps = {
  children: React.ReactNode;
};

export const DBContext = createContext({} as DBContextProps);

export function DBProvider({ children }: DBProviderProps) {
  const { user } = useContext(AuthContext);

  const transactions = collection(db, "transactions");
  const userCollections = collection(db, "users");

  const [userTransactions, setUserTransactions] = useState<DocumentData | null>(
    null
  );
  const [values, setValues] = useState<Values>({
    incoming: 0,
    expenses: 0,
  });
  const [balance, setBalance] = useState<DocumentData | null>(null);
  const checkLimit = useRef("")

  const getTransactions = useCallback(async () => {
    if (user) {
      const data = query(
        transactions,
        where("userId", "==", user.uid),
        orderBy("transactionData.date", "desc")
      );
      await getDocs(data).then((docs) => {
        setUserTransactions(docs.docs);
      });
    }
  }, [user]);

  const getValues = useCallback(() => {
    setValues({ expenses: 0, incoming: 0 });
    if (userTransactions) {
      userTransactions.map((doc: DocumentData) => {
        doc.data().type === "incoming"
          ? setValues((prev) => ({
              ...prev,
              incoming: prev.incoming + doc.data().transactionData.value,
            }))
          : setValues((prev) => ({
              ...prev,
              expenses: prev.expenses + doc.data().transactionData.value,
            }));
      });
    }
  }, [userTransactions]);

  const getMyBalance = useCallback(async () => {
    if (user) {
      const data = query(userCollections, where("userId", "==", user.uid));
      await getDocs(data).then((docs) => {
        docs.docs.map((doc) => {
          setBalance(doc.data());
        });
      });
    }
  }, [user]);

  const updateLimit = useCallback(async (limit: string) => {
    if (user){
      const data = query(userCollections, where("userId", "==", user.uid));
      await getDocs(data).then((docs) => {
       docs.docs.map((doc) => {
        checkLimit.current = doc.id;
       })
      })

      if (checkLimit.current) {
        const limitRef = doc(db, "users", checkLimit.current)
        await updateDoc(limitRef, {
          creditLimit: parseFloat(limit)
        })
      }
    }
  }, [user]);

  return (
    <DBContext.Provider
      value={{
        getTransactions,
        userTransactions,
        getValues,
        values,
        getMyBalance,
        balance,
        updateLimit,
      }}
    >
      {children}
    </DBContext.Provider>
  );
}
