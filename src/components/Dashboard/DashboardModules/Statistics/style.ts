import styled from "styled-components";

export const Container = styled.div`
    background-color: #2E313E;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;

    h1{
        font-size: 1.4rem;
    }

    @media (max-width: 900px){
        width: 80vw;
    }

    @media (max-width: 650px){
        width: 78vw;
    }
    @media (max-width: 470px){
        width: 75vw;
    }
    @media (max-width: 340px){
        width: 72vw;
    }
`