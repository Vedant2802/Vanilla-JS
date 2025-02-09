// const mainElement = document.querySelector(".parent");
// // console.log(mainElement);
// // console.log(mainElement.children);

// // mainElement.children.foreach(function (e) {
// //   e.innerText = "Akshat";
// // });

// // Array.from(mainElement.children).forEach(function (e) {
// //   e.textContent = "Akshat";
// // });

// // for (let i = 0; i < mainElement.children.length; i++) {
// //   console.log(mainElement.children[i].innerHTML);
// // }

// // console.log(mainElement.firstElementChild);
// // console.log(mainElement.lastElementChild);

// const dayOne = document.querySelector(".day");
// console.log(dayOne);

// console.log(dayOne.nextElementSibling.nextElementSibling.nextElementSibling);

// console.log(mainElement.childNodes);

function addLanguage(name) {
  //   return name;
  const item = document.createElement("li");
  item.innerHTML = `${name}`;
  const ul = document.querySelector(".language");
  ul.appendChild(item);
}

addLanguage("python");

function addOptiLanguage(lang) {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(lang));
  document.querySelector(".language").appendChild(li);
}

const secondLanguage = document.querySelector("li:nth-child(2)");
console.log(secondLanguage);
addOptiLanguage("GoLang");
const language = document.querySelectorAll("li");
console.log(language);
const newSecondElement = language[1];
console.log(newSecondElement);
console.log(newSecondElement.classList);

const firstchild = document.querySelector("li:first-child");
firstchild.outerHTML = "<li>Typescript</li>";
