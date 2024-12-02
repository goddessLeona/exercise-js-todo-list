const input = document.querySelector(".input");
const ulList = document.querySelector(".ulList");
const form = document.querySelector(".form");
const box = document.querySelector(".container");
const reset = document.querySelector(".reset")

const toDoList = []

const ToDoListObject ={
    ToDo: toDoList,
    Done: [],
}

// add new todos to list and a checkbox

input.addEventListener ("keypress",function(event){
    
    if (event.key === "Enter") {
      event.preventDefault();
      const li = document.createElement("li");

      const okok = `<div class="material-symbols-outlined">check_box_outline_blank</div>`;
      const test = `<img class= done src="select_check_box_.png"></img>`;
    
      li.insertAdjacentHTML("beforeend", okok);
      li.insertAdjacentHTML("beforeend", test)

      const text = document.createTextNode(input.value);
      li.appendChild(text);

      let x = new Uint32Array(1);
      crypto.getRandomValues(x)
      li.setAttribute("class", x)
      ulList.appendChild(li)

      toDoList.push(li.lastChild.data);
      
      localStorage.setItem("ToDo", JSON.stringify(ToDoListObject));
      input.value=""
    }
  })

// add done to the todo list

ulList.addEventListener('click',(e) =>
  {
    const target = e.target.className;
    const lastChild =  e.target.lastChild;
    let first = e.target.firstChild
    let first2 = ulList.children

    lastChild.replaceChild
    

    if(target === target){
      console.log("hjölp")
    
      
    }else{
      console.log("fuck")
    }
  }
);



// reset todolist

reset.addEventListener("click",()=>{
  window.location.reload();
  localStorage.clear();
})