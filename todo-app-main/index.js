const todoInput = document.getElementById("todo");
const form = document.getElementById("form");
const todoList = document.getElementById("todo-list");
const closes = document.querySelectorAll(".close");

form.addEventListener("submit", insertTodo);

function insertTodo(e) {
  e.preventDefault();
  const todoText = todoInput.value;
  const todoItem = document.createElement("li");
  todoItem.className = "todo";
  const paragraph = document.createElement("p");
  paragraph.innerText = todoText;
  const span = document.createElement("span");
  span.innerHTML = `<i class="fas fa-times-circle"></i>`;
  todoItem.appendChild(paragraph);
  span.className = "close";
  todoItem.appendChild(span);
  todoList.appendChild(todoItem);
}

document.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("todo")) {
    /* e.target.childNodes.classList.toggle("completed"); */
    e.target.children[0].classList.toggle("completed");
    e.target.classList.toggle("completed");
  }
});
const dragBox = document.querySelector(".dragbox");
new Sortable(dragBox, {
  animation: 400,
});
