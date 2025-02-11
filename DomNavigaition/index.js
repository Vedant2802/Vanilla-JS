// Dom Navigation

/*
    firstElementChild
    lastElementChild
    previousElementSibling
    nextElementSibling
    parentElement
    children
 */

//firstElementChild

// const element = document.getElementById("fruits");
// console.log(element);
// const firstChild = element.firstElementChild;
// firstChild.style.background = "yellow";
// console.log(firstChild);

// const allElements = document.querySelectorAll("ul");
// console.log(allElements);
// allElements.forEach((elm) => {
//   const fchild = elm.firstElementChild;
//   fchild.style.background = "green";
// });

// lastElementChild

// const allElements = document.querySelectorAll("ul");
// console.log(allElements);
// allElements.forEach((elm) => {
//   const fchild = elm.lastElementChild;
//   fchild.style.background = "green";
// });

// nextElementSibling
// const list1 = document.getElementById("fruits");
// console.log(list1);
// const list1 = document.getElementsByClassName("fruits");
// console.log(list1);

// Array.from(list1).map((elm) => {
//   console.log(
//     elm.firstElementChild.nextElementSibling.nextElementSibling
//       .nextElementSibling
//   );
// });

// previousElementSibling

// pretty similar to nextElementSibling

// parentElement (As the name suggests)

// const element = document.getElementById("apple");
// console.log(element.parentElement);

// children

const element = document.getElementById("fruits");
console.log(element.childNodes);
