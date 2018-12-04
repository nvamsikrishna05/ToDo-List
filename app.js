//Get all UI variables
const newTask = document.querySelector('#newTask');
const toDoList = document.querySelector('#toDoList');
const form = document.querySelector('#taskForm');
const clearAll = document.querySelector('#clearAll');


//Load all Event Listeners
function loadEventListeners(){

    //UI setup on DOM Loading
    document.addEventListener('DOMContentLoaded', setUI);

    //New Task Listener
    form.addEventListener('submit', addTask);

    //Clear Selected Task
    toDoList.addEventListener('click', clearSelectedTask);

    //ClearAll Listener
    clearAll.addEventListener('click', clearAllTasks);
}

function setUI(){
    if(toDoList.children.length === 0){
        clearAll.disabled = true;
    }
    else{
        clearAll.disabled = false;
    }
}


function addTask(e){
    
    if(newTask.value === ''){
        alert('Please add a Task');
    }
    else{
        li = createElement('li',newTask.value.trim(),'card card-content');
        a = createElement('a','','clearTask delete');
        li.appendChild(a);

        //Adding Task to the ToDo List
        toDoList.appendChild(li);
    }

    newTask.value = '';
    setUI();
    e.preventDefault();
}

function createElement(element,textContent,className){
    e = document.createElement(element);
    e.textContent = textContent;
    e.className = className;
    return e;
}

function clearSelectedTask(e){
    
    if(e.target.classList.contains('clearTask')){
        let task = e.target.parentElement;
        toDoList.removeChild(task);
    }
    setUI();
}

function clearAllTasks(e){

    toDoList.innerHTML = '';
    setUI();
}


loadEventListeners();