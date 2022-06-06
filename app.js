const addToDoButton = document.querySelector(".todo-button");
const valueFromInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

addToDoButton.addEventListener("click", (e) => {
  e.preventDefault();
  // Add New To do Div

  // Check for Value condition

  if (!valueFromInput.value) {
    return confirm("There is no ınput...");
  } else {
    const eachToDoListEl = document.createElement("div");
    eachToDoListEl.classList.add("todo");

    eachToDoListEl.innerHTML = `
      <li>${valueFromInput.value}</li>
              <button class="btn-delete">
                <i class="fa-solid fa-trash"></i>
              </button>
              <button class="btn-check">
                <i class="fa-solid fa-check"></i>
              </button>
      `;
    valueFromInput.value = "";
    todoList.appendChild(eachToDoListEl);
  }

  // Remove Button

  const removeList = document.querySelectorAll(".btn-delete");
  removeList.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.parentElement.classList.add("fall");
      e.target.parentElement.addEventListener("transitionend", () => {
        e.target.parentElement.remove();
      });
    });
  });

  // Check Button

  const checkButton = document.querySelectorAll(".btn-check");
  checkButton.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.target.parentElement.classList.toggle("checked");
    });
  });
});

valueFromInput.addEventListener("keydown", (e) => {
  // e.preventDefault();
  if (e.keyCode === 13) {
    addToDoButton.click();
  }
});
