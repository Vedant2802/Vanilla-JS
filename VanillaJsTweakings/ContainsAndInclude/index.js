const body = document.body;

const unorderList = document.createElement("ul");
unorderList.setAttribute("class", "unorderedList");
// const newHtmlCollection = unorderList.getElementsByClassName("unorderedList");
// console.log(newHtmlCollection.length);
// console.log(newHtmlCollection);
console.log(unorderList.classList);
body.append(unorderList);
const names = ["Akshat", "Vedant", "Akshat", "Vedant", "Akshat"];
console.log(names.includes("Akshat"));

function listElements() {
  //   const listElment = document.createElement("li");
  return names.map((name, index) => {
    const listElement = document.createElement("li");
    listElement.innerText = name;
    listElement.setAttribute("class", `unorderList_${index}`);
    listElement.setAttribute("tabIndex", "0");
    unorderList.appendChild(listElement);
  });
}

listElements();

const firstListItem = document.querySelector(".unorderList_1");
console.log(firstListItem.classList);
console.log(firstListItem);
if (firstListItem) {
  firstListItem.focus();
}
