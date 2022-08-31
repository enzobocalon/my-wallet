import styled from 'styled-components'

interface IProps {
    type: string
}

export const TransactionContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: fit-content;
    max-height: 400px;
`

export const Transaction = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: .5rem;
    border-bottom: 1px solid #343947;
    padding-bottom: .5rem;
`

export const TransactionLeft = styled.div`
    display: flex;
`

export const TransactionIcon = styled.div<IProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${props => props.type === 'expenses' ? "#FE4267" : "#226FEE"};
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

`