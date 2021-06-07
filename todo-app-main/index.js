const todoInput = document.getElementById("todoInput");
const form = document.getElementById("form");
const todoList = document.getElementById("todo-list");
const closes = document.querySelectorAll(".close");
const counterItem = document.getElementById("counter");
const clear = document.getElementById("clear");
const toggle = document.getElementById("switch");
const formControl = document.querySelector(".form-control");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
const all = document.getElementById("all");
const todoControl = document.querySelector(".todo-control");
const counterElement = document.getElementById("counterChar");
const msg = document.getElementById("msg");
const deleteTodos = document.getElementById("delete");

let counter = 0;
window.onresize = function () {
  console.log(window.innerWidth);
};
form.addEventListener("submit", checkTodoInputValue);
toggle.addEventListener("click", toggleDarkMode);
formControl.addEventListener("click", toggleCheckForm);
clear.addEventListener("click", clearCompleted);
todoList.addEventListener("click", controlTodo);
todoControl.addEventListener("click", filterTodos);
document.addEventListener("DOMContentLoaded", getTodos);

// check if todo exists
function checkAlready(value) {
  const todos = document.querySelectorAll(".todo");
  let indicator = false;
  todos.forEach((todo) => {
    if (todo.querySelector("p").textContent === value) {
      indicator = true;
    }
  });
  return indicator;
}

// max character
todoInput.onkeydown = function () {
  msg.style.display = "none";
  if (formControl.classList.contains("completed")) {
    formControl.className = "form-control completed";
  } else {
    formControl.className = "form-control";
  }
  counterElement.innerHTML = 40 - this.value.length;
};

// check todo before input
function checkTodoInputValue(e) {
  e.preventDefault();
  const todos = document.querySelectorAll(".todo");
  let completedFormControl = formControl.classList.contains("completed");
  if (todoInput.value.length > 40) {
    if (completedFormControl) {
      formControl.className = "form-control error completed";
    } else {
      formControl.className = "form-control error";
    }
    msg.textContent = "Please, max 40 characters!";
    msg.style.display = "block";
  } else if (todoInput.value === "") {
    if (completedFormControl) {
      formControl.className = "form-control error completed";
    } else {
      formControl.className = "form-control error";
    }
    msg.textContent = "Please, enter your todo!";
    msg.style.display = "block";
  } else if (checkAlready(todoInput.value)) {
    if (completedFormControl) {
      formControl.className = "form-control error completed";
    } else {
      formControl.className = "form-control error";
    }
    msg.textContent = "You already have this todo!";
    msg.style.display = "block";
  } else {
    msg.style.display = "none";
    if (completedFormControl) {
      formControl.className = "form-control completed";
    } else {
      formControl.className = "form-control";
    }
    insertTodo();
  }
}

// INSERT TODO
function insertTodo() {
  const todoText = todoInput.value;
  const todoItem = document.createElement("li");
  todoItem.className = "todo animate__animated animate__fadeIn";
  todoItem.setAttribute("ondblclick", "edit(this)");

  todoItem.setAttribute("autocomplete", "off");
  todoItem.setAttribute("autocorrect", "off");
  todoItem.setAttribute("autocapitalize", "off");
  todoItem.setAttribute("spellcheck", "false");

  const checkbox = document.createElement("div");
  /* check.innerHTML = `<i class="fas fa-check-circle"></i>`; */
  checkbox.className = "check";
  const paragraph = document.createElement("p");
  paragraph.className = "todo-text";
  paragraph.innerText = todoText;

  const span = document.createElement("span");
  span.innerHTML = `<img src="./images/icon-cross.svg" alt="delete todo">`;

  todoItem.appendChild(checkbox);
  todoItem.appendChild(paragraph);
  span.className = "close";
  todoItem.appendChild(span);
  if (formControl.classList.contains("completed")) {
    checkbox.classList.add("completed");
    todoItem.classList.add("completed");
    counterItem.textContent = counter;
  } else {
    counter++;
    counterItem.textContent = counter;
  }
  saveLocalTodos(todoItem.innerHTML);
  todoList.appendChild(todoItem);
  todoInput.value = "";
  counterElement.innerHTML = 40;
  formControl.className = "form-control";
  document.querySelector(".check").className = "check";
}

