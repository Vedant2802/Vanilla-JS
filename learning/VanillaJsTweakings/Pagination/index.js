// import randomThings from "./mockData.js";

// const itemsPerPage = 10;
// let currentPage = 1;
// let startIndex = 0;
// let endIndex = 9;
// const container = document.createElement("div");
// const nextButton = document.createElement("button");
// nextButton.setAttribute("class", "button");
// nextButton.innerText = "Next";
// const previousButton = document.createElement("button");
// previousButton.setAttribute("class", "button");
// previousButton.innerText = "Previous";
// const body = document.body;
// body.append(container);
// body.append(nextButton);
// body.append(previousButton);

// function doPagination(page) {
//   container.innerHTML = "";

//   let paginatedData = randomThings.slice(startIndex, endIndex);

//   paginatedData.forEach((item) => {
//     const divItems = document.createElement("div");
//     divItems.innerText = item;
//     container.appendChild(divItems);
//   });
// }

// nextButton.addEventListener("click", function () {
//   currentPage += 1;
//   startIndex += itemsPerPage;
//   endIndex += itemsPerPage;
//   doPagination(currentPage);
// });

// previousButton.addEventListener("click", function () {
//   currentPage -= 1;
//   startIndex -= itemsPerPage;
//   endIndex -= itemsPerPage;
//   doPagination(currentPage);
// });

// doPagination(currentPage);

import randomThings from "./mockData.js";

const itemsPerPage = 10;
let currentPage = 1;

const container = document.createElement("div");
const nav = document.createElement("div");
const nextButton = createButton("Next");
const prevButton = createButton("Previous");

document.body.append(container, nav);
nav.append(prevButton, nextButton);

function createButton(label) {
  const btn = document.createElement("button");
  btn.className = "button";
  btn.innerText = label;
  return btn;
}

function renderPage(page) {
  container.innerHTML = "";

  const start = (page - 1) * itemsPerPage;
  const end = page * itemsPerPage;
  const paginatedData = randomThings.slice(start, end);

  paginatedData.forEach((item) => {
    const div = document.createElement("div");
    div.innerText = item;
    container.appendChild(div);
  });
}

function updateButtons() {
  prevButton.disabled = currentPage === 1;
  nextButton.disabled = currentPage * itemsPerPage >= randomThings.length;
}

prevButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    renderPage(currentPage);
    updateButtons();
  }
});

nextButton.addEventListener("click", () => {
  if (currentPage * itemsPerPage < randomThings.length) {
    currentPage++;
    renderPage(currentPage);
    updateButtons();
  }
});

renderPage(currentPage);
updateButtons();
