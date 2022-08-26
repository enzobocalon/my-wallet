import styled from 'styled-components'

export const Container = styled.div`
    margin-top: 1rem;
    background-color: #2F303E;
    border-radius: 12px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
`

export const ContainerRow = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    p{
        font-size: 1.5rem;
        font-weight: 500;
    }
`

export const ButtonAdd = styled.div`
    background-color: #525399;
    border-radius: 12px;
    padding: 1rem;
    cursor: pointer;
    opacity: 1;
    transition: all .3s ease;

    &:hover{
        opacity: .9;
    }
`

export const ButtonCheck = styled.div`
    padding: 1rem;
    background-color: white;
    color: #525399;
    border-radius: 12px;
    font-size: 500;
    cursor: pointer;
    opacity: 1;
    transition: all .3s ease;

    &:hover{
        opacity: .9;
    }
`