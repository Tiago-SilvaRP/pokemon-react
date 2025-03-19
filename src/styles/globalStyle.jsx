import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    #root {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        justify-content: center;
        align-items: center;
        font-family: 'Poppins', sans-serif;
    }

    body {
        background: ${(props) => props.theme?.background};
        color: ${(props) => props.theme?.color}
        transition: color 0.8s ease-in-out;
        min-height: 100vh;
        margin-top: 30px
    }

    li{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }
`