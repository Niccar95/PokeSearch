export const gameModal = () => {
  const modal = document.getElementById("modal");
  const showModalButton = document.querySelector(".playButton");
  const hideModalButton = document.querySelector(".hideModalButton");

  showModalButton.addEventListener("click", () => {
    modal.style.display = "block";
    setTimeout(function () {
      modal.style.opacity = "1";
    }, 10);
  });

  hideModalButton.addEventListener("click", () => {
    modal.style.opacity = "0";
    setTimeout(function () {
      modal.style.display = "none";
    }, 300);
  });
};
