const input = document.querySelector(".input");
const inputValue = document.querySelector("#input-value");
const ulList = document.querySelector(".ulList");
const form = document.querySelector(".form");
const box = document.querySelector(".container");

const toDoList = []

//const li = document.createElement("li");
//ulList.appendChild(li);

//const ok = `<span class="material-symbols-outlined">check_box_outline_blank</span>`;
//ulList.insertAdjacentHTML("beforeend", ok);


/*const ok = document.createElement("div");
ok.innerText = "check_box_outline_blank";
ok.setAttribute("class", "material-symbols-outlined");
li.appendChild(ok);*/

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
      ulList.appendChild(li);

      toDoList.push(li);
      input.value=""
    }
  })

    
console.log(toDoList)
