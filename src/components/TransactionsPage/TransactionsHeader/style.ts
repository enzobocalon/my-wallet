import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 2rem;
`

export const LeftContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 30%;
`
export const RightContainer = styled.div`
    margin-right: 2rem;
`

export const NewTransaction = styled.button`
    cursor: pointer;
    background-color: rgba(82,83,153,1);
    padding: 8px;
    color: white;
    font-weight: 500;
    outline: none;
    border: none;
    border-radius: 8px;
    transition: all .3s ease;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;

    &:hover{
    background-color: rgba(82,83,153,.9);
    transition: all .3s ease;
    }
`