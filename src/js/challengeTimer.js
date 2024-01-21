


 export const challengeTimer = () => {

  const searchInput = document.getElementById("searchPokemon");
  
  searchInput.disabled = true; 
    
  const timerStartButton = document.getElementById("timerStartButton");
  timerStartButton.innerHTML = "Start Challenge";

  const timerEndButton = document.getElementById("timerEndButton");
  timerEndButton.innerHTML = "End Challenge";

  const timer = document.getElementById("timer");

  timerEndButton.hidden = true;

  let interval = 0;
  let timeInSeconds = 900;
 
  timerStartButton.addEventListener("click", ()=> {

    searchInput.disabled = false;

    interval = setInterval(() => {

      const minutes = Math.floor(timeInSeconds / 60);
      const seconds = timeInSeconds % 60;

      timer.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

        timeInSeconds--; 

      if(timeInSeconds === -1) {
        searchInput.disabled = true;
        clearInterval(interval);
        timer.innerHTML = "Time's up!";
        timerStartButton.hidden = false;
        timerEndButton.hidden = true;  
        timeInSeconds = 900;
      }

    }, 1000);

    timerStartButton.hidden = true;
    timerEndButton.hidden = false;  
  });

    timerEndButton.addEventListener("click", ()=> {
      searchInput.disabled = true;
      clearInterval(interval);
      timeInSeconds = 900;
      timer.innerHTML = " ";

      timerStartButton.hidden = false;
      timerEndButton.hidden = true;
  });
 };
