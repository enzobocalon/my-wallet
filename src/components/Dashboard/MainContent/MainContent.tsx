import React from 'react'
import * as S from './style'

import DashboardHeader from '../DashboardModules/DashboardHeader/DashboardHeader'
import MyBalance from '../DashboardModules/MyBalance/MyBalance'
import Infos from '../DashboardModules/CurrentlyInfos/Infos'
import DashboardSidebar from '../DashboardSidebar/DashboardSidebar'
import Statistics from '../DashboardModules/Statistics/Statistics'
import TransactionsInfos from '../DashboardModules/TransactionsInfos/TransactionsInfos'

import { Box, Grid } from '@mui/material'

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

          <Grid xs={7} sx={{marginTop: '1rem', marginRight: '1rem'}}>
            <TransactionsInfos />
          </Grid>

          <Grid xs={4} sx={{marginTop: '1rem', marginRight: '1rem'}}>
            <Statistics />
          </Grid>

        </Grid>   
      </Box>
    </S.Container>
  )
}

export default MainContent