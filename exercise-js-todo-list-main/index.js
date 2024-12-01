const input = document.querySelector(".input");
const ulList = document.querySelector(".ulList");
const form = document.querySelector(".form");
const box = document.querySelector(".container");

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
      const ok = document.createElement("div");
      ok.innerText = "check_box_outline_blank";
      ok.setAttribute("class", "material-symbols-outlined");
      li.appendChild(ok);
      
      const text = document.createTextNode(input.value);

      li.appendChild(text);
      ulList.appendChild(li)
 
      toDoList.push(li.lastChild.data);
      
      localStorage.setItem("ToDo", JSON.stringify(ToDoListObject));
      input.value=""
    }
  })

// add a class to the checkbox
  



// click to done on things you complited

  ulList.addEventListener("click", (event)=>{
    
    const okChecked = document.createElement("div");
    okChecked.innerText = "check_box";
    okChecked.setAttribute("class", "material-symbols-outlined");

    const siblings = ulList.firstChild
    const child = siblings.firstChild
    console.log(siblings)
    console.log(child)

    if(siblings){
        console.log("hello")
        child.parentNode.replaceChild(okChecked, child);
    }
  })
    
// submit

form.addEventListener("submit", (event) => {
  
});

//access the local storage

let storedSettings = JSON.parse(localStorage.getItem("ToDoListObject"));
console.log(storedSettings)
   
//console.log(JSON.parse(ToDoListObject));


//localStorage.clear();