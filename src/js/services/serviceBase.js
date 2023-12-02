
export const fetchData = async (searchPokemon) => {
  const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + searchPokemon + "?limit=151");
  return pokemon.json();
};


const displayedPokemon = new Set();


export const addPokemon = (pokemonName) => {
  displayedPokemon.add(pokemonName);
};