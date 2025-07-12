/* Variables*/

const accordion = document.getElementsByClassName("content-container");
console.log(accordion);

// This does not return an array , it return HTML collection
// accordion.map((i) => {
//   accordion[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//   });
// });

// To convert this to an array and use the map function rather than the for loop

Array.from(accordion).map((i) => {
  console.log(i);
  i.addEventListener("click", function () {
    // this.classList.toggle("active");
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      this.classList.add("active");
    }
  });
});
