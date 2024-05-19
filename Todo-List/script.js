const inputBox = document.getElementById("inputBox")
const addbtn = document.getElementById("addbtn")
const todoList = document.getElementById("todoList")


let editTodo = null;
const addtodo = ()=>{
    const inputText = inputBox.value.trim()
    if(inputText.length<=0)
        {
            alert("Are baba write something")
            return false
        }

        if(addbtn.value === "Edit"){
            editTodo.firstChild.textContent = inputText
            addbtn.value = "ADD"
            inputBox.value = ""
            editTodo= null
            return ;
        }
        const li =document.createElement("li")
        const p =document.createElement("p")
        li.innerHTML = inputText
        li.appendChild(p)

        const editbtn=document.createElement("button")
        editbtn.innerText = "Edit";
        editbtn.classList.add("btn", "editBtn")
        li.appendChild(editbtn)
        

        const deletebtn=document.createElement("button")
        deletebtn.innerText = "Remove";
        deletebtn.classList.add("btn", "deleteBtn")
        li.appendChild(deletebtn)

       

        todoList.appendChild(li)
        inputBox.value = "";
        saveLocalTodos(inputText)
    
}
const updateTodo = (e)=>{
    if(e.target.innerHTML === "Remove"){
        todoList.removeChild(e.target.parentElement)
    }
    if(e.target.innerHTML === "Edit")
        {
            // editElement = e.target.parentElement;  
            inputBox.value = e.target.parentElement.firstChild.textContent;
            inputBox.focus();
            addbtn.value = "Edit";
            editTodo = e.target.parentElement
        }
}
const saveLocalTodos = (todo) =>{
    let todos;
    if(localStorage.getItem("todos") === null)
        {
           todos=[]
        }
        else{
            todos = JSON.parse(localStorage.getItem("todos"))
        }
    
    todos.push(todo)
    localStorage.setItem("todos",JSON.stringify(todos))
    
}
addbtn.addEventListener('click', addtodo)
todoList.addEventListener('click', updateTodo)