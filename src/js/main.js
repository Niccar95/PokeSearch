import './../scss/style.scss'

const pageTop = document.getElementById("pageTop");

const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "PokeSearch";
pageTop.appendChild(pageTitle);

const pokeBallLogo = document.createElement("img");
pokeBallLogo.src = "/src/img/pokeball.svg";
pokeBallLogo.className = "pokeBallLogo";

pageTop.appendChild(pokeBallLogo);

const pokemonForm = document.getElementById("pokemonForm");
const searchResults = document.getElementById("searchResults");
const displayedPokemon = new Set();


pokemonForm.addEventListener("submit", async (e) => {
e.preventDefault();

const searchPokemon = document.getElementById("searchPokemon").value;

const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + searchPokemon + "?limit=151"); 

const data = await pokemon.json();

console.log(data);

createHtml(data);


});


const createHtml = (pokemonData) => {

/*
const pokemonName = document.createElement("p");
searchResults.appendChild(pokemonName);
pokemonName.innerHTML = `${pokemonData.name}`;
*/

if (!displayedPokemon.has(pokemonData.name)) { 
const pokemonSprite = document.createElement("img");
pokemonSprite.src = pokemonData.sprites.front_default;
pokemonSprite.alt = pokemonData.name;
pokemonSprite.title = pokemonData.name;
searchResults.appendChild(pokemonSprite);

}
  displayedPokemon.add(pokemonData.name);

}




  
  
