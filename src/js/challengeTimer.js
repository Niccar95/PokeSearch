import {
  counterReset,
  displayedPokemon,
  pokemonNameContainer,
  searchResults,
} from "./createHtml";
import { pokemonCounterText } from "./main";

export const challengeTimer = () => {
  const searchInput = document.getElementById("searchPokemon");
  const timerStartButton = document.getElementById("timerStartButton");
  const timerEndButton = document.getElementById("timerEndButton");
  const timer = document.getElementById("timer");
  const countdownDisplay = document.getElementById("countdownDisplay");

  searchInput.disabled = true;

  timerStartButton.innerHTML =
    '<i class="bi bi-rocket-takeoff-fill"></i> Start Challenge';
  timerEndButton.innerHTML =
    '<i class="bi bi-sign-stop-fill"></i> End Challenge';

  timerEndButton.hidden = true;

  let countdownInterval = null;
  let timerInterval = null;

  timerStartButton.addEventListener("click", () => {
    let countdownSeconds = 3;
    let timeInSeconds = 900;

    clearInterval(countdownInterval);
    clearInterval(timerInterval);

    searchResults.innerHTML = "";

    pokemonNameContainer.innerHTML = "";
    pokemonCounterText.innerHTML = counterReset();

    displayedPokemon.clear();

    timerStartButton.hidden = true;
    timerEndButton.hidden = false;

    countdownDisplay.style.display = "block";
    countdownDisplay.innerHTML = countdownSeconds;
    timer.innerHTML = "";

    countdownInterval = setInterval(() => {
      countdownDisplay.innerHTML = countdownSeconds;
      countdownSeconds--;

      if (countdownSeconds > 0) {
        countdownDisplay.innerHTML = countdownSeconds;
      } else {
        clearInterval(countdownInterval);

        countdownDisplay.innerHTML = "Start!";

        setTimeout(() => {
          countdownDisplay.style.display = "none";
          searchInput.disabled = false;
        }, 1000);

        timerInterval = setInterval(() => {
          const minutes = Math.floor(timeInSeconds / 60);
          const seconds = timeInSeconds % 60;
          timer.innerHTML = `${String(minutes).padStart(2, "0")}:${String(
            seconds
          ).padStart(2, "0")}`;

          timeInSeconds--;

          if (timeInSeconds < 0) {
            clearInterval(timerInterval);
            searchInput.disabled = true;
            timer.innerHTML = "Time's up!";
            timerStartButton.hidden = false;
            timerEndButton.hidden = true;
            countdownDisplay.style.display = "none";
            searchResults.innerHTML = "";
          }
        }, 1000);
      }
    }, 1000);
  });

  timerEndButton.addEventListener("click", () => {
    clearInterval(countdownInterval);
    clearInterval(timerInterval);

    searchInput.disabled = true;
    timer.innerHTML = "";
    countdownDisplay.style.display = "none";
    timerStartButton.hidden = false;
    timerEndButton.hidden = true;
  });
};
