import { useEffect, useState } from "react";
import { dataPokemonId } from "../../services/api-Pokemon";
import { useParams } from "react-router-dom";
// import styled from "styled-components";

export const PokemonDetails = () => {
    const [pokemon, setPokemon] = useState([]);
    const { id } = useParams()
    const amountMoves = 4;

    useEffect(() => {
        const fetchPokemonDetails = async () => {
            const pokemon = await dataPokemonId(id)
            setPokemon(pokemon)
        }
        fetchPokemonDetails()
    }, [id])

    return (
        <main>
            <div className="card">
                <h3>{pokemon.name}</h3>
                <ul>
                    {pokemon.length != 0 ? pokemon.types?.map((t) => (
                        <li key={t.type.name}>{t.type.name}</li>
                    )) : <p>Tipo não encontrado</p>}
                </ul>
                
                <img src={
                    pokemon.sprites?.other["official-artwork"]?.front_default ??
                    pokemon.sprites?.other["official-artwork"]?.front_shiny
                } alt={pokemon.name} />
                <div className="description">
                    <h3><strong>Abilities:</strong></h3>
                    <ul>
                        {pokemon.abilities?.map((abilities, index) => (
                            <li key={index}>
                                {abilities.ability.name}
                            </li>
                        ))}
                    </ul>
                    <h3><strong>Moves:</strong></h3>
                    <ul>
                        {pokemon.moves?.slice(0, amountMoves).map((moves) => (
                            <li key={moves.move.name}>{moves.move.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </main>
    )
}

// const Card = styled.card`

// `,