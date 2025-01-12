const clear = document.querySelector(".span-two");
clear.addEventListener("click", clearFunction);

function clearFunction() {
  const output = document.querySelector(".output-screen");
  output.textContent = "";
}

const equals = document.querySelector(".span-two-equal");
equals.addEventListener("click", equateFunction);

function equateFunction() {
  const output = document.querySelector(".output-screen");
  const inputValue = output.innerText; // Get the current value in the output
  console.log("Input value: ", inputValue);

  try {
    const equateValue = eval(inputValue);

    output.textContent = equateValue;
  } catch (error) {
    output.textContent = "Error";
    console.error("Invalid expression", error);
  }
}

const outputContainer = document.querySelector(".output-screen");
const buttonContainer = document.querySelector(".button-container");

buttonContainer.addEventListener("click", function (e) {
  e.preventDefault();

  const clickedButton = e.target;

  if (clickedButton.classList.contains("span-two")) {
    outputContainer.textContent = "";
  } else {
    const v = clickedButton.innerText;
    outputContainer.textContent += v;
  }
});
