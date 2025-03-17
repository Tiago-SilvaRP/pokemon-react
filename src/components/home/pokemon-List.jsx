import { useContext, useEffect, useState } from "react";
import { dataPokemons } from "../../services/api-Pokemon";
import { Button } from "../button/button";
import { Link } from "react-router-dom";
import { Main } from "./style-Pokemon-List";
import { ThemeContext } from "../../contexts/themeContext";

export const ListPokemons = () => {
    const [pokemons, setPokemons] = useState({});
    const [offset, setOffset] = useState(0)
    const [loading, setLoading] = useState(false);
    const { theme } = useContext(ThemeContext)

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
        <Main style={{color: theme.color}}>
            <h1>Clique em um pokemon para ver mais detalhes sobre ele!</h1>
            <ul className="cards">
                {pokemons.length > 0 ? (pokemons.map((pokemon) => (
                    <li key={pokemon.id} className="card"
                    style={{background: theme.background}}>
                        <Link style={{color: theme.color}} 
                        to={`/pokemon/${pokemon.id}`}>
                            <h3>{pokemon.name}</h3>
                            <img className="imagens-lista" src={
                                pokemon.sprites?.other["official-artwork"]?.front_default ??
                                pokemon.sprites?.other["official-artwork"]?.front_shiny
                            } alt={pokemon.name} />
                        </Link>
                    </li>))
                ) : (<p>Carregando pokemons...</p>)
                }
            </ul>

            <Button onClick={handleLoadPokemons}
                disabled={loading || pokemons.length === 0}
                style={{color: theme.color, background: theme.background}}
                className='btn'>
                {loading ? "Carregando..." : "Carregar mais Pokemons"}
            </Button>
        </Main>
    )
}