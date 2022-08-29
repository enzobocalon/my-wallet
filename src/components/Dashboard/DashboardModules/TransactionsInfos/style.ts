import styled from "styled-components";

export const Container = styled.div`
    background-color: #2E313E;
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    border-radius: 12px;
    padding: .6rem 1rem;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;

    #viewTransactions{
        margin-top: 10px;
        text-align: center;
        cursor: pointer;
        font-size: .8rem;
        transition: all .3s ease;

        &:hover{
            color: rgb(254,97,82);
            transition: all .3s ease;
        }
    }
`

export const FirstRow = styled.div`
    display: flex;
    gap: 1rem;
    width: 100%;

`

export const CCLimit = styled.div`
    width: 100%;
    padding-right: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            font-size: .8rem;
            margin-top: .5rem;
        }
    }

`

export const CCLimitHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: .3rem;
    span{
        font-size: 1rem !important;
        margin-top: 0 !important;
    }
    svg{
        cursor: pointer
    }
`



export const TransactionsHeader = styled.div`
    width: 100%;
    padding-bottom: .5rem;
    border-bottom: 1px solid #343947;
`
