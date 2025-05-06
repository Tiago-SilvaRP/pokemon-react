import { useContext, useEffect, useState } from "react";
import { dataPokemons } from "../../services/api-Pokemon";
import { ThemeContext } from "../../contexts/themeContext";
import { S } from "./pokemon-List.style";

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
        if (loading) return; 

        setLoading(true) 
        const newOffset = offset + 10
        setOffset(newOffset)

        const pokemons = await dataPokemons(newOffset)
        setPokemons(newPokemons => [...newPokemons, ...pokemons])

        setLoading(false)
    }

    return (
        <S.Main>
            <S.Title>Clique em um pokemon para ver mais detalhes sobre ele!</S.Title>
            <S.Cards>
                {pokemons.length > 0 ? (pokemons.map((pokemon) => (
                    <S.Card key={pokemon.id}>
                        <S.StyledLink
                            to={`/pokemon/${pokemon.id}`}>
                            <h3>{pokemon.name}</h3>
                            <S.Img src={
                                pokemon.sprites?.other["official-artwork"]?.front_default ??
                                pokemon.sprites?.other["official-artwork"]?.front_shiny
                            } alt={pokemon.name} />
                        </S.StyledLink>
                    </S.Card>))
                ) : (<p>Carregando pokemons...</p>)
                }
            </S.Cards>

            <S.StyledButton onClick={handleLoadPokemons}
                disabled={loading || pokemons.length === 0}>
                {loading ? "Carregando..." : "Carregar mais Pokemons"}
            </S.StyledButton>
        </S.Main>
    )
}