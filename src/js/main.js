import "./../scss/style.scss";
import "bootstrap-icons/font/bootstrap-icons.css";

import { challengeTimer } from "../js/challengeTimer";
import { createHtml, pokemonCounter } from "../js/createHtml";
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

  const allPokemon = JSON.parse(localStorage.getItem("allPokemon") || "[]");

  const pokemon = allPokemon.find(
    (p) => p.name.toLowerCase() === searchPokemon.toLowerCase()
  );

  if (pokemon) {
    createHtml(pokemon);
  } else {
    console.log("Pokémon not found!");
  }

  document.getElementById("searchPokemon").value = "";

  const counterUpdate = pokemonCounter();

  pokemonCounterText.innerHTML =
    "Pokemon found: " + counterUpdate + " " + "/ 151";
});

window.addEventListener("DOMContentLoaded", async () => {
  const stored = localStorage.getItem("allPokemon");

  if (!stored) {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();

      const allPokemon = [];

      for (let i = 0; i < data.results.length; i++) {
        const pokemonUrl = data.results[i].url;
        const res = await fetch(pokemonUrl);
        const poke = await res.json();

        allPokemon.push({
          id: poke.id,
          name: poke.name,
          sprite: poke.sprites.other["official-artwork"].front_default,
        });
      }

      localStorage.setItem("allPokemon", JSON.stringify(allPokemon));
    } catch (err) {
      console.error("Failed to fetch Pokémon details", err);
    }
  } else {
    console.log("Loaded Pokémon data from localStorage");
  }
});
