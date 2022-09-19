import React, {useState} from 'react'
import * as S from './style'
import profile from '../../../assets/placeholderprofile.jpg'
import {AiOutlineEdit} from 'react-icons/ai'
import ChangePasswordModal from '../ChangePasswordModal/ChangePasswordModal'

const ProfileForm = () => {
  const [changeUser, setChangeUser] = useState(false)
  const [changeCity, setChangeCity] = useState(false);
  const [changeCountry, setChangeCountry] = useState(false)
  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = () => {
    setChangeUser(false)
    setChangeCity(false)
    setChangeCountry(false)
  }

  const handleModal = () => {
    setOpenModal(prev => !prev);
  }

  return (
    <S.Container onClick = {handleSubmit}>
        <S.FormContainer>
            <S.PFPContainer>
                <AiOutlineEdit size={28}/>
                <img src={profile}/>
            </S.PFPContainer>
        </S.FormContainer>

      <S.FormContainer>
        <S.FormInfo onClick = {(e) => e.stopPropagation()}>
          <span>Your Username</span>
          {
            changeUser ? <input value={'enzo'}/> : <span onClick={() => setChangeUser(prev => !prev)}>Enzo</span> 
          }
        </S.FormInfo>
      </S.FormContainer>

      <S.FormContainer>
        <S.FormInfo>
          <span>Your Email</span>
          <span>enzo.bocalon@hotmail.com</span>
        </S.FormInfo>
      </S.FormContainer>

      <S.FormContainer>
        <S.FormInfo onClick = {(e) => e.stopPropagation()}>
          <span>City</span>
          {
            changeCity ? <input value={''} /> : <span onClick = {() => setChangeCity(prev => !prev)}>Unknown</span>
          }
        </S.FormInfo>
      </S.FormContainer>

      <S.FormContainer>
        <S.FormInfo onClick = {(e) => e.stopPropagation()}>
          <span>Country</span>
          {
            changeCountry ? <input value={''} /> : <span onClick = {() => setChangeCountry(prev => !prev)}>Unknown</span>
          }
        </S.FormInfo>
      </S.FormContainer>

      <S.ChangePassword onClick={handleModal}>Change Password</S.ChangePassword>
      {
        openModal ? <ChangePasswordModal handleModal = {handleModal}/> : ''
      }
        
    </S.Container>
  )
}

export default ProfileForm