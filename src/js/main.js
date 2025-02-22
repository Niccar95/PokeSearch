import "./../scss/style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import { challengeTimer } from "../js/challengeTimer";
import { createHtml, pokemonCounter } from "../js/createHtml";
import { fetchPokemon } from "../js/services/PokemonService";
import { gameModal } from "./modal";

const pokemonForm = document.getElementById("pokemonForm");

export const pokemonCounterText = document.getElementById("pokemonCounter");

challengeTimer();
gameModal();

const changeInput = (input) => {
  if (input.toLowerCase() === "mr mime" || input.toLowerCase() === "mr. mime") {
    return "mr-mime";
  }

  if (
    input.toLowerCase() === "nidoran female" ||
    input.toLowerCase() === "nidoran f"
  ) {
    return "nidoran-f";
  }

  if (
    input.toLowerCase() === "nidoran male" ||
    input.toLowerCase() === "nidoran m"
  ) {
    return "nidoran-m";
  } else {
    return input.toLowerCase().replace(/-/g, " ");
  }
};

pokemonForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let searchPokemon = document.getElementById("searchPokemon").value;

  searchPokemon = changeInput(searchPokemon);

  const data = await fetchPokemon(searchPokemon);

  createHtml(data);

  document.getElementById("searchPokemon").value = "";

  const counterUpdate = pokemonCounter();

  pokemonCounterText.innerHTML =
    "Amount of Pokemon found: " + counterUpdate + " " + "/ 151";
});
