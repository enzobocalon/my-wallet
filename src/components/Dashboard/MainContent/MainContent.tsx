import { Box, Grid } from '@mui/material'
import React from 'react'
import DashboardHeader from '../DashboardModules/DashboardHeader/DashboardHeader'
import MyBalance from '../DashboardModules/MyBalance/MyBalance'
import Infos from '../DashboardModules/CurrentlyInfos/Infos'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar'
import * as S from './style'

const MainContent = () => {
  return (
    <S.Container>
        <DashboardSidebar />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container >
          <Grid xs={12} sx={{marginBottom: '1rem'}}>
            <DashboardHeader />
          </Grid>
          <Grid xs={3} sx={{marginRight: '1rem'}}>
            <MyBalance/>
          </Grid>
          <Grid xs={8}>
            <Infos/>
          </Grid>
        </Grid>   
      </Box>
    </S.Container>
  )
}

export default MainContent