/*
    Steps:
    1.Create Element
    2.Add some attributes 
    3.Append Element to DOM
    4.Remove HTML Element
*/

const newH1 = document.createElement("h1");
newH1.textContent = "Akshat";
newH1.id = "myname";
// newH1.setAttribute("id", "myname");

// document.body.append(newH1);
const box1 = document.getElementById("box2");
// box1.nextElementSibling.append(newH1);
// document.body.prepend(newH1);

//if you want to insert your new element between the two different elements

document.body.insertBefore(newH1, box1);
