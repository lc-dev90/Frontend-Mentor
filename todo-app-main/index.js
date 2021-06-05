const todoInput = document.getElementById("todo");
const form = document.getElementById("form");
const todoList = document.getElementById("todo-list");
const closes = document.querySelectorAll(".close");

form.addEventListener("submit", insertTodo);

function insertTodo(e) {
  e.preventDefault();
  const todoText = todoInput.value;
  const todoItem = document.createElement("li");
  todoItem.setAttribute("ondblclick", "test(this)");
  todoItem.className = "todo";
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
    console.log(e.target.parentElement);
    e.target.parentElement.querySelector("p").classList.toggle("completed");
    /* e.target.childNodes[1].classList.toggle("completed"); */
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
  console.log(that);
  e.classList.add("editable");
  e.querySelector(".todo-text").contentEditable = true;
  e.querySelector(".todo-text").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      e.target.contentEditable = false;
      that.classList.remove("editable");
    }
  });
}
