import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    li{
        list-style-type: none;
    }

    a{
        text-decoration: none;
    }
`