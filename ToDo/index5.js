// const inputBox = document.querySelector(".input-container");
// const submitBtn = document.querySelector(".submit-button");
// const listContainer = document.querySelector(".list-container");

// let inputValue = "";
// inputBox.addEventListener("input", function (e) {
//   console.log(e);
//   //   e.preventDefault();
//   inputValue = e.target.value;
//   console.log(inputValue);
// });

// submitBtn.addEventListener("click", function (e) {
//   listContainer.textContent = `${inputValue}`;
//   inputBox.style.display = "none";
// });

// Variables

const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");

//Event Listener for add button

addTask.addEventListener("click", function () {
  console.log("button clicked");
  let task = document.createElement("div");
  task.classList.add("task");

  let li = document.createElement("li");
  li.innerText = `${inputTask.value}`;
  task.append(li);

  let checkButton = document.createElement("button");
  checkButton.classList.add("checkTask");
  checkButton.innerHTML = "Check";
  task.appendChild(checkButton);

  let deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteTask");
  deleteButton.innerHTML = "Delete";

  task.appendChild(deleteButton);

  if (inputTask.value == "") {
    alert("please enter a task");
  } else {
    taskContainer.append(task);
  }
  inputTask.value = "";
  // if()

  // checkButton.addEventListener("click", function () {
  //   checkButton;
  // });
  // deleteButton.addEventListener("click", function (e) {
  //   let target = e.target;
  //   target.parentElement.parentElement.remove();
  // });
  // deleteButton.addEventListener("click", function (e) {
  //   let target = e.target;
  //   target.parentElement.parentElement.remove();
  // });
});

// checkButton.addEventListener("click", function () {
//   checkButton;
// });
// deleteButton.addEventListener("click", function (e) {
//   let target = e.target;
//   target.parentElement.parentElement.remove();
// });

taskContainer.addEventListener("click", function (e) {
  console.log("buttton clicked");
  if (e.target.classList.contains("deleteTask")) {
    e.target.parentElement.remove();
  }
});
