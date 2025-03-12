import { useEffect, useState } from "react";
import { dataPokemons } from "../../services/api-Pokemon";
import { Button } from "../button/button";

export const Home = () => {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchHome = async () => {
            const pokemons = await dataPokemons()
            setPokemons(pokemons)
        }
        fetchHome()
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
        <main>
            <h1>Clique em um pokemon para ver mais detalhes sobre ele!</h1>
            <ul>
                {pokemons.length > 0 ? (pokemons.map((pokemon) => (
                    <li key={pokemon.id} className="cards">
                        <h3>{pokemon.name}</h3>
                        <img src={
                            pokemon.sprites?.other["official-artwork"]?.front_default ??
                            pokemon.sprites?.other["official-artwork"]?.front_shiny
                        } alt={pokemon.name} />
                    </li>))
                ) : (<p>Carregando pokemons...</p>)
                }
            </ul>

            <Button onClick={handleLoadPokemons} 
                disabled={loading || pokemons.length === 0}>
                {loading ? "Carregando..." : "Carregar mais Pokemons"}
            </Button>
        </main>
    )
}