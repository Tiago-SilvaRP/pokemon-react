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
            <Logo src={logoPokemon} alt="Logo Pokemon" />
            {/* <i class="fas fa-moon"></i> */}
            <i className="fas fa-moon" style={{ color: "#FFD43B", fontSize: "24px" }}></i>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 70px;
    width: 100%;
    background-color: hsl(210, 2.80%, 57.60%);
`

const Img = styled.img`
    height: 50px;
`

const Logo = styled.img`
    height: 150px;
`