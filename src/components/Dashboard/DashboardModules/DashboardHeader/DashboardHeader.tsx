import { useState, useContext } from "react";
import * as S from "./style";
import { useLocation, useNavigate } from "react-router-dom";

import { RiArrowDropDownLine } from "react-icons/ri";
import { MdNotifications } from "react-icons/md";
import { AiOutlineUser } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { AuthContext } from "../../../../context/AuthContext";

const DashboardHeader = () => {
  const [profileModal, setProfileModal] = useState<boolean>(false);

  const { handleLogout, user, userDisplay, PFP } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

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
        <MdNotifications size={20} id='notifications'/>
        <S.Profile showing={profileModal} onClick={() => setProfileModal((prev) => !prev)}>
          <img src={`${PFP}`} alt='profile icon'/>
          <div>
            <p id="name">{userDisplay}</p>
            <span>{user?.email}</span>
          </div>
          <RiArrowDropDownLine
            size={20}
            id="profileArrow"
          />
        </S.Profile>

        <S.ProfileModal showing={profileModal}>
          <S.PMContainer>
            <S.PMItem>
              <AiOutlineUser size={20} />
              <span onClick={() => navigate('/profile')}>Profile</span>
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
