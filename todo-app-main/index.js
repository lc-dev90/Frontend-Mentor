const todoInput = document.getElementById("todoInput");
const form = document.getElementById("form");
const todoList = document.getElementById("todo-list");
const closes = document.querySelectorAll(".close");
const counterItem = document.getElementById("counter");
const clear = document.getElementById("clear");
const slider = document.getElementById("slider");
const formControl = document.querySelector(".form-control");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
const all = document.getElementById("all");
const todoControl = document.querySelector(".todo-control");

let counter = 1;

form.addEventListener("submit", insertTodo);
slider.addEventListener("click", toggleDarkMode);
formControl.addEventListener("click", toggleCheckForm);
clear.addEventListener("click", clearCompleted);
todoList.addEventListener("click", controlTodo);
todoControl.addEventListener("click", filterTodos);

// INSERT TODO
function insertTodo(e) {
  e.preventDefault();
  const todoText = todoInput.value;
  const todoItem = document.createElement("li");
  todoItem.className = "todo animate__animated animate__fadeIn";
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
  if (formControl.classList.contains("completed")) {
    paragraph.classList.add("completed");
    check.classList.add("completed");
    todoItem.classList.add("completed");
    counterItem.textContent = counter;
  } else {
    counter++;
    counterItem.textContent = counter;
  }
  todoList.appendChild(todoItem);
}

// toggle dark mode
function toggleDarkMode(e) {
  document.body.classList.toggle("dark");
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
    swal("This is not possible!", "You don't have any completed Todos");
  }
}

//Counter and editable classes check completed
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
        counterItem.textContent = counter;
        e.target.parentElement.remove();
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
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        e.target.parentElement.remove();
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  }
  if (e.target.classList.contains("check")) {
    if (e.target.classList.contains("completed")) {
      counter++;
      counterItem.textContent = counter;
    } else {
      counter--;
      counterItem.textContent = counter;
    }
    e.target.classList.toggle("completed");
    e.target.parentElement.classList.toggle("completed");
    e.target.parentElement.querySelector("p").classList.toggle("completed");
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
