const taskInput = document.querySelector("input")
const taskList = document.querySelector("ul")
const buttonTask = document.querySelector("#add-task")

function inputLength(){
    return taskInput.value.length
}
function createListElement(){
    let li = document.createElement('li')
    li.textContent = taskInput.value
    taskList.appendChild(li)
    taskInput.value = "";

    let deleteBtn = document.createElement("span");
    deleteBtn.textContent = "X";
    li.appendChild(deleteBtn);
    function crossOut(){
        li.classList.toggle('done')
    }
    li.addEventListener('click', crossOut)
    deleteBtn.addEventListener("click", function(){
        li.remove()
    })
}
function addTaskAfterClick(){
    if(inputLength() > 0){
        createListElement()
    }
}
function addListAfterKeyPress(event){
    if(inputLength() > 0 && event.key === "Enter"){
        createListElement();
    }
}
buttonTask.addEventListener("click", addTaskAfterClick)
taskInput.addEventListener("keypress", addListAfterKeyPress)