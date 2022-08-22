import React, {FC} from 'react'
import * as S from './style'

import DashboardSidebar from './DashboardSidebar/DashboardSidebar'


const DashboardContent: FC = () => {
  return (
    <S.Container>
        <DashboardSidebar />
    </S.Container>
  )
}

export default DashboardContent