/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useEffect } from "react";
import { GlobalStyle } from "../styles/globalStyle";

export const themes = {
    light: {
        color: '#000',
        background: 'linear-gradient(to bottom,rgb(107, 228, 107), #05529e)',
        // transition: 'background 0.8s ease-in-out',
    },
    dark: {
        color: '#fff',
        background: 'linear-gradient(to bottom, #6A0DAD, #000000)',
        // transition: 'background 0.8s ease-in-out',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = ({ children }) => {

    const [theme, setTheme] = useState(themes.dark)

    useEffect(() => {
        document.body.style.color = theme.color;
        document.body.style.background = theme.background;
        document.body.style.transition = theme.transition;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <GlobalStyle />
            {children}
        </ThemeContext.Provider>
    )
}