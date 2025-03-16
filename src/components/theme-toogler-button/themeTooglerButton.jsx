import { Button } from "../button/button";
import { ThemeContext, themes } from "../../contexts/themeContext"
import { useContext } from "react"
import sun from "../../images/sun.png"
import moon from "../../images/moon.png"
import { styled } from "styled-components";

export const ThemeTooglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    console.log(theme);
    
    return (
        <div>
            <StyledButon onClick={() => setTheme(
                theme === themes.dark ? themes.light : themes.dark
            )}>
                <Img src={theme === themes.dark ? moon : sun}
                    alt={theme === themes.dark ? 'Tema escuro' : 'Tema claro'}  
                />
            </StyledButon>
        </div>
    )
}

const StyledButon = styled(Button)`
    background-color: transparent;
    height: 50px;
    border: transparent;
    cursor: pointer;

    &:hover{
    scale: 1.1
    }
`
const Img = styled.img`
    height: 100%
`