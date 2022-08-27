import styled from 'styled-components'
import bg from '../../../../assets/ccbg.svg'

export const Container = styled.div`
    background-image: url(${bg});
    background-size: cover;
    border-radius: 12px;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    gap: 1rem;
    padding: 1rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;


    h1{
        font-size: 2rem;
    }
`

export const CCFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        gap: .8rem;
    }

    img{
        width: 10%;
    }
`
