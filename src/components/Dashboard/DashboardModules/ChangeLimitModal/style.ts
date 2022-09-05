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
    height: 250px;
    width: 500px;
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

export const Body = styled.div`
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
`

export const BodyInfo = styled.div`
    display: flex;
    justify-content: space-between;

    input::-webkit-inner-spin-button, input::-webkit-outer-spin-button {
        -moz-appearance: textfield;
        -webkit-appearance: none;
        margin: 0;
    }
    input {
        border-radius: 8px;
        border: none;
        outline: none;
        padding: 1px 10px;
        color: #2E313E;
    }

    div{
        display: flex;
        flex-direction: column;
        span{
            font-size: .6rem;
            color: #FE4267;
        }
    }
`

export const Button = styled.button`
    background-color: rgb(82,83,153);
    color: white;
    font-weight: 500;
    outline: none;
    border: none;
    border-radius: 12px;
    padding: .5rem;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        background-color: rgba(82,83,153, .8);
        transition: all .3s ease;
    }
`