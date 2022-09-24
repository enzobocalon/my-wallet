import React from "react";
import DashboardSidebar from "../../Dashboard/DashboardSidebar/DashboardSidebar";
import * as S from "./style";

import { Box, Grid } from "@mui/material";
import DashboardHeader from "../../Dashboard/DashboardModules/DashboardHeader/DashboardHeader";
import TransactionsHeader from "../TransactionsHeader/TransactionsHeader";
import TransactionsList from "../TransactionsList/TransactionsList";

const MainContent = () => {
  return (
    <S.Container>
      <DashboardSidebar locations="transaction"/>
      <Box sx={{ flexGrow: 1 }}>
        <Grid xs={12} sx={{ marginBottom: "1rem" }}>
          <DashboardHeader />
        </Grid>
        <Grid xs={12}>
          <TransactionsHeader />
        </Grid>
        <Grid xs={12}>
          <TransactionsList />
        </Grid>
      </Box>
    </S.Container>
  );
};

export default MainContent;
