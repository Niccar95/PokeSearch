import { get } from "../services/serviceBase";

export const fetchPokemon = async (searchPokemon) => {
  const pokemonData = await get(
    `https://pokeapi.co/api/v2/pokemon/${searchPokemon}?limit=151`
  );
  return pokemonData;
};
