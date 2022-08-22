import styled from 'styled-components'

export const SidebarContainer = styled.div`
    height: 100%;
    width: 240px;
    background-color: #1f1d2c;
    position: fixed;
    top: 0;
    left: 0;
    padding: 6px 14px;

    #menu {
        position: absolute;
        left: 90%;
        top: 18px;
        font-size: 20px;
        height: 25px;
        width: 25px;
        text-align: center;
        line-height: 50px;
        transform: translateX(-50%);
    }
`

export const LogoContent = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.div`
    color: #fff;
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;

    #logo-i{
        font-size: 28px;
        margin-right: 5px;
    }
`

export const LogoName = styled.div `
    font-size: 20px;
    font-weight: 400;

` 

export const ulMenu = styled.ul`
    margin-top: 20px;

    li {
        list-style: none;
        height: 50px;
        width: 100%;
        position: relative;
        margin: 0 5px;
        line-height: 50px;
    }
    
    li a {
        color: #fff;
        display: flex;
        align-items: center;
        transition: all .4s ease;
        border-radius: 12px;
    }
    
    li a:hover{
        background: #fff;
        color: #1f1d2c;
    }
    
    li a svg{
        height: 25px;
        min-width: 25px;
        margin: 0 1rem;
        border-radius: 12px;
        line-height: 50px;
    }
`

export const profileContent = styled.div`

`

export const Profile = styled.div`

`

export const ProfileDetails = styled.div`

`

export const nameJob = styled.div`

`

export const Name = styled.div`

`

export const Job = styled.div`

`