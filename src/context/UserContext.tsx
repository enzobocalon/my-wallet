import { createContext, useState, useCallback, useEffect } from 'react'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  User,
} from 'firebase/auth'

import { auth } from '../services/firebase'
import { useNavigate } from "react-router-dom";

type AuthContextProps = {
  handleRegister: (name: string, email: string, password: string) => Promise<void>
  user: User | null
  registered: boolean
  setRegistered: React.Dispatch<React.SetStateAction<boolean>>
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({ children }: AuthProviderProps) {
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
            navigate('/login');
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    [navigate]
  )
  

  useEffect(() => {
    setRegistered(false);
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      }
    })
  }, [])

  return (
    <AuthContext.Provider
      value={{
        handleRegister,
        user,
        registered,
        setRegistered
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
