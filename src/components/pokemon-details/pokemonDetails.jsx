import { useContext, useEffect, useState } from "react";
import { dataPokemonId } from "../../services/api-Pokemon";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../contexts/themeContext";
import styled from "styled-components";

export const PokemonDetails = () => {
    useContext(ThemeContext)
    const [pokemon, setPokemon] = useState({});
    const [abilitiesDescription, setAbilitiesDescription] = useState({})
    const { id } = useParams()
    const amountMoves = 4;

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const pokemon = await dataPokemonId(id)
            setPokemon(pokemon)

            fetchAbilitiesDescripion(pokemon.abilities)
        }
        fetchPokemonDetails()
    }, [id])

    const fetchAbilitiesDescripion = async (abilities) => {
        const description = {}
        if (!abilities) return

        await Promise.all(
            abilities.map(async (a) => {
                try {
                    const response = await fetch(a.ability.url)
                    const data = await response.json()

                    //usei o find porque precisava que me retornasse apenas um elemento que satisfaz minha condição
                    const descriptionEntry = data.flavor_text_entries.find(
                        (entry) => entry.language.name === "en"
                    );
                    //utilizei um objeto DINAMICO, onde ele retorna o nome da habilidade e o texto dela, ou seja ele vai trazer o nome da habilidade e o texto dela dinamicamente, trazendo um objeto e nao um array evitando codigos desnecessarios e menos codigos
                    description[a.ability.name] = descriptionEntry
                        ? descriptionEntry.flavor_text
                        : "Descrição não encontrada."

                } catch (error) {
                    console.error('Erro ao buscar texto de habilidades.', error)
                }
            })
        )
        setAbilitiesDescription(description)
    }

    return (
        <Main>
            <Card>
                <TitleCard>{pokemon.name}</TitleCard>
                <Type>
                    <h3>Tipo</h3>
                    <ul>
                        {pokemon.types && pokemon.types.length > 0 ?
                            pokemon.types?.map((t) => (
                                <Li key={t.type.name}>
                                    {t.type.name}
                                </Li>
                            )) : (
                                <p>Tipo não encontrado</p>
                            )}
                    </ul>
                </Type>

                <Img src={
                    pokemon.sprites?.other["official-artwork"]?.front_default ??
                    pokemon.sprites?.other["official-artwork"]?.front_shiny
                } alt={pokemon.name} />
                <Description>
                    <Abilitie>
                        <h3>Habilidades</h3>
                        <UlAbilitieMoves>
                            {pokemon.abilities?.map((abilities, index) => (
                                <Li key={index}>
                                    <p>
                                        <strong>{abilities.ability.name}: </strong>
                                        {abilitiesDescription[abilities.ability.name]
                                            ?? "Loading..."}
                                    </p>
                                </Li>
                            ))}
                        </UlAbilitieMoves>
                    </Abilitie>
                    <Moves>
                        <h3>Moves</h3>
                        <UlAbilitieMoves>
                            {pokemon.moves?.slice(0, amountMoves).map((moves) => (
                                <Li key={moves.move.name}>{moves.move.name}</Li>
                            ))}
                        </UlAbilitieMoves>
                    </Moves>
                </Description>
            </Card>
        </Main>
    )
}

const backgroundTitle = `
    background: rgba(255, 145, 77, 0.2);
`

const Main = styled.main`
    display: flex;
    margin-top: 30px;
    background: linear-gradient(135deg, #ffdd57, #ff914d);
    color: ${(children) => children.theme.color};
    border-radius: 15px;
    width: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

    @media (max-width: 500px) {
        width: 90%;
        img {
            height: 200px;
        }
    }
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15px;
    width: 100%;
`

const TitleCard = styled.h3`
    margin-bottom: 10px;
    width:100%;
    text-align: center;
    padding: 7px;
    border-radius: 5px;
    font-weight: bold;
    ${backgroundTitle};
`

const Type = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 7px;
    ${backgroundTitle};
    border-radius: 8px;

    & ul {
        display: flex;
        gap: 10px;
    }
`

const Li = styled.li`
    padding: 5px 10px;
    background: #ff914d;
    border-radius: 5px;
    font-weight: bold;
`

const Img = styled.img`
    height: 250px;
    margin: 15px;
    border-radius: 10px;
    background:#f7f7e9;
`

const Description = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: solid 1px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 5px;
    width: 100%;

    & h3 {
        margin-bottom: 5px;
    }
`

const Abilitie = Description;

const Moves = styled(Description)`
    margin-top: 10px;
    width: 100%;
`

const UlAbilitieMoves = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
`