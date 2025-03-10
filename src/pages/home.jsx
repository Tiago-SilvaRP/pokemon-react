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
        <div>
            <h1>Lista de Pokemon</h1>
            <ul>
                {pokemons.length > 0 ? (pokemons.map((pokemon, index) => (
                    <li key={index}>
                        <h3>{pokemon.name}</h3>
                    </li>))
                ) : (<p>Nenhum Pokemon encontrado.</p>)
                }
            </ul>
        </div>
    );
}