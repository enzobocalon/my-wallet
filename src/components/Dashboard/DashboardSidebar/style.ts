import styled from "styled-components";
import logo from "../../../assets/logo.svg";
import icon from '../../../assets/icon.svg';


interface IProps {
    active?: boolean;
    locations?: string;
}

export const Container = styled.div<IProps>`
    background-color: #1E1D2D;
    min-width: 13vw;
    height: 100vh;

    z-index: 0;
    border-right: 1px solid #525399;
    border-left: 8px solid transparent;

    @media (max-width: 1400px) {
        min-width: 15vw;
    }

    @media (max-width: 1200px) {
        min-width: 18vw;
    }

    @media (max-width: 1000px) {
        min-width: 20vw
    }

    @media (max-width: 900px){
        min-width: 13vw;
        height: ${props => props.locations === 'dashboard' ? 'auto' : '100vh'};
    }

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
        align-items: flex-start;
        gap: 1rem;
        margin-top: 2rem;

        a{
            width: 90%;
        }

        @media (max-width: 900px){
            gap: 3rem;
        }
    `

export const DashboardCol = styled.div`
    width: 100%;
    `

export const LogoRow = styled.div`
    height: 100px;
    width: 100%;
    background-image: url(${logo});
    background-size: cover;
    background-position: center;

    @media (max-width: 900px){
        background-image: url(${icon});
        background-size: 50%;
        background-repeat: no-repeat;
    }
    @media (max-width: 500px){
        background-size: 70%;
    }
    `

export const MenuRow = styled.div<IProps>`
    position: relative;
    display: flex;
    flex-direction: row !important;
    justify-content: flex-start !important;
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
        left: -8px;
        border-radius: 0 5px 5px 0;
        animation: slidein .3s;
    }

    @keyframes slidein {
        from {
            transform: translateX(-100%);
        } 
        to {
            transform: translateX(0);
        }
    }

    @media (max-width: 900px){
        padding: 0 5px;
        span{
            display: none;
        }
        svg{
            width: 75%;
            height: 75%;
        }
    }

    @media (max-width: 400px){
        padding: 0;

        svg{
            width: 60%;
            height: 60%;
        }
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

    @media (max-width: 900px){
        padding: 0 5px;
        svg{
            margin-right: 10px;
            width: 75%;
            height: 75%;
        }
    }

    @media (max-width: 400px){
        padding: 0;

        svg{
            margin-right: 10px;
            width: 50%;
            height: 50%;
        }
    }
`