import { FC, useRef, useContext } from "react";
import { AuthContext } from "../../../context/UserContext";
import * as S from "./style";

import { Link, useNavigate } from "react-router-dom";

import { MdEmail, MdPassword } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";

import illustration1 from "../../../assets/register.svg";
import illustration2 from "../../../assets/register2.svg";
import { Snackbar } from "@mui/material";

const RegisterCard: FC = () => {
  const { handleRegister, registered, setRegistered } = useContext(AuthContext);

  const name = useRef<HTMLInputElement | null>(null);
  const email = useRef<HTMLInputElement | null>(null);
  const password = useRef<HTMLInputElement | null>(null);

  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (
      name.current?.value &&
      email.current?.value &&
      password.current?.value
    ) {
      handleRegister(
        name.current.value,
        email.current.value,
        password.current.value
      );
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
          </S.RegisterField>

          <S.RegisterField>
            <span>Your email</span>
            <div>
              <MdEmail size={25} />
              <input type="email" placeholder="email@email.com" ref={email} />
            </div>
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
