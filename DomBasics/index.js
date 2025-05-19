//document.getElementById returns a Element or NULL
//document.getElementsClassName returns a HTML COllection
//document.getElementsByTagName returns a HTML COllection
//document.querySelector() returns a Element or NULL
//document.querySelectorAll() returns a NodeList

const myHeading = document.getElementById("my-heading");
// if the id is not correct it will return null
myHeading.style.background = "Yellow";
myHeading.style.textAlign = "center";

const fruits = document.getElementsByClassName("fruits");
// console.log(fruits);

// console.log(fruits[0].textContent);
// fruits.forEach((element) => {
//   console.log(element);
// });

// one method to loop over html collection
// for (const element of fruits) {
//   console.log(element);
// }

// Another method to loo over html collection is to typecast it to an array

// const value = Array.from(fruits).forEach((elm, index) => {
//   //   console.log();
//   console.log(index);
//   //   console.log(array);
//   console.log(elm);
// });

// console.log(value);

Array.from(fruits).map((element) => {
  console.log(element.getAttribute("class"));
  element.setAttribute("id", "myfruits");
  console.log(element);
});
