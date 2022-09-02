import styled from "styled-components";

export const LoginWrapper = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 90vh;
`


export const Card = styled.div`
    backdrop-filter: blur(12px) saturate(196%);
    -webkit-backdrop-filter: blur(12px) saturate(196%);
    background-color: rgba(17, 25, 40, 0.56);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 2rem;
    
`

export const HeaderDiv = styled.div`
    h1{
        font-size: 2rem;
    }

`

export const InputFields = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem 0;

    div {
        display: flex;
        align-items: center;
        width: 100%;
        background-color: #1f2a37;
        padding: .5rem;
        border-radius: 10px;
    }

    input {
        width: 100%;
        background-color: transparent;
        border: none;
        color: white;
        margin-left: 1rem;
        outline: none;
    }
`

export const RememberMeDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
        display: flex;
        align-items: center;
        gap: .4rem;
    }
`
export const LoginButton = styled.button`
    width: 100%;
    margin-top: 1rem;
    background-color: #525399;
    color: white;
    font-weight: bold;
    border: none;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        opacity: .9;
        transition: all .3s ease;
    }
`

export const RegisterDiv = styled.div`
    margin-top: 1rem;

    span {
        color: #7475c4;
        transition: all .3s ease;
    }

    span:hover{
        color: #525399;
        transition: all .3s ease;
    }
`

export const Error = styled.span`
    font-size: 12px;
    text-align: center;
    width: 100%;
    color: red;
    margin-top: 5px;
`