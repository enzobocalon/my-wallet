import styled from "styled-components";

export const BlackOutLayer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Container = styled.div`
    z-index: 12;
    background-color: #2E313E;
    height: fit-content;
    width: 25%;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
`

export const ContainerRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg{
        cursor: pointer;
    }
`

export const ButtonConfirm = styled.button`
    background-color: #525399;
    border: none;
    color: white;
    padding: .5rem;
    margin-top: 1rem;
    border-radius: 12px;
    font-weight: 500;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        background-color: rgba(82,83,153, .9);
        transition: all .3s ease;
    }
`

export const ButtonDeny = styled.button`
    background-color: inherit;
    padding: .5rem;
    margin-top: 1rem;
    border: 2px solid #525399;
    border-radius: 12px;
    color: #6264b6;
    font-weight: 500;
    cursor: pointer;
`