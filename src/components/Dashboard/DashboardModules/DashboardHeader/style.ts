import styled from "styled-components";

interface IProps {
    showing: boolean;
}

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    width: 100%;

    h1{
        font-size: 1.3rem;
    }

    @media (max-width: 450px) {
        flex-direction: column;
    }
`

export const MenuItems = styled.div`
    color: #9F9FBA;
    display: flex;
    align-items: center;
    width: fit-content;
    gap: 1rem; 
    position: relative;

    span, p{
        color: white;
    }

    svg{
        cursor: pointer;
    }

    @media (max-width: 600px){
        > div {
            span{
                display: none;
            }
        } 
    }

    @media (max-width: 450px) {
        width: 100%;
        justify-content: space-between;
        margin-top: .5rem;
        border-bottom: 1px solid #525399;
        padding-block: .5rem;

        >div {
            #name {
                display: none;
            }

            >svg {
                display: none;
            }
            gap: .5rem;
        }
    }

`

export const Profile = styled.div<IProps>`
    display: flex;
    align-items: center;
    height: fit-content;
    gap: 1rem;
    margin-right: 2rem;
    cursor: pointer;
    img {
        width: 50px;
        height: 50px;
        border-radius: 8px;
    }

    div {
        display: flex;
        flex-direction: column;

        span{
            font-size: .6rem;
            font-weight: 200;
        }

    }

    svg{
        cursor: pointer;
    }

    #profileArrow {
        transform: ${props => props.showing ? 'rotate(180deg)' : ''};
        transition: all .5s ease;
    }
`

export const ProfileModal = styled.div<IProps>`
    height: fit-content;
    position: absolute;
    background-color: #1E1C2C;
    padding: .5rem;
    transition: all .3s ease;
    bottom: ${props => props.showing ? '-110px' : '-110px'};
    right: ${props => props.showing ? '2rem' : '-100px'};
    width: ${props => props.showing ? '60%' : '0'};
    border-radius: 10px 0 10px 10px;

    &::after{
        content: '';
        position: absolute;
        top: -5px;
        right: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 5px 5px 5px;
        border-color: transparent transparent #1E1C2C transparent;
    }

    span{
        display: inline !important;
    }
`

export const PMContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;

`

export const PMItem = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: .5rem;
    cursor: pointer;

    &:hover{
        background-color: #272836;
        border-radius: 5px;
    }
`