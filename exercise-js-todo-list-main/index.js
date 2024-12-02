
const input = document.querySelector(".input");
const ulList = document.querySelector(".ulList");
const form = document.querySelector(".form");
const box = document.querySelector(".container");
const reset = document.querySelector(".reset");

let toDoList = [];

const ToDoListObject = {
  ToDo: toDoList,
  Done: [],
};

//saveToStorage();
function saveToStorage() {
  localStorage.setItem("ToDo", JSON.stringify(ToDoListObject));
}

// New Todo

function newToDo() {
  const newTask = input.value;

  const li = document.createElement("li");
  li.innerText = newTask;
  ulList.appendChild(li);

  const okok = `<div class="material-symbols-outlined">check_box_outline_blank</div>`;
  const test = `<img class= done src="select_check_box_.png"></img>`;

  li.insertAdjacentHTML("afterbegin", okok);
  li.insertAdjacentHTML("afterbegin", test);

  let x = new Uint32Array(1);
  crypto.getRandomValues(x);
  li.setAttribute("class", x);
  ulList.appendChild(li);

  toDoList.push(newTask);
}

// Console log all the todos

function allTheToDos (){
  
  for (const todoitem of toDoList) {
    console.log(todoitem);
  }
}

// make the todos done

ulList.addEventListener("click", (e)=>{

const targetClass = e.target.className;
console.log(targetClass)
})


// Submit form

form.addEventListener("submit", (e) => {
  e.preventDefault();
  newToDo();
  saveToStorage();
  form.reset();
});


// reset todolist

reset.addEventListener("click", () => {
  window.location.reload();
  localStorage.clear();
});