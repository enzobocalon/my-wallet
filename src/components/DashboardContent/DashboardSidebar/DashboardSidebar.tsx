import React from 'react'
import * as S from './style'

import {GoHome} from 'react-icons/go'
import {IoMdMenu} from 'react-icons/io'
import {GiReceiveMoney} from 'react-icons/gi'
import {BiTransferAlt, BiLogOut} from 'react-icons/bi'
import {AiOutlineUser} from 'react-icons/ai'


import { Link } from 'react-router-dom'

const DashboardSidebar = () => {
  return (
    <S.SidebarContainer>
        <S.LogoContent>
            <S.Logo>
                <span id="logo-i">MW</span>
                <S.LogoName>
                    My Wallet
                </S.LogoName>
            </S.Logo>

            <IoMdMenu id='menu'/>

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
                    <GiReceiveMoney />
                    <span>Expenses</span>
                </Link>
                {/* <span className='tooltip'>Transactions</span> */}
            </li>
            <li>
                <Link to = '/'>
                    <BiTransferAlt />
                    <span>Transfers</span>
                </Link>
                {/* <span className='tooltip'>Transfers</span> */}
            </li>
            <li>
                <Link to = '/'>
                    <AiOutlineUser />
                    <span>Profile</span>
                </Link>
                {/* <span className='tooltip'>Profile</span> */}
            </li>
        </S.ulMenu>

        <S.profileContent>
            <S.Profile>
                <S.ProfileDetails>
                    <img src = '' alt = '' />
                    <S.nameJob>
                        <S.Name>Placeholder</S.Name>
                        <S.Job>Placeholder</S.Job>
                    </S.nameJob>
                </S.ProfileDetails>

                <BiLogOut />

            </S.Profile>
        </S.profileContent>
    </S.SidebarContainer>
  )
}

export default DashboardSidebar