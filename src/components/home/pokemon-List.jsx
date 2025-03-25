import { useContext, useEffect, useState } from "react";
import { dataPokemons } from "../../services/api-Pokemon";
import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../contexts/themeContext";
import { styled } from "styled-components"

export const ListPokemons = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false);

    useContext(ThemeContext)

    useEffect(() => {
        const fetchListPokemons = async () => {
            const pokemons = await dataPokemons()
            setPokemons(pokemons)
        }

        fetchListPokemons()
    }, [])

    const handleLoadPokemons = async () => {
        if (loading) return; // vai ve se ta carregando, e evita do usuario fica clicando varias vezes

        setLoading(true) // coloca antes pra botao fica desativado
        const newOffset = offset + 10
        setOffset(newOffset)

        const pokemons = await dataPokemons(newOffset)
        setPokemons(newPokemons => [...newPokemons, ...pokemons])
        //se inverter ...newPokemons com ...pokemons quando for atualizado  o state os novos pokemons ficaram antes doa antigos
        setLoading(false)
    }


    return (
        <Main>
            <Title>Clique em um pokemon para ver mais detalhes sobre ele!</Title>
            <Cards>
                {pokemons.length > 0 ? (pokemons.map((pokemon) => (
                    <Card key={pokemon.id}>
                        <StyledLink
                            to={`/pokemon/${pokemon.id}`}>
                            <h3>{pokemon.name}</h3>
                            <Img src={
                                pokemon.sprites?.other["official-artwork"]?.front_default ??
                                pokemon.sprites?.other["official-artwork"]?.front_shiny
                            } alt={pokemon.name} />
                        </StyledLink>
                    </Card>))
                ) : (<p>Carregando pokemons...</p>)
                }
            </Cards>

            <StyledButton onClick={handleLoadPokemons}
                disabled={loading || pokemons.length === 0}>
                {loading ? "Carregando..." : "Carregar mais Pokemons"}
            </StyledButton>
        </Main>
    )
}
const boxShadow = `
    box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
        rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`

const SelectContainer = styled.div`
    display: flex;
    align-items: center;
`;

const Select = styled.select`
    height: 60px;
    padding: 10px;
    font-size: 16px;
    border-radius: 5px;
    background: ${(children) => children.theme.background};
    color: ${(children) => children.theme.color};
    ${boxShadow};
`;


const Main = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    color: ${(children) => children.theme.color};
`

const Title = styled.h1`
    text-align: center;
    padding: 10px;
    margin: 40px 0;
`

const Cards = styled.ul`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 40px;
`

const Card = styled.li`
    text-align: center;
    width: 300px;
    padding: 15px;
    border-radius: 15px;
    transition: 0.3s ease-in-out;
    background: ${(children) => children.theme.background};
    ${boxShadow};

    &:hover {
        transform: scale(1.1);
    }
`

const StyledLink = styled(Link)`
    color: ${(children) => children.theme.color};
`

const Img = styled.img`
    width: 100%;
`

const StyledButton = styled(Button)`
    height: 50px;
    border: none;
    border-radius: 5px;
    padding: 10px;
    margin: 40px;
    cursor: pointer;
    font-size: 20px;
    transition: 0.3s ease-in-out;
    ${boxShadow};
    color: ${(children) => children.theme.color};
    background: ${(children) => children.theme.background};

        &:hover {
            transform: scale(1.1);
        }
`