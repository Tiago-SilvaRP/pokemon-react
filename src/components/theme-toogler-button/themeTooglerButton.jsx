import sun from "../../images/sun.png"
import moon from "../../images/moon.png"
import { S } from "./themeTooglerButton.style";
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext";
import { themes } from "../../contexts/themes";

export const ThemeTooglerButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
        <div>
            <S.StyledButon onClick={() => setTheme(
                theme === themes.dark ? themes.light : themes.dark
            )}>
                <S.Img src={theme === themes.dark ? moon : sun}
                    alt={theme === themes.dark ? 'Tema escuro' : 'Tema claro'}  
                />
            </S.StyledButon>
        </div>
    )
}