// saveLocalStorage
function saveLocalTodos(todo) {
  let todos;
  if (!localStorage.getItem("todos")) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.push([todo]);
  localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodos() {
  let todos;
  if (localStorage.getItem("todos") === null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos"));
  }
  todos.forEach((todo) => {
    const todoItem = document.createElement("li");
    if (todo[0].match("completed")) {
      todoItem.className = "todo completed animate__animated animate__fadeIn";
    } else {
      todoItem.className = "todo animate__animated animate__fadeIn";
      counter++;
      counterItem.textContent = counter;
    }
    todoItem.setAttribute("ondblclick", "edit(this)");
    todoItem.setAttribute("autocomplete", "off");
    todoItem.setAttribute("autocorrect", "off");
    todoItem.setAttribute("autocapitalize", "off");
    todoItem.setAttribute("spellcheck", "false");
    todoItem.innerHTML = todo[0];
    todoList.appendChild(todoItem);
  });
}

// toggle dark mode
function toggleDarkMode(e) {
  const sun = "./images/icon-sun.svg";
  const moon = "./images/icon-moon.svg";
  if (
    e.target.querySelector("img").getAttribute("src") ===
    "./images/icon-sun.svg"
  ) {
    e.target.querySelector("img").setAttribute("src", moon);
  } else {
    e.target.querySelector("img").setAttribute("src", sun);
  }

  document.body.classList.toggle("light");
}

// toggle check form
function toggleCheckForm(e) {
  if (e.target.classList.contains("check")) {
    e.target.classList.toggle("completed");
    e.target.parentElement.classList.toggle("completed");
  }
}

// clear button
function clearCompleted(e) {
  const todos = document.querySelectorAll(".todo");
  const completed = [...todos].filter((todo) =>
    todo.classList.contains("completed")
  );
  if (completed.length > 0) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this todo!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        todos.forEach((todo) => {
          if (todo.classList.contains("completed")) {
            todo.remove();
            reloadList();
          }
        });
        swal("Your todo list has been cleared!", {
          icon: "success",
        });
      } else {
        swal("Your todo is safe!");
      }
    });
  } else {
    swal("This is not possible!", "You don't have any completed todos");
  }
}

//Counter, delete and check completed
function controlTodo(e) {
  if (
    e.target.classList.contains("close") &&
    !e.target.parentElement.classList.contains("completed")
  ) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this todo!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        counter--;
        counterItem.textContent = counter < 1 ? 0 : counter;
        e.target.parentElement.remove();
        reloadList();
        swal("Your todo has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your todo is safe!");
      }
    });
  }
  if (
    e.target.classList.contains("close") &&
    e.target.parentElement.classList.contains("completed")
  ) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this todo!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        e.target.parentElement.remove();
        reloadList();
        swal("Poof! Your todo has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your todo is safe!");
      }
    });
  }
  if (e.target.classList.contains("check")) {
    if (e.target.classList.contains("completed")) {
      counter++;
      counterItem.textContent = counter;
      reloadList();
    } else {
      counter--;
      counterItem.textContent = counter < 1 ? 0 : counter;
      reloadList();
    }
    e.target.classList.toggle("completed");
    e.target.parentElement.classList.toggle("completed");
    reloadList();
  }
  if (e.target.classList.contains("todo")) {
    var todoText = e.target.querySelector(".todo-text");
    todoText.contentEditable = true;
  }
}

//DRAGBOX
const dragBox = document.querySelector(".dragbox");
new Sortable(dragBox, {
  animation: 400,
  onChange: function (evt) {
    reloadList();
  },
});

//EDITABLE CONTENT

function edit(e) {
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

//FILTER
function filterTodos(e) {
  const todos = document.querySelectorAll(".todo");

  if (e.target === all) {
    todos.forEach((todo) => {
      todo.style.display = "flex";
    });
  }

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
}

function reloadList() {
  const todos = document.querySelectorAll(".todo");
  localStorage.removeItem("todos");
  todos.forEach((todo) => {
    saveLocalTodos(todo.innerHTML);
  });
}

all.onclick = function () {
  if (completed.classList.contains("selected")) {
    completed.className = "";
  }
  if (active.classList.contains("selected")) {
    active.className = "";
  }
  all.classList.toggle("selected");
};

completed.onclick = function () {
  if (all.classList.contains("selected")) {
    all.className = "";
  }
  if (active.classList.contains("selected")) {
    active.className = "";
  }
  completed.classList.toggle("selected");
};

active.onclick = function () {
  if (all.classList.contains("selected")) {
    all.className = "";
  }
  if (completed.classList.contains("selected")) {
    completed.className = "";
  }
  active.classList.toggle("selected");
};

/* Delete all todos */
deleteTodos.addEventListener("click", deleteAll);

function deleteAll() {
  const todos = document.querySelectorAll(".todo");

  if (todos.length > 0) {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover your todos!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        todos.forEach((todo) => {
          todo.remove();
        });
        counter = 0;
        counterItem.textContent = counter < 1 ? 0 : counter;
        reloadList();
        swal("Your todo list has been cleared!", {
          icon: "success",
        });
      } else {
        swal("Your todo is safe!");
      }
    });
  } else {
    swal("This is not possible!", "You don't have any todos");
  }
}
