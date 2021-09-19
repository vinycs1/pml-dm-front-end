import axios from "axios"

export const getPokemon = async (pokemonId) =>{
   return  await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
   .then((res) => res.data)
   .catch(e => e)
}