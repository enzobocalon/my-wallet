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

    h1{
        margin-top: 1rem;
    }

    #transactions{
        font-size: .8rem;
        margin-top: 1rem;
        cursor: pointer;
        transition: all .3s ease;

        @media (max-width: 900px){
            margin-bottom: 1rem;
        }
    }

    #transactions:hover{
        color: rgb(254,97,82);
        transition: all .3s ease;
    }

    @media (max-width: 900px){
        width: 80vw;
    }

    @media (max-width: 650px){
        width: 78vw;
    }
    @media (max-width: 470px){
        width: 75vw;
    }
    @media (max-width: 340px){
        width: 72vw;
    }
`

export const Infos = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    
    @media (max-width: 900px){
        flex-direction: column;
    }
    `

export const CurrentInfo = styled.div`
    padding: 0 1rem;
    border-right: 1px solid #525399;
    text-align: center;
    width: 100%;
    h1{
        font-size: 2.2rem;
        margin-top: 0 !important;
    }
    span{
        font-size: .8rem;
    }

    &:last-of-type{
        border-right: 1px solid transparent;

        @media (max-width: 900px){
            border-right: none;
            border-bottom: none;
        }
    }

    @media (max-width: 1240px){
        h1{
            font-size: 2rem;
        }
    }
    @media (max-width: 1180px){
        h1{
            font-size: 1.5rem;
        }
    }
    @media (max-width: 1100px){
        h1{
            font-size: 1.2rem;
        }
    }

    @media (max-width: 900px){
        border-right: none;
        border-bottom: 1px solid #525399;
        margin: 0 1rem;
        padding: 0;
    }
    

`