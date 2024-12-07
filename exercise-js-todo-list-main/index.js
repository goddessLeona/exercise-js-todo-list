
const input = document.querySelector(".input");
const ulList = document.querySelector(".ulList");
const form = document.querySelector(".form");
const box = document.querySelector(".container");
const reset = document.querySelector(".reset");


// hämtar från local storge
let todos = JSON.parse(localStorage.getItem("todos")) || [];

// Save to local storage
function saveTodo() {
  localStorage.setItem("todos", JSON.stringify(todos));
}


// New Todo

function newLiContent(){
  ulList.innerHTML = "";

   todos.forEach((todo, index) => {
        const liElement = document.createElement("li");

        liElement.innerHTML =
          /*html*/
          `
        <div class="action">
          <div class="enterTodo ${todo.checked ? "checked" : ""}" todoIndex="${index}"> ${todo.task}</div>

          <div class="move">
            <span class=" up material-symbols-outlined" todoIndex= "${index}">arrow_upward</span>
            <span class=" down material-symbols-outlined" todoIndex= "${index}">arrow_downward</span
          </div>

          <div class="remove">
            <span class="close material-symbols-outlined" todoIndex= "${index}">delete</span>
          </div>

        </div>
        `;
        
        ulList.appendChild(liElement);
})
}

function addTodo() {
    const task = input.value.trim();

    const newTodoObj = {
        task: task,
        checked: false  // unchecked
    };

    todos.push(newTodoObj);
    saveTodo();  
    newLiContent();  

    input.value = ""; 
}

// summit by enter

form.addEventListener("submit", (e) => {
  e.preventDefault();
  newLiContent();
  addTodo();
  saveTodo();
  form.reset();
});

// remove todo
function removeTodo(index) {
  todos.splice(index, 1);
  saveTodo();
  newLiContent();
}

//flytta ner en todo
function moveTodoDown(index){ 
    if(index < todos.length - 1){
    const todoToMoveDown = todos[index];
    
        todos.splice (index, 1);
        todos.splice(index +1, 0, todoToMoveDown);
        
        saveTodo();
        newLiContent();
    }
};

// flytta up en todo
function moveTodoUp(index){ 
    if(index > 0){

        const todoMoveUp= todos[index];
        
        todos.splice(index, 1);
        todos.splice(index -1, 0, todoMoveUp);
        
        saveTodo();
        newLiContent();
    }
};


ulList.addEventListener("click", function (event) {
  const index = event.target.getAttribute("todoIndex");

  if (event.target.classList.contains("close")) {
    removeTodo(index);
  }

  if (event.target.classList.contains("up")) {
    moveTodoUp(index);
  }

  if (event.target.classList.contains("down")) {
    moveTodoDown(index);
  }

  if (event.target.classList.contains("enterTodo")) {
    todos[index].checked = !todos[index].checked; // Växla mellan true/false
    saveTodo();
    newLiContent();
  }

});

reset.addEventListener("click", () => {
  window.location.reload();
  localStorage.clear();
});

newLiContent();


//Old version
/*function newToDo() {
  const newTask = input.value;

  const li = document.createElement("li");
  li.innerText = newTask;
  li.setAttribute("class", newTask)

  const okok = `<div class=" ok material-symbols-outlined">check_box_outline_blank</div>`;
  const arrowUp =`<span class=" up material-symbols-outlined">arrow_upward</span>`;
  const arrowDown = `<span class=" down material-symbols-outlined">arrow_downward</span>`;
  const remove = `<span class=" delite material-symbols-outlined">delete</span>`;
  
  li.insertAdjacentHTML("afterbegin", okok);
  li.insertAdjacentHTML("afterbegin", arrowUp);
  li.insertAdjacentHTML("afterbegin", arrowDown);
  li.insertAdjacentHTML("afterbegin", remove);
  
  ulList.appendChild(li);

  todos.push(newTask);
}
// all the todos
function allTheToDos (){
  
  for (const todoitem of toDoList) {
    console.log(todoitem);
  }
}

// make the todos done


ulList.addEventListener("click", (e)=>{

const targetLiChild = e.target;

if (targetLiChild.innerText === `check_box_outline_blank`) {
  const newTodoContenet = `check_small`;
  targetLiChild.innerText = newTodoContenet;
  
  const x = targetLiChild.parentElement
  console.log(x)
  
  
}else if(targetLiChild.innerText ===`check_small`){
  const newTodoContenet2 = `check_box_outline_blank`;
  targetLiChild.innerText = newTodoContenet2;
}else if (targetLiChild.innerText === `delete`) {
  
  
   const test = targetLiChild.parentElement

    if(test.hasChildNodes()){

      test.innerText = ""
      test.removeChild(test.children[0]);
      test.removeChild(test.children[0]);
      test.removeChild(test.children[0]);
      test.removeChild(test.children[0]);
    }
}else if(targetLiChild.innerText === `arrow_upward`){
  const moveUp = targetLiChild.parentElement;
}
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

newLiContent();*/