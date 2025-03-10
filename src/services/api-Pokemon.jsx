import axios from "axios";

const baseUrl = "https://pokeapi.co/api/v2/pokemon"

export async function dataPokemons(amount= 10) {
    try {
        const response = await axios.get(`${baseUrl}/?limit=${amount=10}`)
        
        if (!response.data || !response.data.results) {
            throw new Error("Erro inesperado ao buscar  API pokemons")
        };
        return response.data.results

    } catch (error) {
        console.error('erro ao buscar lista de pokemons')
    }
}

export async function dataIdPokemons(id) {
    try {
        const response = await axios.get(`${baseUrl}/${id}`)
        
        if (!response.data || !response.data.results) {
            throw new Error("Erro inesperado ao buscar pokemons")
        };
        return response.data.results

    } catch (error) {
        console.error('Erro ao buscar lista de pokemons')
    }
}

