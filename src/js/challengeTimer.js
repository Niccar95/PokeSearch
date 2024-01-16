


 export const challengeTimer = () => {

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

    let i = 600;

    interval = setInterval(() => {
      timer.innerHTML = i + " seconds";
      i--;

      if(i === -1) {
        searchInput.disabled = true;
        clearInterval(interval);
        timer.innerHTML = "Time's up!";
        timerStartButton.hidden = false;
        timerEndButton.hidden = true;  
      }

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

 };



