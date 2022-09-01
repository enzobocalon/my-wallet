import { FC, useRef, useContext, useState } from "react";
import { AuthContext } from "../../../context/UserContext";
import * as S from "./style";

import { Link, useNavigate } from "react-router-dom";

import { MdEmail, MdPassword } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

import illustration1 from "../../../assets/register.svg";
import illustration2 from "../../../assets/register2.svg";
import { Snackbar } from "@mui/material";

import { fetchSignInMethodsForEmail } from "firebase/auth";
import { auth } from '../../../services/firebase'

const RegisterCard: FC = () => {
  const { handleRegister, registered, setRegistered } = useContext(AuthContext);

  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

  const [emailError, setEmailError] = useState<string | null>(null);
  const [userError, setUserError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleButtonClick = async () => {
    if (name.current?.value &&
        email.current?.value &&
        email.current?.value.match(emailRegex) &&
        password.current?.value &&
        password.current?.value.length >= 6) {
          setUserError(null);
          setPasswordError(null);
          setEmailError(null);
        await fetchSignInMethodsForEmail(auth, email.current.value).then((status) => {
          if (!status.length){
            handleRegister(name.current!.value, email.current!.value, password.current!.value);
          } else {
            setEmailError('Email already registered.')
          }
        })
    } else {

      if (!name.current?.value.length) {
        setUserError('Username field cannot be empty.')
      } else {
        setUserError(null);
      }

      if (!email.current?.value.length){
        setEmailError('Email field cannot be empty.')
      } else if(!email.current.value.match(emailRegex)) {
        setEmailError('Please insert a valid email type.')
      } else {
        setEmailError(null)
      }
      
      if (!password.current?.value.length){
        setPasswordError('Password field cannot be empty.')
      } else if (password.current.value.length < 6) {
        setPasswordError('Password must have at least 6 characters.');
      } else {
        setPasswordError(null);
      }
    }
  };

  const handleEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter") {
      handleButtonClick();
    }
  };

  return (
    <S.RegisterWrapper>
      <S.RegisterDiv>
        <img src={illustration1} id="first" alt="first bg" />
        <img src={illustration2} id="second" alt="second bg" />

        <S.RegisterFields onKeyDown={(e) => handleEnter(e)}>
          <h1>Welcome to our family!</h1>
          <span>Register now to get started. Totally free!</span>

          <S.RegisterField>
            <span>Your username</span>
            <div>
              <AiOutlineUser size={25} />
              <input type="text" placeholder="e.g: Michael" ref={name} />
            </div>
            <S.Error>{userError}</S.Error>
          </S.RegisterField>

          <S.RegisterField>
            <span>Your email</span>
            <div>
              <MdEmail size={25} />
              <input type="email" placeholder="email@email.com" ref={email} />
            </div>
              <S.Error>{emailError}</S.Error>
          </S.RegisterField>

          <S.RegisterField>
            <span>Your password</span>
            <div>
              <MdPassword size={25} />
              <input
                type="password"
                placeholder="Your password here..."
                ref={password}
              />
            </div>
            <S.Error>{passwordError}</S.Error>
          </S.RegisterField>

          <S.RegisterButton onClick={handleButtonClick}>
            Register now!
          </S.RegisterButton>

          <S.PCustom>
            Already have an account?
            <Link to="/login">
              <span> Login now!</span>
            </Link>
          </S.PCustom>
        </S.RegisterFields>

        <Snackbar
          open={registered}
          onClose={() => {
            navigate('/login')
            setRegistered(false);
          }}
          autoHideDuration={1000}
          message={"Registered with success. Redirecting..."}
        />
      </S.RegisterDiv>
    </S.RegisterWrapper>
  );
};

export default RegisterCard;
