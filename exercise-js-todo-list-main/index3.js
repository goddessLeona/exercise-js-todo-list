const input = document.querySelector(".input");
const ulList = document.querySelector(".ulList");
const form = document.querySelector(".form");
const box = document.querySelector(".container");
const reset = document.querySelector(".reset");

const toDoList = [];
console.log(toDoList)

const ToDoListObject = {
  ToDo: toDoList,
  Done: [],
};

 //saveToStorage();
function saveToStorage (){
  localStorage.setItem("ToDo", JSON.stringify(ToDoListObject));
}


// New Todo

function newToDo (){
  const newTask = input.value
  
  const li = document.createElement("li");
  li.innerText = newTask;
  ulList.appendChild(li);

  const okok = `<div class="material-symbols-outlined">check_box_outline_blank</div>`;
  const test = `<img class= done src="select_check_box_.png"></img>`;

  li.insertAdjacentHTML("beforeend", okok);
  li.insertAdjacentHTML("beforeend", test);

  toDoList.push(newTask);
};

// Submit form

form.addEventListener("submit",(e) =>
  {
  e.preventDefault();
  newToDo();
  saveToStorage ();
  form.reset();
})

// mark done



// reset todolist

reset.addEventListener("click",()=>{
  window.location.reload();
  localStorage.clear();
});