import React, { useContext } from "react";
import * as S from "./style";

import logo from "../../../assets/logo.svg";

import { MdDashboard } from "react-icons/md";
import { BiTransferAlt, BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../../../context/UserContext";

const DashboardSidebar = () => {
  const { handleLogout } = useContext(AuthContext);

  return (
    <S.Container>
      <S.MenuContainer>
        <S.DashboardCol>
          <S.LogoRow>
            <img src={logo} />
          </S.LogoRow>
          <S.MenuAlign>
            <S.MenuRow active={true}>
              <MdDashboard size={20} />
              <span>Dashboard</span>
            </S.MenuRow>
            <S.MenuRow>
              <BiTransferAlt size={20} />
              <span>Transactions</span>
            </S.MenuRow>
            <S.MenuRow>
              <AiOutlineUser size={20} />
              <span>Profile</span>
            </S.MenuRow>
          </S.MenuAlign>
        </S.DashboardCol>
        <S.Logout onClick={handleLogout}>
          <BiLogOut size={28} />
        </S.Logout>
      </S.MenuContainer>
    </S.Container>
  );
};

export default DashboardSidebar;
