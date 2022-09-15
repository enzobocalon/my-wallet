import styled from 'styled-components'

interface IProps {
    type: string
}

export const Transaction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: .5rem;
    border-bottom: 1px solid #343947;
    padding-bottom: .5rem;
    transition: all .3s ease;

    &:hover #delete{
        opacity: 1;
        pointer-events: all;
        cursor: pointer;
        transition: all .3s ease;
    }
`

export const TransactionLeft = styled.div`
    display: flex;
`

export const TransactionIcon = styled.div<IProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.type === 'incoming' ? "#226FEE" : "#FE4267"};
    border-radius: 12px;
    height: 50px;
    width: 50px;
`

export const TransactionInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 1rem;
`

export const TransactionRight = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;

    svg{
        opacity: 0;
        pointer-events: none;
    }
`