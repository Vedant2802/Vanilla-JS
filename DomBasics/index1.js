// Node List are similar to HTML Collection only difference is they have built in methods , they are static while HTML collections are live
// Node list has a built in forEach method

// const input = document.getElementById("input");
// console.log(input.value);

// function changeHandler() {
//   const input = document.getElementById("input");
//   console.log(input.style);

//   const liElem = document.querySelectorAll("#items li");
//   //   console.log(liElem);

//   liElem.forEach(
//     (item) =>
//       (item.style.backgroundColor = item.innerText.includes(input.value)
//         ? "Yellow"
//         : "Red")
//   );
// }

// const input = document.getElementById("input");
// console.log(input.value);

function changeHandler() {
  const input = document.getElementById("input"); // You can reuse outer one too
  console.log(input.style); // works, but may be unnecessary

  const liElem = document.querySelectorAll("#items li");

  liElem.forEach((item) => {
    item.style.backgroundColor = item.innerText
      .toLowerCase()
      .includes(input.value.toLowerCase())
      ? "yellow"
      : "red";
  });
}
