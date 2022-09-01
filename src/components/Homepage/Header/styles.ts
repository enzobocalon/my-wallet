import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    width: 100%;
    height: 5rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const HeaderFirstCol = styled.div`
    display: flex;
    align-items: center;
    gap: 4rem;
    img{
        width: 200px;
    }

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

    button {
        color: white;
        background-color: transparent;
        border: none;
        cursor: pointer;
    }
    img{
        height: 50px;
        width: 50px;
        border-radius: 12px;
    }
`

export const LoginButton = styled.button`
        background-color: #525399 !important;
        width: 100px;
        height: 45px;
        border-radius: 15px;
        transition: all .3s ease-in;

        &:hover{
        opacity: .9;
        transition: all .3s ease-in;
        }
`

export const AlreadyLoggenIn = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }
`