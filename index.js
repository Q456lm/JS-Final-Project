const box = document.getElementById("box");
const usi = document.getElementById("input");
const but1 = document.getElementById("submit");
const h1 = document.getElementById("task");
const usir = document.getElementById("tas");
const but2 = document.getElementById("remove");
const drop = document.getElementById("pri");
const but3 = document.getElementById("complete");
const usire = document.getElementById("tast");
// use .checked()
let deleted = false;
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
    currenttask.push(drop.value);
    currenttask.push(impo);
    currenttask.push("Not Completed");
    alltasks.push(currenttask);
    //h1.innerHTML += `Task ${taskno}: ${alltasks[taskno-1]} | ${impo}<div></div>`;
    for (value of alltasks){
        h1.innerHTML += `Task ${value[0]}: ${value[1]} | ${value[2]} Priority | ${value[3]} | <strong>${value[4]}</strong><div></div>`;
    }
    usi.value = "";
    box.checked = false;
    taskno++;
    impo = "Not Important";
    currenttask = []
    event.preventDefault();
}
function completeThingy(){
    console.log("bob");
    h1.innerHTML = ''
    for (value of alltasks){
        if (value[0]==usire.value){
            console.log("Chirstopher");
            value[4] = "Completed";
        }
    }
    for (value of alltasks){
        h1.innerHTML += `Task ${value[0]}: ${value[1]} | ${value[2]} Priority | ${value[3]} | <strong>${value[4]}</strong><div></div>`;
    }
    usire.value = "";
    event.preventDefault();
}

function removeThingy(){
    h1.innerHTML = ''
    deleted = false;
    for (value of alltasks){
        if (deleted == true){
            value[0]--;
            taskno--;
        }else if (value[0]==usir.value){
            finalvlaue=value[0]-1
            deleted = true
            console.log(alltasks);
        }
    }
    alltasks.splice(finalvlaue,1);
    for (value of alltasks){
        h1.innerHTML += `Task ${value[0]}: ${value[1]} | ${value[2]} Priority | ${value[3]} | <strong>${value[4]}</strong><div></div>`;
    }
    usir.value = "";
    event.preventDefault();
}
but1.addEventListener("click",addThingy);
but2.addEventListener("click",removeThingy);
but3.addEventListener("click",completeThingy);