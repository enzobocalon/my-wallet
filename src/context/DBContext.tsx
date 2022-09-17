import {
  createContext,
  useCallback,
  useState,
  useContext,
  useRef,
} from "react";
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
  deleteDoc,
} from "firebase/firestore";
import { AuthContext } from "./UserContext";

interface Values {
  incoming: number;
  expenses: number;
}

type DBContextProps = {
  getTransactions: () => void;
  userTransactions: DocumentData | null;
  filteredTransactions: DocumentData | null;
  getValues: () => void;
  values: Values;
  getMyBalance: () => void;
  balance: DocumentData | null;
  updateLimit: (limit: string) => Promise<void>;
  addTransaction: (
    name: string,
    type: string,
    value: number,
    limit: boolean,
    balance: boolean,
    date: Date
  ) => void;
  deleteTransaction: (id: string) => void;
  getLimit: () => void;
  limitDisplay: number;
  usage: number;
  filterTransactions: (option: string) => void;
};

type DBProviderProps = {
  children: React.ReactNode;
};

export const DBContext = createContext({} as DBContextProps);

export function DBProvider({ children }: DBProviderProps) {
  const { user } = useContext(AuthContext);

  const transactions = collection(db, "transactions");
  const userCollections = collection(db, "users");

  const [limitDisplay, setLimitDisplay] = useState(0);

  const [userTransactions, setUserTransactions] = useState<DocumentData | null>(
    null
  );
  const [filteredTransactions, setFilteredTransactions] =
    useState<DocumentData | null>(null);
  const [values, setValues] = useState<Values>({
    incoming: 0,
    expenses: 0,
  });
  const [balance, setBalance] = useState<DocumentData | null>(null);
  const checkLimit = useRef({ id: "", balance: 0 });

  const [usage, setUsage] = useState(0);

  const getTransactions = useCallback(async () => {
    if (user) {
      const data = query(
        transactions,
        where("userId", "==", user.uid),
        orderBy("transactionData.date", "desc")
      );
      await getDocs(data).then((docs) => {
        setUserTransactions(docs.docs);
        setFilteredTransactions(docs.docs);
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
      setBalance(null);
      const data = query(userCollections, where("userId", "==", user.uid));
      await getDocs(data).then((docs) => {
        docs.docs.map((doc) => {
          setBalance(doc.data());
        });
      });
    }
  }, [user]);

  const updateLimit = useCallback(
    async (limit: string) => {
      if (user) {
        const data = query(userCollections, where("userId", "==", user.uid));
        await getDocs(data).then((docs) => {
          docs.docs.map((doc) => {
            checkLimit.current.id = doc.id;
          });
        });

        if (checkLimit.current) {
          const limitRef = doc(db, "users", checkLimit.current.id);
          await updateDoc(limitRef, {
            creditLimit: parseFloat(limit),
          });
        }
      }
    },
    [user]
  );

  const getLimit = useCallback(async () => {
    let sum = 0;
    let limitX = 0;
    setUsage(0);
    if (user) {
      const data = query(userCollections, where("userId", "==", user.uid));
      await getDocs(data).then((docs) => {
        docs.docs.map((doc) => {
          setLimitDisplay(doc.data().creditLimit);
          limitX = doc.data().creditLimit;
        });
        if (userTransactions) {
          userTransactions.map((transaction: DocumentData) => {
            console.log(transaction.data());
            if (transaction.data().countsLimit) {
              sum += transaction.data().transactionData.value;
              setUsage((sum / limitX) * 100);
            }
          });
        }
      });
    }
  }, [userTransactions]);

  const formatDate = (date: Date) => {
    let month = "" + (date.getMonth() + 1),
      day = "" + date.getDate(),
      year = date.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  const addTransaction = useCallback(
    async (
      name: string,
      type: string,
      value: number,
      limit: boolean,
      balance: boolean,
      date: Date
    ) => {
      if (user) {
        const newDate = formatDate(date).toString();
        const transactionsCollection = collection(db, "transactions");
        addDoc(transactionsCollection, {
          name: name,
          countsLimit: limit,
          countsBalance: balance,
          type: type,
          transactionData: {
            date: newDate,
            value: value,
          },
          userId: user.uid,
        });

        if (type === "incoming" || balance) {
          const data = query(userCollections, where("userId", "==", user.uid));
          await getDocs(data).then((docs) => {
            docs.docs.map((doc) => {
              checkLimit.current.id = doc.id;
              checkLimit.current.balance = doc.data().balance;
            });
          });
          const balanceRef = doc(db, "users", checkLimit.current.id);
          if (balance && type !== "incoming") {
            await updateDoc(balanceRef, {
              balance: checkLimit.current.balance - value,
            });
          } else {
            await updateDoc(balanceRef, {
              balance: checkLimit.current.balance + value,
            });
          }
        }
        getTransactions();
      }
    },
    [user]
  );

  const deleteTransaction = useCallback(
    async (id: string) => {
      if (user) {
        const data = query(userCollections, where("userId", "==", user.uid));
        await getDocs(data).then((docs) => {
          docs.docs.map((doc) => {
            checkLimit.current.id = doc.id;
            checkLimit.current.balance = doc.data().balance;
          });
        });
        const balanceRef = doc(db, "users", checkLimit.current.id);
        await getDoc(doc(db, "transactions", id)).then((transactionData) => {
          if (transactionData.data()!.type === "incoming") {
            updateDoc(balanceRef, {
              balance:
                checkLimit.current.balance -
                transactionData.data()!.transactionData.value,
            });
          } else if (transactionData.data()!.countsBalance) {
            updateDoc(balanceRef, {
              balance:
                checkLimit.current.balance +
                transactionData.data()!.transactionData.value,
            });
          } else {
            return;
          }
          getMyBalance();
          getTransactions();
        });
      }
      await deleteDoc(doc(db, "transactions", id)).then(() =>
        getTransactions()
      );
    },
    [user]
  );

  const filterTransactions = useCallback(
    (option: string) => {
      if (userTransactions) {
        option === "all"
          ? setFilteredTransactions(userTransactions)
          : setFilteredTransactions(
              userTransactions.filter((transaction: DocumentData) =>
                transaction.data().type.includes(option)
              )
            );
      }
    },
    [userTransactions]
  );

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
        addTransaction,
        deleteTransaction,
        getLimit,
        limitDisplay,
        usage,
        filterTransactions,
        filteredTransactions,
      }}
    >
      {children}
    </DBContext.Provider>
  );
}
