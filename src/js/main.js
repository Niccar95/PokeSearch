import './../scss/style.scss'
import { createHtml } from './createHtml';
import { fetchData } from './services/serviceBase';


const pageTop = document.getElementById("pageTop");

const pageTitle = document.createElement("h1");
pageTitle.innerHTML = "PokeSearch";
pageTop.appendChild(pageTitle);

const pokeBallLogo = document.createElement("img");
pokeBallLogo.src = "/src/img/pokeball.svg";
pokeBallLogo.className = "pokeBallLogo";

pageTop.appendChild(pokeBallLogo);

const pokemonForm = document.getElementById("pokemonForm");



pokemonForm.addEventListener("submit", async (e) => {

e.preventDefault();

const searchPokemon = document.getElementById("searchPokemon").value;

const data = await fetchData(searchPokemon);

createHtml(data);

document.getElementById("searchPokemon").value = "";

});





