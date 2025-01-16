// Variable
let quotation = document.querySelector(".quote");
let person = document.querySelector(".person");
let newquoteButton = document.querySelector("#new-quote");
// const author2 = document.createElement("div");
// let textArea = document.querySelector(".text-area");
// console.log(textArea);
// console.log(author2);
// author2.classList.add("person");
// author2.innerText = "Akshat Vedant";
// textArea.append(author2);

const quotes = [
  {
    author: "Albert Einstein",
    quote:
      "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  },
  {
    author: "Mahatma Gandhi",
    quote: "Be the change that you wish to see in the world.",
  },
  {
    author: "Mark Twain",
    quote: "The secret of getting ahead is getting started.",
  },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Nelson Mandela",
    quote: "It always seems impossible until it’s done.",
  },
  {
    author: "Walt Disney",
    quote: "The way to get started is to quit talking and begin doing.",
  },
  {
    author: "Steve Jobs",
    quote:
      "Your time is limited, so don’t waste it living someone else’s life.",
  },
  {
    author: "Eleanor Roosevelt",
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    author: "Confucius",
    quote: "It does not matter how slowly you go as long as you do not stop.",
  },
  {
    author: "Martin Luther King Jr.",
    quote: "The time is always right to do what is right.",
  },
  {
    author: "Abraham Lincoln",
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
  },
  {
    author: "Dr. Seuss",
    quote: "Don’t cry because it’s over, smile because it happened.",
  },
  {
    author: "Henry Ford",
    quote: "Whether you think you can or you think you can’t, you’re right.",
  },
  {
    author: "Theodore Roosevelt",
    quote: "Believe you can and you're halfway there.",
  },
  {
    author: "Rumi",
    quote:
      "Do not be satisfied with the stories that come before you. Unfold your own myth.",
  },
  {
    author: "Aristotle",
    quote:
      "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
  },
  {
    author: "Leonardo da Vinci",
    quote: "Simplicity is the ultimate sophistication.",
  },
  {
    author: "Friedrich Nietzsche",
    quote: "He who has a why to live can bear almost any how.",
  },
  {
    author: "Plato",
    quote:
      "Wise men speak because they have something to say; fools because they have to say something.",
  },
  {
    author: "John Lennon",
    quote: "Life is what happens when you’re busy making other plans.",
  },
];
// Setting color for the author
person.style.color = "blue";
newquoteButton.addEventListener("click", function () {
  let random = Math.floor(Math.random() * quotes.length);
  //   quote.innerText = quotes[random].quote;
  console.log(random);
  quotation.innerText = quotes[random].quote;
  person.innerText = quotes[random].author;
  console.log("button cliked");
});
