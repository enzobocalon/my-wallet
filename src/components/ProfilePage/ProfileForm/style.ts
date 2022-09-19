import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    width: 40%;
    border-radius: 12px;
    background-color: #2E313E;
    margin-right: 2rem;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;

    h1{
        font-size: 2rem;
        margin-bottom: 1rem;
    }

    @media (max-width: 1150px){
        width: 60%;
    }
    @media (max-width: 800px){
        width: 75%;
    }
    @media (max-width: 620px){
        width: 90%;
    }

    @media (max-width: 520px){
        width: 100%;
    }
`

export const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    `

export const FormInfo = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    border-bottom: 1px solid #343947;
    padding: 10px 0;

    input{
        height: 25px;
        padding: 0 10px;
    }
`

export const PFPContainer = styled.div`
    width: 150px;
    height: 150px;
    position: relative;
    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }

    svg{
        position: absolute;
        color: white;
        background-color: rgb(255, 58, 249);
        border-radius: 50%;
        padding: 3px;
        right: 10px;
        bottom: 5px;
        cursor: pointer;
        box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
    }

`

export const ChangePassword = styled.button`
    margin-top: 1rem;
    width: 100%;
    padding: 5px;
    color: white;
    background-color: rgb(255,58,249);
    font-weight: 500;
    border: none;
    cursor: pointer;
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
`