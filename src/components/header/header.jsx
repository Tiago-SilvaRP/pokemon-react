import { Link } from "react-router-dom"
import pokebaal from '../../images/pokebola.png'
import logoPokemon from '../../images/logoPokemon.png'
import styled from "styled-components"
import { ThemeTooglerButton } from "../theme-toogler-button/themeTooglerButton"

export const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Img src={pokebaal} alt="PokeBaal" />
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