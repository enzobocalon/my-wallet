import styled from "styled-components";

export const BlackOutLayer = styled.div`
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, .5);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 11;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Container = styled.div`
    z-index: 12;
    background-color: #2E313E;
    height: fit-content;
    width: 30%;
    border-radius: 12px;
    padding: 1rem;
    box-shadow: rgb(0 0 0 / 35%) 0px 5px 15px;
`

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg{
        cursor: pointer;
        transition: all .3s ease;
    }
    svg:hover{
        background-color: #272836;
        border-radius: 50%;
        transition: all .3s ease;
    }
`

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
`

export const FormField = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    input[type=text] {
        border: none;
        border-radius: 8px;
        padding: 2px 1rem;
        width: 100%;
    }
`

export const RadioButtons = styled.div`
    display: flex;
    gap: 1rem;
`

export const AddTransactionButton = styled.button`
    cursor: pointer;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 12px;
    background-color: rgba(82,83,153,1);
    padding: .5rem 0;
    transition: all .3s ease;

    &:hover{
        background-color: rgba(82,83,153,.8);
        transition: all .3s ease;
    }
`

export const Calendar = styled.div`
    .react-datepicker__day--selected {
        background-color: inherit;
        color: rgb(255, 58, 249) !important;
        border: 2px solid rgb(255, 58, 249);
    }
    .react-datepicker{
        font-family: 'Poppins', sans-serif !important;
        background-color: #232730;
        border: none;
        margin-top: 1px;
    }
    
    .react-datepicker__header{
        background-color: #2C333E;
        border: none;
        box-shadow: rgb(0 0 0 / 20%) 0px 5px 15px;
    }
    .react-datepicker__month{
        background-color: #232730;
    }
    .react-datepicker__current-month{
        color: white;
    }
    .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::before, .react-datepicker-popper[data-placement^=bottom] .react-datepicker__triangle::after{
        border-bottom-color: transparent;
    }
    .react-datepicker__day{
        color: #f3f3f3f3;
    }
    .react-datepicker__day:hover{
        background-color: rgb(255, 58, 249);
    }
    .react-datepicker__day-name{
        color: #4D505D;
    }

    .react-datepicker__day--keyboard-selected{
        background-color: inherit;
        color: rgb(255, 58, 249) !important;
        border: 2px solid rgb(255, 58, 249);
    }

    .react-datepicker__navigation{
        top: 6px;
    }

`