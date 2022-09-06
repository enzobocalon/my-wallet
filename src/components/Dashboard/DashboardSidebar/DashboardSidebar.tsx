import React, { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import * as S from "./style";

import logo from "../../../assets/logo.svg";

import { MdDashboard } from "react-icons/md";
import { BiTransferAlt, BiLogOut } from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../../../context/UserContext";

const DashboardSidebar = () => {
  const { handleLogout } = useContext(AuthContext);
  const location = useLocation();

  return (
    <S.Container>
      <S.MenuContainer>
        <S.DashboardCol>
          <S.LogoRow>
            <img src={logo} />
          </S.LogoRow>
          <S.MenuAlign>
            <Link to={"/dashboard"}>
              {location.pathname === "/dashboard" ? (
                <S.MenuRow active={true}>
                  <MdDashboard size={20} />
                  <span>Dashboard</span>
                </S.MenuRow>
              ) : (
                <S.MenuRow>
                  <MdDashboard size={20} />
                  <span>Dashboard</span>
                </S.MenuRow>
              )}
            </Link>
            <Link to={"/transactions"}>
              {location.pathname === "/transactions" ? (
                <S.MenuRow active={true}>
                  <BiTransferAlt size={20} />
                  <span>Transactions</span>
                </S.MenuRow>
              ) : (
                <S.MenuRow>
                  <BiTransferAlt size={20} />
                  <span>Transactions</span>
                </S.MenuRow>
              )}
            </Link>
            <Link to={"/profile"}>
              {location.pathname === "/profile" ? (
                <S.MenuRow active={true}>
                  <AiOutlineUser size={20} />
                  <span>Profile</span>
                </S.MenuRow>
              ) : (
                <S.MenuRow>
                  <AiOutlineUser size={20} />
                  <span>Profile</span>
                </S.MenuRow>
              )}
            </Link>
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
