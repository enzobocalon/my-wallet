import styled from "styled-components";

interface IProps {
    type : string;
}

export const Container = styled.div`
    width: 40%;
    height: 40%;
    
    h1{
        font-size: 2rem;
        margin-left: 1.4rem;
    }

    .money{
        font-size: 1.5rem;
    }
`

export const MyBalanceContainer = styled.div`
    background-color: #1f1d2c;
    margin-top: 2rem;
    padding: 1.5rem;
    border-radius: 12px;
`

export const BalanceContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1rem;
`

export const iconBg = styled.div<IProps>`
    background-color: ${props => props.type === 'available' ? '#63DA9E' : '#E26B8C'};
    height: fit-content;
    padding: .4rem;
    border-radius: 12px;
    margin: 10px 1rem;
`

export const AvailableBalance = styled.div`
    display: flex;
    padding: 1rem;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        #available-balance, p{
            font-size: .8rem;
        }

        p {
            margin-top: 1rem;
            cursor: pointer;
        }

        p:hover{
            color: #63DA9E;
            transition: all .3s ease;
        }
    }

`

export const PendingBalance = styled.div`
    display: flex;
    background-color: #2C2F37;
    padding: 1rem;
    border-radius: 20px;
    width: 50%;

    div {
        display: flex;
        flex-direction: column;

        #pending, p{
            font-size: .8rem;
        }

        p{ 
            margin-top: 1rem;
            cursor: pointer;
        }

        p:hover{
            color: #E26B8C;
            transition: all .3s ease;
        }
    }
`

export const Last = styled.div`
    margin: 1rem 0;
    background-color: #1f1d2c;
    border-radius: 12px;
    display: flex;
    align-items: center;
    padding: 1.5rem;
    justify-content: space-between;

    h1{
        font-size: 1.2rem;
        background-color: #2C2F37;
        padding: 1rem;
        border-radius: 12px;
    }

    div {
        display: flex;
        flex-direction: column;

        span{
            font-weight: 200;
        }
        

        p{
            font-size: 1.5rem;
            font-weight: 500;
        }
    }
`