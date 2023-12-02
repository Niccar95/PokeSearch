import { get } from "./serviceBase";


export const fetchPokemon = async (searchPokemon) => {
  const pokemonData = await get(`https://pokeapi.co/api/v2/pokemon/${searchPokemon}`);
  return pokemonData;
};