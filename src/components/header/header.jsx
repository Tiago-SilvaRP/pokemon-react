import { Link } from "react-router-dom"
import pokebaal from '../../images/pokebola.png'
import logoPokemon from '../../images/logoPokemon.png'
import styled from "styled-components"

export const Header = () => {
    return (
        <HeaderContainer>
            <Link to='/'>
                <Img src={pokebaal} alt="PokeBaal" />
            </Link>
            <Img src={logoPokemon} alt="Logo Pokemon" />
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-evenly;
    height: 70px;
    width: 100%
`

const Img = styled.img`
    height: 100%
`