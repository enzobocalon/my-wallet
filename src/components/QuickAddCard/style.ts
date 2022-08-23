import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
    height: fit-content;
    margin-top: 2rem;
    background-color: #1f1d2c;
    padding: 1.4rem;
    border-radius: 12px;
    
    h1{
        font-size: 2rem;
        margin-left: 1.4rem;
        text-align: center;
    }

    .money{
        font-size: 1.5rem;
    }
`

export const AddContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.4rem;

    div {
        display: flex;
        flex-direction: column;
        gap: .4rem;
    }
    span {
        display: flex;
    }
    input[type='radio'] {
        margin-right: 5px;
    }

    p{
        margin: 5px 0;
        font-size: 1.2rem;
    }

    input[type='text'] {
        background-color: transparent;
        width: 100%;
        border: none;
        color: white;
        padding: .5rem 1rem;
        outline: none;
    }

    button{
        background-color: #525399;
        color: white;
        font-weight: bold;
        border: none;
        border-radius: 12px;
        padding: .5rem;
        margin-top: 1rem; 
        cursor: pointer;
        transition: all .3s ease;
    }
    button:hover{
        opacity: .9;
        transition: all .3s ease;
    }

`

export const inputField = styled.div`
    width: 100%;
    background-color: #2C2F37;
    display: flex;
    flex-direction: row !important;
    align-items: center;
    border-radius: 12px;

    svg{
        margin-left: 10px;
    }
`