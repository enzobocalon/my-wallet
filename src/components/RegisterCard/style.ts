import styled from 'styled-components';
import background from '../../assets/registerbg.svg'

export const RegisterWrapper = styled.main`
    z-index: 0;
    height: calc(100vh - 5rem);
    display: flex;
    justify-content: center;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;

`

export const RegisterDiv = styled.div`
    height: 80%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-top: 5rem;

    #first {
        position: absolute;
        top: 55%;
        left: 80%;
        width: 100%;
        z-index: 1;
    }

    #second{
        position: absolute;
        top: -100px;
        right: 80%;
        width: 100%;
        z-index: 0;
    }
`

export const RegisterFields = styled.div`
    display: flex;
    width: 100%;
    text-align: center;
    flex-direction: column;
    backdrop-filter: blur(12px) saturate(196%);
    -webkit-backdrop-filter: blur(12px) saturate(196%);
    background-color: rgba(17, 25, 40, 0.56);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
    padding: 2rem;

    h1{
        font-size: 1.5rem;
    }
`

export const RegisterField = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    div{
        display: flex;
        align-items: center;
        background-color: #1f2a37;
        padding: .8rem;
        border-radius: 10px;
    }

    input {
        background-color: transparent;
        outline: none;
        border: none;
        padding: 0 .5rem;
        color: white;
        width: 100%;
    }
`

export const RegisterButton = styled.button`
    background-color: #525399;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    cursor: pointer;
`

export const PCustom = styled.p`
    margin-top: 1rem;

    span{
        color: #7475c4;
        transition: all .3s ease;
    }
    span:hover{
        opacity: .8;
        transition: all .3s ease;
    }
`