import styled from "styled-components";

interface IProps {
    active?: boolean;
}

export const Container = styled.div`
    background-color: #1E1D2D;
    min-width: 13vw;
    max-width: 15vw;
    height: 100vh;

    z-index: 0;
    border-right: 1px solid #525399;
`

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    width: 100%;
    height: 100%;
    `

export const MenuAlign = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 2rem;
        padding-right: 1rem;
        `

export const DashboardCol = styled.div`
    width: 100%;
    `

export const LogoRow = styled.div`
    text-align: center;
    height: 100px;
    width: 100%;
    img{
        width: 100%;
        height: 100%;
        transform: scale(1.4);
    }
    `

export const MenuRow = styled.div<IProps>`
    position: relative;
    display: flex;
    flex-direction: row !important;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    padding-left: 1rem;
    gap: .6rem !important;
    height: 40px;
    cursor: pointer;
    
    svg{
        min-width: fit-content;
    }
    
    span{
        font-size: 1.2rem;
    }
    
    &:hover{
        background-color: #272836;
        border-radius: 8px;
    }
    
    &::before{
        content: '';
        position: absolute;
        opacity: ${props => props.active ? '1' : '0'};
        background-color: #4B4B7C;
        width: 5px;
        height: 30px;
        top: 5px;
        left: 0;
        border-radius: 0 5px 5px 0;
    }

`

export const Logout = styled.div`
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    transition: all .3s ease;

    &:hover{
        background-color: #272836;
        transition: all .3s ease;
    }
`