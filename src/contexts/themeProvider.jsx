import { useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles/globalStyle";
import { ThemeContext } from "./themeContext";
import { themes } from "./themes";

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(themes.dark);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <StyledThemeProvider theme={theme}>
                <GlobalStyle />
                {children}
            </StyledThemeProvider>
        </ThemeContext.Provider>
    );
};