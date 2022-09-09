let form=document.querySelector("form")
let listGroup=document.querySelector("ul")
let input=document.querySelector("input")

form.addEventListener("submit",saveTodo)

function saveTodo(e){
    e.preventDefault()
    let newTodo = document.createElement("li")
    newTodo.className = "list-group-item  rounded-0 mt-3"
    newTodo.innerText = input.value
   let delBtn = document.createElement("button")
   delBtn.className = "btn btn-sm btn-danger bi bi-trash float-end rounded-4 delete"
  //  delBtn.innerText = "Remove"
   newTodo.appendChild(delBtn)
   listGroup.appendChild(newTodo)
    form.reset()
}

listGroup.addEventListener("click" , deleteTodo)

function deleteTodo(e){
  if(e.target.className.includes("btn-danger bi bi-trash ")){
  let li = e.target.parentElement;
listGroup.removeChild(li)
  }
}

