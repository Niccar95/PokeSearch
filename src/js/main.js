import './../scss/style.scss'
import { challengeTimer } from '../js/challengeTimer';
import { createHtml, pokemonCounter } from '../js/createHtml';
import { fetchPokemon } from '../js/services/PokemonService';


const pageTop = document.getElementById("pageTop");

const pokeBallLogo = document.createElement("img");
pokeBallLogo.src = "../src/img/pokeball.svg";
pokeBallLogo.className = "pokeBallLogo";

pageTop.appendChild(pokeBallLogo);

const pokemonForm = document.getElementById("pokemonForm");

const pokemonCounterText = document.getElementById("pokemonCounter");

challengeTimer();

pokemonForm.addEventListener("submit", async (e) => {


e.preventDefault();


const searchPokemon = document.getElementById("searchPokemon").value;

const data = await fetchPokemon(searchPokemon);

createHtml(data);

document.getElementById("searchPokemon").value = "";

const counterUpdate = pokemonCounter();

pokemonCounterText.innerHTML = "Amount of Pokemon found: " + counterUpdate;

});



