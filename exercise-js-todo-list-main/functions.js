async function getDummyTodos(){
    try{
const res = await fetch ("http://jsonplaceholder.typicode.com/todos")
    const todos = await res.json();

    return todos.slice(0,3);
    }catch(error){
        console.log("error"){
            return{
                error:"somthing went with your request",
                todo: [],
            }
        }
    }
    async function getTodos(){
        const key ="todos";
        const todosLS = JSON.parse(localStorage.getItem(key));

        if(!todosLS){
            console.log("there is nothing in local storage");
            const todos =await getDummyTodos();
            localStorage.setItem(key, JSON.stringify(todos));
            return todos;
        }
    }
      return todosLS  
    }
