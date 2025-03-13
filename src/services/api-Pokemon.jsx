import axios from "axios";
const baseUrl = "https://pokeapi.co/api/v2/pokemon"

export async function dataPokemons(offset=0, amount= 10) {
    try {
        // const randomOffset = Math.floor(Math.random() * 30)//api contem 1301 pokemons
        const response = await axios.get(`${baseUrl}?offset=${offset}&limit=${amount}`)
        
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
        console.error('erro ao buscar lista de pokemons', error.message)
    }
}

export async function dataPokemonId(id) {
    try {
        const response = await axios.get(`${baseUrl}/${id}`)
        if (!response.data) {
            throw new Error("Erro inesperado ao buscar  API pokemons")
        };
        return response.data;

    } catch (error) {
        console.error('erro ao buscar lista de pokemons', error.message)
    }
}