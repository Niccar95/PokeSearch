
const searchResults = document.getElementById("searchResults");
const foundPokemonNameContainer = document.getElementById("foundPokemonNameContainer");
const displayedPokemon = new Set();

let counter = 0;


export const pokemonCounter = () => {
return counter;
};


 export const createHtml = (pokemonData) => {

  const pokemonId = pokemonData.id;
  
  
  if (pokemonId >= 1 && pokemonId <= 151 && !displayedPokemon.has(pokemonData.name)) { 
    
  const pokemonSprite = document.createElement("img");
  pokemonSprite.src = pokemonData.sprites.front_default;
  pokemonSprite.alt = pokemonData.name;
  pokemonSprite.title = pokemonData.name;
  searchResults.appendChild(pokemonSprite);
  displayedPokemon.add(pokemonData.name);
  counter++;
  }

  else {
    pokemonName.innerHTML = ""; 
  }
  

  if(pokemonId >= 1 && pokemonId <= 151 && !displayedPokemon.has(pokemonId)) {
    const foundPokemonNameContainer = document.getElementById("foundPokemonNameContainer");

    const pokemonNameText = document.createElement("p");
      foundPokemonNameContainer.appendChild(pokemonNameText);
      pokemonNameText.innerHTML = pokemonData.name;
  } 

  else {
    pokemonNameText.innerHTML = "";

  }
  
    if (displayedPokemon.size === 151) {
  
      const progressContainer = document.getElementById("progressContainer");
      const congratulations = document.createElement("p");
      progressContainer.appendChild(congratulations);
      congratulations.innerHTML = "Congratulations! You have listed all the Pokemon from the Kanto region!";
    }
  
  };



  const searchInput = document.getElementById("searchPokemon");
  
  searchInput.disabled = true; 
    
  const timerStartButton = document.getElementById("timerStartButton");
  timerStartButton.innerHTML = "Start Challenge";

  const timerEndButton = document.getElementById("timerEndButton");
  timerEndButton.innerHTML = "End Challenge";

  const timer = document.getElementById("timer");

  let i = 600;

  let interval = 0;


  timerEndButton.hidden = true;
 
  timerStartButton.addEventListener("click", ()=> {

    searchInput.disabled = false;
  

    interval = setInterval(() => {
      timer.innerHTML = i + " seconds";
      i--;
    }, 1000);

    timerStartButton.hidden = true;
    timerEndButton.hidden = false;
    
  });

    timerEndButton.addEventListener("click", ()=> {
      searchInput.disabled = true;
      clearInterval(interval);
      i = 600;
      timer.innerHTML = " ";

      timerStartButton.hidden = false;
      timerEndButton.hidden = true;

  });

  


  