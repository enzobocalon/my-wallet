import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const HeaderFirstCol = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;

    ul{
        display: flex;
        align-items: center;
        gap: 2rem;
        list-style: none;
    }
`

export const HeaderSecondCol = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    button:first-child {
        background-color: #525399;
        color: white;
        width: 100px;
        height: 45px;
        cursor: pointer;
        border: none;
        border-radius: 15px;
        transition: all .3s ease-in;
    }

    button:first-child:hover{
        opacity: .9;
        transition: all .3s ease-in;
    }

    button {
        background-color: transparent;
        border: none;
        color: white;
    }
`