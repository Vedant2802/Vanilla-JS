const addButton = document.getElementById("add");
const inputField = document.getElementById("input-container");
const tasksContainer = document.getElementById("tasks-container");
let inputValue = "";
console.log(inputField.value);

addButton.addEventListener("click", function () {
  const task = document.createElement("div");
  //   task.className = "task";
  const crossButton = document.createElement("button");
  //   crossButton.className = "cross";
  crossButton.classList.add("add");
  crossButton.innerText = "cross";
  crossButton.addEventListener("click", function () {
    task.classList.toggle("task");
  });
  const deleteButton = document.createElement("button");
  //   deleteButton.className = "delete";
  deleteButton.classList.add("add");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", function () {
    task.remove();
    crossButton.remove();
    deleteButton.remove();
  });
  task.innerText = inputValue;
  tasksContainer.appendChild(task);
  tasksContainer.appendChild(crossButton);
  tasksContainer.appendChild(deleteButton);
});
inputField.addEventListener("keyup", function () {
  inputValue = inputField.value;
  console.log(inputField.value);
});

// Todo refinement later
