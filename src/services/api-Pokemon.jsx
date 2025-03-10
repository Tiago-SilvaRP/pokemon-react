import axios from "axios";
const baseUrl = "https://pokeapi.co/api/v2/pokemon"

export async function dataPokemons(amount= 10) {
    try {
        const response = await axios.get(`${baseUrl}/?limit=${amount}`)
        
        if (!response.data || !response.data.results) {
            throw new Error("Erro inesperado ao buscar  API pokemons")
        };
        const pokemonUrls = response.data.results

        const pokemonDetailsById = pokemonUrls.map(async (pokemon) => {
            const pokemonResponse = await axios.get(pokemon.url)
            return pokemonResponse.data
        })

        const pokemonsDetails = await Promise.all(pokemonDetailsById)
        return pokemonsDetails;

    } catch (error) {
        console.error('erro ao buscar lista de pokemons')
    }
}