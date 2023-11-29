import './../scss/style.scss'

const pokemonForm = document.getElementById("pokemonForm");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");


pokemonForm.addEventListener("submit", async (e) => {
e.preventDefault();

const searchPokemon = document.getElementById("searchPokemon").value;

const pokemon = await fetch("https://pokeapi.co/api/v2/pokemon/" + searchPokemon + "?limit=151"); 

const data = await pokemon.json();

console.log(data);

createHtml(data);


});


const createHtml = (pokemonData) => {

const pokemonName = document.createElement("p");
searchResults.appendChild(pokemonName);
pokemonName.innerHTML = `${pokemonData.name}`;
}










  
  
