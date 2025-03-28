import { Button } from "../button/button";
import sun from "../../images/sun.png"
import moon from "../../images/moon.png"
import { styled } from "styled-components";
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext";
import { themes } from "../../contexts/themes";

export const ThemeTooglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    
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
    transition: all 0.3s ease-in-out;

    &:hover{
    scale: 1.1;
    }
`
const Img = styled.img`
    height: 100%
`