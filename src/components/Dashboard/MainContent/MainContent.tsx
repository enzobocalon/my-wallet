import React, {useState, useEffect} from "react";
import * as S from "./style";

import DashboardHeader from "../DashboardModules/DashboardHeader/DashboardHeader";
import MyBalance from "../DashboardModules/MyBalance/MyBalance";
import Infos from "../DashboardModules/CurrentlyInfos/Infos";
import DashboardSidebar from "../DashboardSidebar/DashboardSidebar";
import Statistics from "../DashboardModules/Statistics/Statistics";
import TransactionsInfos from "../DashboardModules/TransactionsInfos/TransactionsInfos";
import { Box, Grid } from "@mui/material";


const MainContent = () => {
  const mql = window.matchMedia("(max-width: 900px)")
  const [media, setMedia] = useState<boolean>(false);

  mql.addEventListener("change", () => {
    mql.matches ? setMedia(true) : setMedia(false);
  })

  useEffect(() => {
   if (mql.matches) {
    setMedia(true);
   }  
  })

  return (
    <S.Container>
      <DashboardSidebar locations="dashboard"/>
      <S.Wrapper>
      <DashboardHeader />
        <S.GridContainer>
          <S.GridItem>
            <MyBalance />
          </S.GridItem>

          <S.GridItem>
            <Infos />
          </S.GridItem>

          <S.GridItem>
            <TransactionsInfos />
          </S.GridItem>

          <S.GridItem>
            <Statistics />
          </S.GridItem>
        </S.GridContainer>
      </S.Wrapper>
    </S.Container>
  );
};

export default MainContent;
