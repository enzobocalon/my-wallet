import styled from "styled-components";

interface IProps {
    showing: boolean
}


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
    position: relative;
    span{
        font-size: 1rem !important;
        margin-top: 0 !important;
    }
    #more{
        transition: all .3s ease;
        cursor: pointer;
    }

    #more:hover{
        background-color: #272836;
        border-radius: 50%;
        transition: all .3s ease;
    }

`

export const LimitMenu = styled.div<IProps>`
    position: absolute;
    background-color: #1E1C2C;
    width: fit-content;
    padding: .6rem;
    height: 45px;
    right: 6px;
    top: 29px;
    z-index: 10;
    border-radius: 10px 0 10px 10px;
    opacity: ${props => props.showing ? '1' : '0'};
    pointer-events: ${props => props.showing ? 'all' : 'none'};
    transition: all .3s ease;
    cursor: pointer;

    div {
        display: flex;
        align-items: center;
        gap: .5rem;
        padding: .3rem .5rem;
        transition: all .3s ease;
    }

    &:after{
        content: '';
        position: absolute;
        display: block;
        border-color: transparent transparent #1E1C2C transparent;
        width: 0;
        border-style: solid;
        border-width: 0 5px 5px 5px;
        height: 0;
        right: 0;
        top: -4px;
    }

    &:hover > div{
        background-color: #272836;
        border-radius: 10px;
        transition: all .3s ease;
    }
    
`

export const TransactionsHeader = styled.div`
    width: 100%;
    padding-bottom: .5rem;
    border-bottom: 1px solid #343947;
`
