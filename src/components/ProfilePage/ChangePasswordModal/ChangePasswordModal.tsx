import React, {useRef, useState, useContext} from 'react'
import { ChangePassword } from '../ProfileForm/style'
import * as S from './style'

import { Snackbar } from "@mui/material";
import { Error } from '../../Homepage/LoginCard/style';
import { AuthContext } from '../../../context/AuthContext';

interface IProps {
    handleModal: () => void
}

const ChangePasswordModal = ({handleModal}: IProps) => {
    const passRef = useRef<HTMLInputElement | null>(null)
    const repeatPassRef = useRef<HTMLInputElement | null>(null)
    const [error, setError] = useState('');
    const { changePassword, passwordChanged, setPasswordChanged, handleLogout } = useContext(AuthContext)
    

    const handleSubmit = () => {
        if (passRef.current?.value && repeatPassRef.current?.value) {
            if (passRef.current.value === repeatPassRef.current.value) {
                if (passRef.current.value.length >= 6) {
                    changePassword(passRef.current.value);
                } else {
                    setError("The password should have at least 6 characters.")
                }
            } else {
                setError("The password doesn't match.")
            }
        } else {
            setError("All fields must be filled.")
        }
    }

  return (
    <>
        <S.BlackOutLayer onClick={handleModal}>
            <S.Container onClick={(e) => e.stopPropagation()}>
                <h1>Change Password</h1>

                <S.Field>
                    <span>Insert your new password</span>
                    <input ref={passRef} type='password'/>
                </S.Field>

                <S.Field>
                    <span>Repeat your new password</span>
                    <input ref={repeatPassRef} type='password'/>
                </S.Field>

                <ChangePassword onClick={handleSubmit}>Change Password</ChangePassword>
                <Error>{error}</Error>

            </S.Container>
         <Snackbar
          open={passwordChanged!}
          onClose={() => {
            setPasswordChanged(false)
            handleLogout();
            handleModal();
          }}
          autoHideDuration={1500}
          message={"Password changed. You must login with the new password."}
        />
        </S.BlackOutLayer>
    </>
  )
}

export default ChangePasswordModal