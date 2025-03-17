import { Link } from "react-router-dom"
import pokebaal from '../../images/pokebola.png'
import logoPokemon from '../../images/logoPokemon.png'
import styled from "styled-components"
import { ThemeTooglerButton } from "../theme-toogler-button/themeTooglerButton"
import { useContext } from "react"
import { ThemeContext } from "../../contexts/themeContext"

export const Header = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <HeaderContainer>
            <Link to='/'>
                <PokeHome >
                <Img src={pokebaal} alt="PokeBaal" />
                <HomeText style={{color: theme.color}}>Home</HomeText>
                </PokeHome>
            </Link>
            <Logo src={logoPokemon} alt="Logo Pokemon" />
            <ThemeTooglerButton />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    width: 100%;

    @media(max-width: 560px) {
        flex-direction: column;
        margin-bottom: 200px;
    }
`

const PokeHome = styled.div`
    display: flex;
    align-items: center;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`

const HomeText = styled.h3`
    margin-left: 10px;
`

const Img = styled.img`
    height: 50px;
    
    &:hover{
        scale: 1.1;
    }
`

const Logo = styled.img`
    height: 150px;
`


