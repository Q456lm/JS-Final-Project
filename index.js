const box = document.getElementById("box");
const usi = document.getElementById("input");
const but1 = document.getElementById("submit");
const h1 = document.getElementById("task");
const usir = document.getElementById("tas");
const but2 = document.getElementById("remove");
// use .checked()
let taskno = 1;
let impo = "Not Important";
let alltasks = [];
let currenttask = [];

function addThingy(){
    h1.innerHTML = "";
    if (box.checked == true){
        impo = "Important";
    }
    currenttask.push(taskno);
    currenttask.push(usi.value);
    currenttask.push(impo);
    alltasks.push(currenttask);
    //h1.innerHTML += `Task ${taskno}: ${alltasks[taskno-1]} | ${impo}<div></div>`;
    for (value of alltasks){
        h1.innerHTML += `Task ${value[0]}: ${value[1]} | ${value[2]}<div></div>`;
    }
    usi.value = "";
    box.checked = false;
    taskno++;
    impo = "Not Important";
    currenttask = []
    event.preventDefault();
}

function removeThingy(){
    h1.innerHTML = "";
    for (value of alltasks){
        h1.innerHTML += `Task ${value[0]}: ${value[1]} | ${value[2]}<div></div>`;
    }
}
but1.addEventListener("click",addThingy);
but2.addEventListener("click",removeThingy);