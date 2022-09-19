import React, {useRef} from 'react'
import { ChangePassword } from '../ProfileForm/style'
import * as S from './style'

import { Snackbar } from "@mui/material";
import { Error } from '../../Homepage/LoginCard/style';

interface IProps {
    handleModal: () => void
}

const ChangePasswordModal = ({handleModal}: IProps) => {
    const passRef = useRef<HTMLInputElement | null>(null)
    const repeatPassRef = useRef<HTMLInputElement | null>(null)

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

                <ChangePassword>Change Password</ChangePassword>
                <Error>Password doesn't match.</Error>

            </S.Container>
        {/* <Snackbar
          open={}
          onClose={() => {
          }}
          autoHideDuration={1000}
          message={"Logged in. Redirecting..."}
        /> */}
        </S.BlackOutLayer>
    </>
  )
}

export default ChangePasswordModal