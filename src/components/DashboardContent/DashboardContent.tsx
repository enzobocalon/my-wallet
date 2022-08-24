import React, {FC} from 'react'
import * as S from './style'

import DashboardSidebar from './DashboardSidebar/DashboardSidebar'
import DashboardTab from './DashboardTab/DashboardTab'
import QuickAddCard from '../QuickAddCard/QuickAddCard'
import ChartCard from '../ChartCard/ChartCard'
import CustomAssets from '../CustomAssets/CustomAssets'


const DashboardContent: FC = () => {
  return (
    <S.Container>
      <DashboardSidebar />
      <S.SiderbarMargin>
        <S.DashboardAlign>
          <DashboardTab />
          <QuickAddCard />
        </S.DashboardAlign>

        <S.DashboardAlign>
          <ChartCard/>
          <CustomAssets />
        </S.DashboardAlign>
        
        <span style={{marginTop: "1rem"}}>Dashboard v0.1 - Alpha</span>
      </S.SiderbarMargin>
    </S.Container>
  )
}

export default DashboardContent