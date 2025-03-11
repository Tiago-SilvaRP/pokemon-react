import { useEffect, useState } from "react";
import { dataPokemons } from "../services/api-Pokemon";

export const Home = () => {
    const [pokemons, setPokemons] = useState({});

    useEffect(() => {
        const fecthHome = async () => {
            const pokemons = await dataPokemons()
            // console.log(pokemons);
            setPokemons(pokemons)
        }
        fecthHome()
    }, [])

    return (
        <main>
            <h1>Lista de Pokemons</h1>
            <ul>
                {pokemons.length > 0 ? (pokemons.map((pokemon) => (
                    <li key={pokemon.id} className="cards">
                        <h3>{pokemon.name}</h3>
                        <img src={pokemon.sprites.other["official-artwork"]?.front_default ?? pokemon.sprites.other["official-artwork"]?.front_shiny} alt={pokemon.name} />
                    </li>))
                ) : (<p>Nenhum Pokemon encontrado.</p>)
                }
            </ul>

                <button>Clique aki para carregar mais Pokemons</button>
        </main>
    );
}