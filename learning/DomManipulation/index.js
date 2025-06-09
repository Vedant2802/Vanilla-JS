/*
    Steps:
    1.Create Element
    2.Add some attributes 
    3.Append Element to DOM
    4.Remove HTML Element
    5.Modifying Content
    6.Read , write , remove attributes
    7.Traversing / Navigating DOM
    8.Controlling Visibilities
    9.Manupulating Classes
*/

// elements and nodes are two different things , element is kind of a subclass of node , meaning element node , nodes can be of multiple type like element node , text node , comment node {REMEMBER THIS CAREFULLY}

// Difference between innerText(takes into consideration of elements style) , textContent(just gives the inner text) , innerHTML(can add html inside the text itself)

// Attribute methods
/*
    getAttribute()
    setAttribute()
    hasAttribute()
    removeAttribute()
*/

// Navigating DOM

// 1. parentElement and parentNode

// const span = document.getElementById("text");
// console.log(span.parentElement);
// console.log(span.parentNode);

// 2. children(returns a HTML collection) and childNodes(returns a node list)

// 3. firstChild() , lastChild() , firstElementChild() => return the first html element it finds , unlike firstChild() which will give the first node it finds be it of anytype , lastElementChild() => same here

// Sibling relations , nextSibling() , previousSibling() , nextElementSibling() , prevElementSibling() , works in the same way as explained above

// Styling changes using classes

const mainDivElem = document.getElementById("main-id");

console.log(mainDivElem.classList);

// It gives DOMTokenList (An array like data structure , also has a forEach method)

// mainDivElem.className = "secondary-class";

// console.log(mainDivElem.className);

// mainDivElem.classList.add("test");
// mainDivElem.classList.remove("layout");
// mainDivElem.classList.replace("main-class", "secondary-class");
// console.log(mainDivElem.classList.contains("layout"));
// mainDivElem.classList.toggle("layout");

/*
    Controlling Visibility
*/
