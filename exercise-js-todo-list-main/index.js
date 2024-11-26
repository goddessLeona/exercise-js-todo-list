
const input = document.querySelector(".input")
const itemList = document.querySelector(".list")
const formSubmit =document.querySelector("form")

//Use input to add to the to do list

formSubmit.addEventListener("submit", (event)=>{
        event.preventDefault();
        const li = document.createElement("li");
        li.textContent = input.value;
        itemList.appendChild(li);
        formSubmit.reset();
})

//Mark a todo as completed
