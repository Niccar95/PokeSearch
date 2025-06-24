export const searchResults = document.getElementById("searchResults");
export const displayedPokemon = new Set();
export const pokemonNameContainer = document.getElementById(
  "pokemonNameContainer"
);

let counter = 0;

export const pokemonCounter = () => {
  return counter;
};

export const counterReset = () => {
  counter = 0;
  return "";
};

export const createHtml = (pokemonData) => {
  const pokemonNameText = document.createElement("p");
  pokemonNameText.classList.add("pokemonNameText");

  const pokemonId = pokemonData.id;

  if (
    pokemonId >= 1 &&
    pokemonId <= 151 &&
    !displayedPokemon.has(pokemonData.name)
  ) {
    const pokemonSprite = document.createElement("img");
    pokemonSprite.src = pokemonData.sprite;

    pokemonSprite.alt = pokemonData.name;
    pokemonSprite.title = pokemonData.name;
    searchResults.appendChild(pokemonSprite);

    pokemonNameContainer.appendChild(pokemonNameText);
    pokemonNameText.innerHTML = pokemonData.name;
    displayedPokemon.add(pokemonData.name);

    let color = randomColor();

    pokemonNameText.style.backgroundColor = color;

    pokemonSprite.classList.add("pokemonSprite");

    setTimeout(() => {
      searchResults.scrollTop = searchResults.scrollHeight;
    }, 200);

    console.log(searchResults.scrollHeight);

    counter++;
  } else {
    pokemonNameText.innerHTML = "";
  }

  if (displayedPokemon.size === 151) {
    const progressContainer = document.getElementById("progressContainer");
    const congratulations = document.createElement("p");
    progressContainer.appendChild(congratulations);
    congratulations.innerHTML =
      "Congratulations! You have listed all the Pokemon from the Kanto region!";
  }
};
