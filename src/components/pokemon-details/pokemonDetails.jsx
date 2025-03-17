import { useContext, useEffect, useState } from "react";
import { dataPokemonId } from "../../services/api-Pokemon";
import { useParams } from "react-router-dom";
import { ThemeContext } from "../../contexts/themeContext";


export const PokemonDetails = () => {
    const { theme } = useContext(ThemeContext)
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
        <main style={{color: theme.color}}>
            <div className="card">
                <h3>{pokemon.name}</h3>
                <div className="types">
                    <h3>Tipos</h3>
                    <ul>
                        {pokemon.types && pokemon.types.length > 0 ?
                            pokemon.types?.map((t) => (
                                <li key={t.type.name}>
                                    {t.type.name}
                                </li>
                            )) : (
                                <p>Tipo não encontrado</p>
                            )}
                    </ul>
                </div>

                <img src={
                    pokemon.sprites?.other["official-artwork"]?.front_default ??
                    pokemon.sprites?.other["official-artwork"]?.front_shiny
                } alt={pokemon.name} />
                <div className="description">
                    <h3><strong>Habilidades:</strong></h3>
                    <ul>
                        {pokemon.abilities?.map((abilities, index) => (
                            <li key={index}>
                                <p>
                                    <strong>{abilities.ability.name}: </strong>
                                    {abilitiesDescription[abilities.ability.name]
                                        ?? "Loading..."}
                                </p>
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

