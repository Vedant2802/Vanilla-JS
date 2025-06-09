/*
    ClassList Property
    add()
    remove()
    toggle()
    replace()
    contains()
    */

const mybutton = document.getElementById("my-button");
console.log(mybutton);

mybutton.classList.add("enabled");
mybutton.classList.remove("enabled");

mybutton.addEventListener("mouseover", function (e) {
  e.target.classList.toggle("hover");
});
