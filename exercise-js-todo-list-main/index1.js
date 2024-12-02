
const input = document.querySelector(".input")
const itemList = document.querySelector(".list")
const formSubmit = document.querySelector(".form")
const box = document.querySelector(".toDo")

//localStorage.clear();

//Use input to add to the to do list

formSubmit.addEventListener("submit", (event)=>{
        event.preventDefault();

        const li = document.createElement("li");
        li.textContent = input.value;

        const ok = document.createElement("div");
        ok.innerText = "check_box_outline_blank";
        ok.setAttribute("class", "material-symbols-outlined");

        itemList.appendChild(li);
        li.appendChild(ok);

        const listLi = itemList.children;
        const list = [];

        for(i=0; i<listLi.length; i++){
            const listObject ={
                ToDoNr:i +1,
                text:listLi[i].innerText
            }
            list.push(listObject);
        }

        localStorage.setItem("ToDoo", JSON.stringify(list));
    
        formSubmit.reset();
        
})

//access the local storage

const items = localStorage.getItem("ToDoo");
console.log(items)
console.log(JSON.parse(items));



// försök 10000000

// click to done on things you complited

const okChecked = document.createElement("div");
okChecked.innerText = "checked";
okChecked.setAttribute("class", "new");

const firstElimentChild = ulList.childNodes;
const nodeArray = [];

for (var i = 0; i < firstElimentChild.length; i++) {
      firstElimentChild[i]= item
      item.addEventListener("click", ()=>{
        console.log("hellow")
      })
    }

/*firstElimentChild.forEach((element) => {
  element.addEventListener("click", () {
   console.log("itworked", element)
  });
});*/

  /*ulList.addEventListener("click", (event)=>{
    
    const okChecked = document.createElement("div");
    okChecked.innerText = "checked";
    okChecked.setAttribute("class", "new");

    const firstElimentChild = ulList.childNodes;
    const nodeArray = [];

    for (var i = 0; i < firstElimentChild.length; i++) {
      nodeArray.push(firstElimentChild[i]);
    }
console.log(nodeArray)*/
  



    /*const siblings = ulList.firstChild
    const child = siblings.firstChild

    siblings.forEach(function(child,index) {
      
    });

    if(siblings){
        console.log("hello")
        child.parentNode.replaceChild(okChecked, child);
    }
  })*/
    
// submit

form.addEventListener("submit", (event) => {
  
});

//access the local storage

let storedSettings = JSON.parse(localStorage.getItem("ToDoListObject"));

   
//console.log(JSON.parse(ToDoListObject));


//localStorage.clear();
