

const tasks = document.getElementsByTagName("LI");

function createDeleteButton(task){
    const textNode = document.createTextNode("Delete")
    const buttonElement = document.createElement("button")
    buttonElement.className = "close"
    buttonElement.appendChild(textNode)
    buttonElement.addEventListener("click", () => {
        task.style.display = "none" //buttoni elemendi parent element on task
    })
    return buttonElement
}

for(const task of tasks){
    const buttonElement = task.appendChild(createDeleteButton(task))
    task.appendChild(buttonElement)
}


function markChecked(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
}


function newTask(){
    const inputTask = document.getElementById("myInput").value;
    if(!inputTask){
        alert("Cannot add an empty task!")
        return
    }
    var tekst = document.createTextNode(inputTask)
    var listItem = document.createElement("LI")
    listItem.appendChild(tekst)
    var tasks = document.getElementById("myUL")

    const buttonElement = createDeleteButton(listItem)
    listItem.appendChild(buttonElement)

    tasks.appendChild(listItem)
    document.getElementById("myInput").value = ""
}

function searchTasks(){
    const searchInput = document.getElementById("searchInput").value.toLowerCase().trim()

    var tasks = document.querySelectorAll("LI")

    for(const task of tasks){
        var taskText = task.textContent.trim().replace("Delete", "").trim()

        if(taskText.includes(searchInput)){
            task.style.display = ""
        }
        else{
            task.style.display = "none"
        }
    }
}


document.querySelector("ul"),addEventListener("click", markChecked)
document.getElementById("searchInput").addEventListener("keyup", searchTasks)





















//buttonElement.setAttribute("class", "close")

// document.querySelector("ul"),addEventListener("click", (MouseEvent) => {
//     if(MouseEvent.target.tagName === "LI"){
//         MouseEvent.target.classList.toggle("checked");
//     }
// })

// for(const task of tasks){

//     const textNode = document.createTextNode("Delete")
//     const buttonElement = document.createElement("button")
//     buttonElement.className = "close"
//     buttonElement.appendChild(textNode)
//     buttonElement.addEventListener("click", () => {
//         task.style.display = "none" //buttoni elemendi parent element on task
//     })
//     task.appendChild(buttonElement)
// }