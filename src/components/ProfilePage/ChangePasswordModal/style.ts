import styled from 'styled-components'

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
    height: 275px;
    width: 500px;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;

    h1{
        font-size: 1.5rem;
    }
`

export const Field = styled.div`
    display: flex;
    flex-direction: column;

    input {
        border-radius: 8px;
        border: none;
        margin-top: .5rem;
        padding: 3px 10px;
    }
`