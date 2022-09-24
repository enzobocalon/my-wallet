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
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={12} sx={{ marginBottom: "1rem" }}>
            <DashboardHeader />
          </Grid>
          <Grid xs={media ? 12 : 3} sx={{ marginRight: "1rem"}} id="balance">
            <MyBalance />
          </Grid>

          <Grid xs={media ? 12 : 8} sx={{marginRight: "1rem"}}>
            <Infos />
          </Grid>

          <Grid xs={media ? 12 : 7} sx={{ marginTop: "1rem", marginRight: "1rem" }}>
            <TransactionsInfos />
          </Grid>

          <Grid xs={media ? 12 : 4} sx={{ marginTop: "1rem", marginRight: "1rem" }}>
            <Statistics />
          </Grid>
        </Grid>
      </Box>
    </S.Container>
  );
};

export default MainContent;
