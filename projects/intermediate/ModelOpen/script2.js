//Variables

let openBtn = document.getElementById("open-btn");
console.log(openBtn);
let modalContainer = document.getElementById("modal-container");
console.log(modalContainer);
let closeBtn = document.getElementById("close-btn");

// Event listener

openBtn.addEventListener("click", function () {
  modalContainer.style.display = "block";
});

closeBtn.addEventListener("click", function () {
  modalContainer.style.display = "none";
});

// understood
window.addEventListener("click", function (e) {
  if (e.target === modalContainer) {
    modalContainer.style.display = "none";
  }
});
