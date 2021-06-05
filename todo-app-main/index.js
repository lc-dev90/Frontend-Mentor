const todoInput = document.getElementById("todoInput");
const form = document.getElementById("form");
const todoList = document.getElementById("todo-list");
const closes = document.querySelectorAll(".close");

form.addEventListener("submit", insertTodo);

function insertTodo(e) {
  e.preventDefault();
  const todoText = todoInput.value;
  const todoItem = document.createElement("li");
  todoItem.className = "todo";
  todoItem.setAttribute("ondblclick", "test(this)");
  const check = document.createElement("div");
  check.innerHTML = `<i class="fas fa-check-circle"></i>`;
  check.className = "check";
  const paragraph = document.createElement("p");
  paragraph.className = "todo-text";
  paragraph.innerText = todoText;
  const span = document.createElement("span");
  span.innerHTML = `<i class="fas fa-times-circle"></i>`;
  todoItem.appendChild(check);
  todoItem.appendChild(paragraph);
  span.className = "close";
  todoItem.appendChild(span);
  todoList.appendChild(todoItem);
}

document.addEventListener("click", function (e) {
  if (e.target.classList.contains("close")) {
    e.target.parentElement.remove();
  }
  if (e.target.classList.contains("check")) {
    e.target.classList.toggle("completed");
    e.target.parentElement.classList.toggle("completed");
    e.target.parentElement.querySelector("p").classList.toggle("completed");
  }
  if (e.target.classList.contains("todo")) {
    var todoText = e.target.querySelector(".todo-text");
    todoText.contentEditable = true;
  }
});
const dragBox = document.querySelector(".dragbox");
new Sortable(dragBox, {
  animation: 400,
});

function test(e) {
  const that = e;
  e.classList.add("editable");
  e.querySelector(".todo-text").contentEditable = true;
  e.querySelector(".todo-text").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.target.contentEditable = false;
      that.classList.remove("editable");
    }
  });
}

const active = document.getElementById("active");
const completed = document.getElementById("completed");
const all = document.getElementById("all");

window.addEventListener("click", function (e) {
  const todos = document.querySelectorAll(".todo");

  if (e.target === completed) {
    todos.forEach((todo) => {
      if (todo.classList.contains("completed")) {
        todo.style.display = "flex";
      } else {
        todo.style.display = "none";
      }
    });
  }
  if (e.target === active) {
    todos.forEach((todo) => {
      if (todo.classList.contains("completed")) {
        todo.style.display = "none";
      } else {
        todo.style.display = "flex";
      }
    });
  }
});
