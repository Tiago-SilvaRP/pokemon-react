/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from "react";

export const themes = {
    light: {
        color: '#000',
        background:'linear-gradient(to bottom, #1E90FF, #00CED1);',
    },
    dark: {
        color: '#fff',
        background:'linear-gradient(to bottom, #6A0DAD, #000000);',
    }
}

export const ThemeContext = createContext({})

export const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(themes.dark)

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}