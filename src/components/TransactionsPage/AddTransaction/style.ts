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
    width: fit-content;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg{
        cursor: pointer;
        transition: all .3s ease;
    }
    svg:hover{
        background-color: #272836;
        border-radius: 50%;
        transition: all .3s ease;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
`

export const FormField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    input[type=text] {
        border: none;
        border-radius: 8px;
        padding: 2px 1rem;
    }
`

export const RadioButtons = styled.div`
    display: flex;
    gap: 1rem;
`