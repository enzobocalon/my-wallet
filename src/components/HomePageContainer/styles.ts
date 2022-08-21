import styled from 'styled-components'

export const Container = styled.main`
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
`



export const LeftContainer = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    

    h1{
        font-size: 3rem;
    }

    ul {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        list-style: none;
        margin-top: 1rem;
    }

    li{
        display: flex;
        align-items: center;
        gap: .5rem;
        border: 1px solid #525399;
        padding: .7rem;
        border-radius: 30px;
    }

    button{
        background-color: #525399;
        color: white;
        border: none;
        padding: 1rem;
        width: 40%;
        margin-top: 2rem;
        border-radius: 20px;
        cursor: pointer;
    }
`

export const RightContainer = styled.div`
    width: 45%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    img {
        width: 100%;
    }
`