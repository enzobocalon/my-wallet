import styled from "styled-components";

export const Container = styled.div`
    width: 40%;
    min-height: 40vh;
    margin-top: 2rem;
    background-color: #1f1d2c;
    padding: 1.4rem;
    border-radius: 12px;

    h1{
        font-size: 2rem;
    }

    p{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    `
export const AssetContainer = styled.div`
    display: flex;
    flex-direction: column;
    
`
export const Assets = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    div {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    svg#kpl{
        visibility: hidden;
    }
`

export const Asset = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;
    border-top: 2px solid #2C2F37;
    border-radius: 1px;
    padding-top: 10px;

    div {
        display: flex;
        align-items: center;
        gap: 2rem;
    }

    .add {
        cursor: pointer;
    }
`