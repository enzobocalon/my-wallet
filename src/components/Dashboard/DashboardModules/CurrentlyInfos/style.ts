import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: #2E313E;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    min-height: 100%;
    border-radius: 20px;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;

    #transactions{
        font-size: .8rem;
        margin-top: 1rem;
        cursor: pointer;
        transition: all .3s ease;
    }

    #transactions:hover{
        color: rgb(254,97,82);
        transition: all .3s ease;
    }

`

export const Infos = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`

export const CurrentInfo = styled.div`
    padding-right: 2rem;
    border-right: 1px solid #525399;
    h1{
        font-size: 2.5rem;
    }

    &:last-of-type{
        border-right: 1px solid transparent;
    }
`