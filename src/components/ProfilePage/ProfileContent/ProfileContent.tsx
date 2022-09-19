import React from "react";
import * as S from "./style";
import DashboardSidebar from "../../Dashboard/DashboardSidebar/DashboardSidebar";
import ProfileForm from "../ProfileForm/ProfileForm";
import DashboardHeader from "../../Dashboard/DashboardModules/DashboardHeader/DashboardHeader";
import { Box, Grid } from "@mui/material";

const ProfileContent = () => {
  return (
    <>
      <S.Container>
        <DashboardSidebar />
        <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid xs={12} sx={{ marginBottom: "1rem" }}>
            <DashboardHeader />
          </Grid>
          <Grid xs={12} sx={{display: "flex", justifyContent: "center"}}>
            <ProfileForm />
          </Grid>
        </Grid>
      </Box>
      </S.Container>
    </>
  );
};

export default ProfileContent;
