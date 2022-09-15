import { createContext, useState, useCallback, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User,
  browserSessionPersistence,
  browserLocalPersistence,
} from "firebase/auth";

import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";

import { useNavigate, useLocation } from "react-router-dom";

type AuthContextProps = {
  handleRegister: (
    name: string,
    email: string,
    password: string
  ) => Promise<void>;
  user: User | null;
  registered: boolean;
  loggedIn: boolean | null;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean | null>>;
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>;
  handleLogin: (
    email: string,
    password: string,
    rememberMe: boolean
  ) => Promise<void>;
  handleLogout: () => void;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

export const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [registered, setRegistered] = useState<boolean>(false);
  const [loggedIn, setLoggedIn] = useState<boolean | null>(null);

  const usersCollections = collection(db, "users");

  const navigate = useNavigate();
  const location = useLocation();

  const handleRegister = useCallback(
    async (name: string, email: string, password: string) => {
      try {
        if (name && email && password) {
          await createUserWithEmailAndPassword(auth, email, password).then(
            (currentUser) => {
              updateProfile(currentUser.user, {
                displayName: name,
              });
              // addDoc(usersCollections, {userId: currentUser.user.uid, creditLimit: 0, balance: 0})
              setRegistered(true);
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    },
    []
  );

  const handleLogin = useCallback(
    async (email: string, password: string, rememberMe: boolean) => {
      try {
        if (email && password) {
          await signInWithEmailAndPassword(auth, email, password).then(() => {
            auth.setPersistence(
              rememberMe ? browserLocalPersistence : browserSessionPersistence
            );
            setLoggedIn(true);
          });
        }
      } catch (error) {
        setLoggedIn(false);
      }
    },
    []
  );

  const handleLogout = useCallback(() => {
    signOut(auth).then(() => {
      navigate("/");
      setUser(null);
    });
  }, [navigate]);

  useEffect(() => {
    setRegistered(false);
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
      // AuthGuard
      if (!currentUser && location.pathname === "/dashboard") {
        navigate("/login");
      }

      if (
        currentUser &&
        (location.pathname === "/login" || location.pathname === "/register")
      ) {
        navigate("/dashboard");
      }
    });
  }, [location.pathname, navigate]);

  return (
    <AuthContext.Provider
      value={{
        handleRegister,
        user,
        registered,
        setRegistered,
        handleLogin,
        handleLogout,
        loggedIn,
        setLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
