import { useState, useContext } from "react";
import * as S from "./style";
import { useLocation } from "react-router-dom";

import placeholder from "../../../../assets/placeholderprofile.jpg";

import { RiArrowDropDownLine } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from "../../../../context/UserContext";

const DashboardHeader = () => {
  const [profileModal, setProfileModal] = useState<boolean>(false);

  const { handleLogout, user } = useContext(AuthContext);
  const location = useLocation();

  return (
    <S.Container>
      <div>
        <h1>
          {location.pathname === "/dashboard"
            ? "Dashboard"
            : location.pathname === "/transactions"
            ? "Transactions"
            : "Profile"}
        </h1>
      </div>

      <S.MenuItems>
        <MdNotifications size={20} />
        <S.Profile showing={profileModal}>
          <img src={placeholder} />
          <div>
            <p>{user?.displayName}</p>
            <span>{user?.email}</span>
          </div>
          <RiArrowDropDownLine
            size={20}
            onClick={() => setProfileModal((prev) => !prev)}
            id="profileArrow"
          />
        </S.Profile>

        <S.ProfileModal showing={profileModal}>
          <S.PMContainer>
            <S.PMItem>
              <AiOutlineUser size={20} />
              <span>Profile</span>
            </S.PMItem>

            <S.PMItem onClick={handleLogout}>
              <BiLogOut size={20} />
              <span>Logout</span>
            </S.PMItem>
          </S.PMContainer>
        </S.ProfileModal>
      </S.MenuItems>
    </S.Container>
  );
};

export default DashboardHeader;
