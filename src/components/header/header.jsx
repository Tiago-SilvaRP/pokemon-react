import { Link } from "react-router-dom"
import pokebaal from '../../images/bola.png'
import logoPokemon from '../../images/logoPokemon.png'
import { ThemeTooglerButton } from "../theme-toogler-button/themeTooglerButton"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"
import { S } from "./header.style"

export const Header = () => {
    useContext(ThemeContext);

    return (
        <S.HeaderContainer>
            <Link to='/'>
                <S.PokeHome >
                    <S.Img src={pokebaal} alt="PokeBaal" />
                    <S.HomeText>Home</S.HomeText>
                </S.PokeHome>
            </Link>
            <S.Logo src={logoPokemon} alt="Logo Pokemon" />
            <ThemeTooglerButton />
        </S.HeaderContainer>
    )
}
