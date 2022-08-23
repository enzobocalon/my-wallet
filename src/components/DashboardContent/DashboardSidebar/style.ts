import styled from 'styled-components'

interface IProps {
    active: boolean;
}

export const SidebarContainer = styled.div<IProps>`
    height: 100%;
    width: ${props => props.active ? '240px' : '78px'};
    background-color: #1f1d2c;
    position: fixed;
    top: 0;
    left: 0;
    padding: 6px 14px;
    transition: all .5s ease;

    #menu {
        position: absolute;
        left: ${props => props.active ? '90%' : '50%'};
        top: 18px;
        font-size: 20px;
        height: 25px;
        width: 25px;
        text-align: center;
        line-height: 50px;
        transform: translateX(-50%);
        cursor: pointer;
    }

    span:not(#logo-i){
        opacity: ${props => props.active ? '1' : '0'};
        pointer-events: auto;
    }
`

export const LogoContent = styled.div`
    display: flex;
    align-items: center;
`

export const Logo = styled.div<IProps>`
    color: #fff;
    display: flex;
    height: 50px;
    width: 100%;
    align-items: center;
    opacity: ${props => props.active ? '1' : '0'};
    transition: all .3s ease;

    #logo-i{
        font-size: 28px;
        margin-right: 5px;
    }
`

export const LogoName = styled.div<IProps>`
    font-size: 20px;
    font-weight: 400;
    pointer-events: none;
    opacity: ${props => props.active ? '1' : '0'};
    transition: all .3s ease;
` 

export const ulMenu = styled.ul<IProps>`
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
        white-space: nowrap;
    }
    
    li a:hover{
        background: #fff;
        color: #1f1d2c;
    }
    
    li a svg{ //Dashboard icons
        height: 25px;
        min-width: 25px;
        transform: translateX(-20%);
        margin: 0 1rem;
        border-radius: 12px;
        line-height: 50px;
    }

    li .tooltip{
        position: absolute;
        height: 35px;
        top: 0;
        left: 122px;
        transform: translate(-50%, -50%);
        border-radius: 6px;
        line-height: 35px;
        color: #1f1d2c;
        text-align: center;
        width: 122px;
        background: #fff;
        box-shadow: 0 5px 10px rgba(0,0,0,.2);
        transition: 0s;
        opacity: 0;
        pointer-events: none;
        display: ${props => props.active ? 'none' : 'block'};
    }

    li:hover .tooltip{
        transition: all .5s ease;
        opacity: 1 !important;
        top: 50%;
    }
`

export const profileContent = styled.div`
    position: absolute;
    color: #fff;
    bottom: 0;
    left: 0;
    width: 100%;
`

export const Profile = styled.div<IProps>`
    position: relative;
    padding: 10px 6px;
    height: 60px;
    background-color: #1f1d2c;

    svg{ //Logout
        position: absolute;
        left: ${props => props.active ? '88%' : '50%'};
        bottom: 5px;
        transform: translate(-50%, -50%);
        min-width: 50px;
        line-height: 50px;
        font-size: 20px;
        border-radius: 12px;
        cursor: pointer;
    }
`

export const ProfileDetails = styled.div<IProps>`
    display: flex;
    align-items: center;
    opacity: ${props => props.active ? '1' : '0'};
    transition: all .5s ease;
    pointer-events: auto;

    img{
        height: 45px;
        width: 45px;
        object-fit: cover;
        border-radius: 12px;
    }

`

export const nameJob = styled.div`
    margin-left: 10px;
`

export const Name = styled.div`
    font-size: 15px;
    font-weight: 400;
`

export const Job = styled.div`
    font-size: 12px;
`