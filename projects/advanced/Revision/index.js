const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const container = document.querySelector(".container");
container.firstElementChild.focus();
let currentPosition = 0;

array.forEach((item) => {
  const box = document.createElement("div");
  box.classList.add("box");
  box.classList.add(`box-${item}`);
  box.setAttribute("tabindex", "0");
  container.appendChild(box);
});

const getDistanceBetweenBoxes = () => {
  const boxes = document.querySelectorAll(".box");
  if (boxes.length < 2) return 0;

  const firstBox = boxes[0];
  const secondBox = boxes[1];
  const firstBoxRect = firstBox.getBoundingClientRect();
  const secondBoxRect = secondBox.getBoundingClientRect();

  return secondBoxRect.left - firstBoxRect.left;
};

const getVisibleElementsCount = () => {
  const boxes = document.querySelectorAll(".box");
  const viewportWidth = window.innerWidth;
  let visibleCount = 0;

  boxes.forEach((box) => {
    const rect = box.getBoundingClientRect();
    if (rect.right > 0 && rect.left < viewportWidth) {
      visibleCount++;
    }
  });

  return visibleCount;
};

container.addEventListener("keydown", (e) => {
  const visibleCount = getVisibleElementsCount();

  const distance = getDistanceBetweenBoxes();
  const activeElement = document.activeElement;
  switch (e.key) {
    case "ArrowRight":
      if (visibleCount <= 2) {
        return;
      }
      currentPosition -= distance;
      container.style.transform = `translate3d(${currentPosition}px, 0, 0)`;
      container.style.transition =
        "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
      if (activeElement.nextElementSibling) {
        activeElement.nextElementSibling.focus();
      } else {
        container.firstElementChild.focus();
      }
      break;

    case "ArrowLeft":
      if (visibleCount >= 10) {
        return;
      }
      currentPosition += distance;
      container.style.transform = `translate3d(${currentPosition}px, 0, 0)`;
      container.style.transition =
        "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)";
      if (activeElement.previousElementSibling) {
        activeElement.previousElementSibling.focus();
      } else {
        container.lastElementChild.focus();
      }
      break;
  }
});
