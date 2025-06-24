export const get = async (url) => {
  const pokemon = await fetch(url);
  return pokemon.json();
};
