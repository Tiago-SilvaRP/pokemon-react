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
        background: ${(children) => children.theme.background};
        min-height: 100vh;
        padding-bottom: 20px;
    }

    li {
        list-style-type: none;
    }

    a {
        text-decoration: none;
    }
`