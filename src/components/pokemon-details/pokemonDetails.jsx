import { useContext, useEffect, useState } from "react";
import { dataPokemonId } from "../../services/api-Pokemon";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../contexts/themeContext";
import { S } from "./pokemonDetails.style";

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

                    const descriptionEntry = data.flavor_text_entries.find(
                        (entry) => entry.language.name === "en"
                    );

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
        <S.Main>
            <S.Card>
                <S.TitleCard>{pokemon.name}</S.TitleCard>
                <S.Type>
                    <h3>Tipo</h3>
                    <ul>
                        {pokemon.types && pokemon.types.length > 0 ?
                            pokemon.types?.map((t) => (
                                <S.Li key={t.type.name}>
                                    {t.type.name}
                                </S.Li>
                            )) : (
                                <p>Tipo não encontrado</p>
                            )}
                    </ul>
                </S.Type>

                <S.Img src={
                    pokemon.sprites?.other["official-artwork"]?.front_default ??
                    pokemon.sprites?.other["official-artwork"]?.front_shiny
                } alt={pokemon.name} />
                <S.Description>
                    <S.Abilitie>
                        <h3>Habilidades</h3>
                        <S.UlAbilitieMoves>
                            {pokemon.abilities?.map((abilities, index) => (
                                <S.Li key={index}>
                                    <p>
                                        <strong>{abilities.ability.name}: </strong>
                                        {abilitiesDescription[abilities.ability.name]
                                            ?? "Loading..."}
                                    </p>
                                </S.Li>
                            ))}
                        </S.UlAbilitieMoves>
                    </S.Abilitie>
                    <S.Moves>
                        <h3>Movimentos</h3>
                        <S.UlAbilitieMoves>
                            {pokemon.moves?.slice(0, amountMoves).map((moves) => (
                                <S.Li key={moves.move.name}>{moves.move.name}</S.Li>
                            ))}
                        </S.UlAbilitieMoves>
                    </S.Moves>
                </S.Description>
            </S.Card>
        </S.Main>
    )
}