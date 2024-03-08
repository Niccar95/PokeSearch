export const gameModal = () => {
  const modal = document.getElementById("modal");
  const showModalButton = document.querySelector(".playButton");
  const hideModalButton = document.getElementById("hideModalButton");

  showModalButton.addEventListener("click", () => {
    modal.style.display = "block";
  });
};
