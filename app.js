const addToDoButton = document.querySelector(".todo-button");
const valueFromInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

addToDoButton.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("zaa");
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
  todoList.appendChild(eachToDoListEl);
});
