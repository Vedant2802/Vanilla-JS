//event for keyboard
// keydown , when you press a key , keyup - when you release a key

// const boxElement = document.getElementById("mybox");
// console.log(boxElement);
// document.addEventListener("keydown", (e) => {
//   //   console.log("akshat");
//   console.log(e);
//   e.key === "ArrowDown"
//     ? (boxElement.textContent = "Akshat")
//     : (boxElement.textContent = "Vedant");
//   console.log(`the keydown even is ${e.key}`);
// });

let x = 0;
let y = 0;
const moveValue = 10;

const boxElement = document.getElementById("mybox");
console.log(boxElement);

// Make sure the element is focusable
boxElement.setAttribute("tabIndex", "0");
boxElement.style.position = "absolute"; // Ensure it moves

// Focus after a slight delay to ensure it's in the DOM
setTimeout(() => {
  boxElement.focus();
}, 100);

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key.startsWith("Arrow")) {
    switch (e.key) {
      case "ArrowUp":
        y -= moveValue; // Move up (reduce Y)
        break;
      case "ArrowDown":
        y += moveValue; // Move down (increase Y)
        break;
      case "ArrowLeft":
        x -= moveValue; // Move left (reduce X)
        break;
      case "ArrowRight":
        x += moveValue; // Move right (increase X)
        break;
    }

    // Apply new position
    boxElement.style.top = `${y}px`; // Add 'px'
    boxElement.style.left = `${x}px`;
  }
});

// document.addEventListener("keyup", (e) => {
//   //   console.log("akshat");
//   console.log(e.key);
// });
