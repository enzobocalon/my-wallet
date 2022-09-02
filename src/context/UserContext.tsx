import { createContext, useState, useCallback, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  User
} from 'firebase/auth'

import { auth } from '../services/firebase'
import { useNavigate, useLocation } from "react-router-dom";

type AuthContextProps = {
  handleRegister: (name: string, email: string, password: string) => Promise<void>
  user: User | null
  registered: boolean
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>
  handleLogin: (email: string, password: string) => Promise<void>
  handleLogout: () => void
}

type AuthProviderProps = {
  children: React.ReactNode
}


export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
  const location = useLocation();
  const [user, setUser] = useState<User | null>(null)
  const [registered, setRegistered] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleRegister = useCallback(
    async (name: string, email: string, password: string) => {
      try {
        if (name && email && password) {
          await createUserWithEmailAndPassword(auth, email, password).then((currentUser) => {
            updateProfile(currentUser.user, {
              displayName: name
            })
            setRegistered(true)
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    [navigate]
  )
  
  const handleLogin = useCallback(
    async(email: string, password: string) => {
      try {
        if (email && password) {
          await signInWithEmailAndPassword(auth, email, password).then(() => {
            navigate('./dashboard')
          })
        }
      } catch (error) {
        console.log(error)
      }
    }, [navigate])

    const handleLogout = useCallback(() => {
      signOut(auth).then(() => {
        navigate('/')
        setUser(null);
      });
    },
    [navigate])

  useEffect(() => {
    setRegistered(false);
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }

      // AuthGuard
      if(!currentUser && location.pathname === '/dashboard'){
        navigate('/login');
      }
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        handleRegister,
        user,
        registered,
        setRegistered,
        handleLogin,
        handleLogout
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
