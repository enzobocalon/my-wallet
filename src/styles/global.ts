import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        box-sizing: border-box;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
    }

    html, body{
        height: 100vh;
        width: 100%;
        background-color: #1f1d2c;
        overflow-x: hidden;
        overflow-y: auto;
        color: white;
    }

    a {
        color: white;
        text-decoration: none;
    }

`