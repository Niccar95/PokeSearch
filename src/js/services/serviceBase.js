
export const get = async (url) => {
  const pokemon = await fetch(url);
  return pokemon.json();
};

// Set to keep track of displayed Pokémon
const displayedPokemon = new Set();


export const addPokemon = (pokemonName) => {
  displayedPokemon.add(pokemonName);
};