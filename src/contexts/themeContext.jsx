/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";

export const themes = {
    light: {
        color: '#000',
        background: 'linear-gradient(to bottom,rgb(107, 228, 107), #05529e)',
    },
    dark: {
        color: '#fff',
        background: 'linear-gradient(to bottom, #6A0DAD, #000000)',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(themes.dark)

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <StyledThemeProvider theme= { theme }>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    )
}