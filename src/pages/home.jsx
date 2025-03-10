import { useEffect, useState } from "react";
import { dataPokemons } from "../services/api-Pokemon";

export const Home = () => {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        const fecthData = async () => {
            const pokemons = await dataPokemons()
            console.log(pokemons);
            setPokemons(pokemons)
        }
        fecthData()
    }, [])

    return (
        <main>
            <h1>Lista de Pokemon</h1>
            <ul>
                {pokemons.length > 0 ? (pokemons.map((pokemon) => (
                    <li key={pokemon.id}>
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.sprites.other["official-artwork"]?.front_default ?? pokemon.sprites.other["official-artwork"]?.front_shiny} alt={pokemon.name} />
                    </li>))
                ) : (<p>Nenhum Pokemon encontrado.</p>)
                }
            </ul>
        </main>
    );
}