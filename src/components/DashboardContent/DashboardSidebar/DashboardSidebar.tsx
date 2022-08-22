import React from 'react'
import * as S from './style'

import {GoHome} from 'react-icons/go'
import {IoMdMenu} from 'react-icons/io'
import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <S.SidebarContainer>
        <S.LogoContent>
            <S.Logo>
                MW
            </S.Logo>

            <S.LogoName>
                My Wallet
            </S.LogoName>

            <IoMdMenu />

        </S.LogoContent>
        <S.ulMenu>
            <li>
                <Link to = '/'>
                    <GoHome />
                    <span>Dashboard</span>
                </Link>
                {/* <span className='tooltip'>Dashboard</span> */}
            </li>
            <li>
                <Link to = '/'>
                    <GoHome />
                    <span>Dashboard</span>
                </Link>
                {/* <span className='tooltip'>Dashboard</span> */}
            </li>
            <li>
                <Link to = '/'>
                    <GoHome />
                    <span>Dashboard</span>
                </Link>
                {/* <span className='tooltip'>Dashboard</span> */}
            </li>
            <li>
                <Link to = '/'>
                    <GoHome />
                    <span>Dashboard</span>
                </Link>
                {/* <span className='tooltip'>Dashboard</span> */}
            </li>
        </S.ulMenu>
    </S.SidebarContainer>
  )
}

export default DashboardSidebar