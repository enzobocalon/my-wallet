import React, { useState, useContext, useEffect, useRef } from "react";
import * as S from "./style";
import profile from "../../../assets/placeholderprofile.jpg";
import { AiOutlineEdit, AiOutlineCheck } from "react-icons/ai";
import ChangePasswordModal from "../ChangePasswordModal/ChangePasswordModal";
import { AuthContext } from "../../../context/AuthContext";
import { db } from "../../../services/firebase";
import {
  collection,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import { updateProfile } from "firebase/auth";

const ProfileForm = () => {
  const { getUserData, userData, user, userDisplay, setUserDisplay, changePFP, PFP } = useContext(AuthContext);

  const [changeUser, setChangeUser] = useState(false);
  const [changeCity, setChangeCity] = useState(false);
  const [changeCountry, setChangeCountry] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const username = useRef<HTMLInputElement | null>(null);
  const city = useRef<HTMLInputElement | null>(null);
  const country = useRef<HTMLInputElement | null>(null);
  const file = useRef<HTMLInputElement | null>(null);
  const document = useRef({ id: "" });

  const usersCollections = collection(db, "users");

  const handleClose = () => {
    setChangeUser(false);
    setChangeCity(false);
    setChangeCountry(false);
  };

  const handleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const changeUserName = async (name: string) => {
    if (user) {
      updateProfile(user, {
        displayName: name,
      });
      setUserDisplay(name);
    }
  };

  const getDocument = async () => {
    if (user) {
      const data = query(usersCollections, where("userId", "==", user.uid));
      await getDocs(data).then((docs) => {
        docs.docs.map((doc) => {
          document.current.id = doc.id;
        });
      });
    }
  };

  const submitCity = async (city: string) => {
    const userRef = doc(db, "users", document.current.id);
    await updateDoc(userRef, {
      city: city,
    });
  };

  const submitCountry = async (country: string) => {
    const userRef = doc(db, "users", document.current.id);
    await updateDoc(userRef, {
      country: country,
    });
  };

  const handleChange = (event: any) => {
    changePFP(event)
  };

  useEffect(() => {
    getUserData();
    getDocument();
  }, [user]);

  return (
    <S.Container onClick={handleClose}>
      <S.FormContainer>
        <S.PFPContainer>
          <AiOutlineEdit size={28} onClick={() => file.current?.click()} />
          <input type="file" ref={file} hidden onChange={handleChange} />
          {
            user ? <img src={`${PFP}`} /> : <img src={profile} />
          }
        </S.PFPContainer>
      </S.FormContainer>
      <span style={{ fontWeight: "200", marginTop: "1rem" }}>
        Click on the data to change it.
      </span>

      <S.FormContainer>
        <S.FormInfo onClick={(e) => e.stopPropagation()}>
          <span>Your Username</span>
          {changeUser ? (
            <div>
              <input ref={username} />
              <AiOutlineCheck
                size={20}
                onClick={() => {
                  setChangeUser(false);
                  if (username.current?.value) {
                    username.current.value !== user?.displayName
                      ? changeUserName(username.current.value)
                      : setChangeUser(false);
                  }
                }}
              />
            </div>
          ) : (
            <span
              onClick={() => setChangeUser((prev) => !prev)}
              style={{ cursor: "pointer" }}
            >
              {userDisplay}
            </span>
          )}
        </S.FormInfo>
      </S.FormContainer>

      <S.FormContainer>
        <S.FormInfo>
          <span>Your Email</span>
          <span>enzo.bocalon@hotmail.com</span>
        </S.FormInfo>
      </S.FormContainer>

      <S.FormContainer>
        <S.FormInfo onClick={(e) => e.stopPropagation()}>
          <span>City</span>
          {changeCity ? (
            <div>
              <input ref={city} />
              <AiOutlineCheck
                size={20}
                onClick={() => {
                  setChangeCity(false);
                  if (city.current?.value) {
                    city.current.value !== userData?.city
                      ? submitCity(city.current.value)
                      : setChangeCity(false);
                    getUserData();
                  }
                }}
              />
            </div>
          ) : (
            <span
              onClick={() => setChangeCity((prev) => !prev)}
              style={{ cursor: "pointer" }}
            >
              {userData?.city.charAt(0).toUpperCase() + userData?.city.slice(1)}
            </span>
          )}
        </S.FormInfo>
      </S.FormContainer>

      <S.FormContainer>
        <S.FormInfo onClick={(e) => e.stopPropagation()}>
          <span>Country</span>
          {changeCountry ? (
            <div>
              <input ref={country} />
              <AiOutlineCheck
                size={20}
                onClick={() => {
                  setChangeCountry(false);
                  if (country.current?.value) {
                    country.current.value !== userData?.city
                      ? submitCountry(country.current.value)
                      : setChangeCity(false);
                    getUserData();
                  }
                }}
              />
            </div>
          ) : (
            <span
              onClick={() => setChangeCountry((prev) => !prev)}
              style={{ cursor: "pointer" }}
            >
              {userData?.country.charAt(0).toUpperCase() +
                userData?.country.slice(1)}
            </span>
          )}
        </S.FormInfo>
      </S.FormContainer>

      <S.ChangePassword onClick={handleModal}>Change Password</S.ChangePassword>
      {openModal ? <ChangePasswordModal handleModal={handleModal} /> : ""}
    </S.Container>
  );
};

export default ProfileForm;
