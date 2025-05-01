const box = document.getElementById("box");
const usi = document.getElementById("input");
const but1 = document.getElementById("submit");
const p1 = document.getElementById("task");
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
let h1


function addThingy(){
    if (usi.value == ""){
        confirm("Invalid Input : Try Again");
    }
    else{
        p1.innerHTML = "";
        p1.removeAttribute('p');
        if (box.checked == true){
            impo = "Important";
        }
        currenttask.push(taskno);
        currenttask.push(usi.value);
        currenttask.push(drop.value);
        currenttask.push(impo);
        currenttask.push("Not Completed");
        currenttask.push(new Date);
        alltasks.push(currenttask);
        //h1.innerHTML += `Task ${taskno}: ${alltasks[taskno-1]} | ${impo}<div></div>`;
        for (value of alltasks){
            h1 = document.createElement("p");
            if (value[4] == "Completed"){
                h1.innerHTML = `<s>Task ${value[0]}: ${value[1]} | ${value[2]} Priority | ${value[3]} | <strong>${value[4]}</strong> | Added ${value[5]}</s>`;
            }
            else{
                h1.innerHTML = `Task ${value[0]}: ${value[1]} | ${value[2]} Priority | ${value[3]} | <strong>${value[4]}</strong> | Added ${value[5]}`; 
            }
            if (value[2] == "Low"){
                h1.style.color = "green";
            }
            else if (value[2] == "Medium"){
                h1.style.color = "blue";
            }
            else if (value[2] == "High"){
                h1.style.color = "orange";
            }
            if (value[3] == "Important"){
                h1.style.color = "red";
            }
            p1.appendChild(h1);
            console.log(JSON.stringify(alltasks));
        }
        usi.value = "";
        box.checked = false;
        taskno++;
        impo = "Not Important";
        currenttask = []
    }
    event.preventDefault();
}
function completeThingy(){
    console.log(isNaN(usire.value));
    if (isNaN(usire.value) == true){
        confirm("Invalid Input : Try Again");
    } else if (usire.value == ""){
        confirm("Invalid Input : Try Again");
    } else if (usire.value > alltasks.length){
        confirm("Invalid Input : Try Again");
    }
    else{
        p1.innerHTML = "";
        p1.removeAttribute('p');
        h1.innerHTML = ''
        for (value of alltasks){
            if (value[0]==usire.value){
                value[4] = "Completed";
            }
        }
        for (value of alltasks){
            h1 = document.createElement("p");
            if (value[4] == "Completed"){
                h1.innerHTML = `<s>Task ${value[0]}: ${value[1]} | ${value[2]} Priority | ${value[3]} | <strong>${value[4]}</strong> | Added ${value[5]}</s>`;
            }
            else{
                h1.innerHTML = `Task ${value[0]}: ${value[1]} | ${value[2]} Priority | ${value[3]} | <strong>${value[4]}</strong> | Added ${value[5]}`; 
            }
            if (value[2] == "Low"){
                h1.style.color = "green";
            }
            else if (value[2] == "Medium"){
                h1.style.color = "blue";
            }
            else if (value[2] == "High"){
                h1.style.color = "orange";
            }
            if (value[3] == "Important"){
                h1.style.color = "red";
            }
            p1.appendChild(h1);
        }
        usire.value = "";
    }
    event.preventDefault();
}

function removeThingy(){
    if (isNaN(usir.value)){
        confirm("Invalid Input : Try Again");
    } else if (usir.value == ""){
        confirm("Invalid Input : Try Again");
    } else if (usir.value > alltasks.length){
        confirm("Invalid Input : Try Again");
    }
    else{
        p1.innerHTML = "";
        p1.removeAttribute('p');
        deleted = false;
        for (value of alltasks){
            if (deleted == true){
                value[0]--;
                taskno--;
            }else if (value[0]==usir.value){
                finalvlaue=value[0]-1
                deleted = true
            }
        }
        alltasks.splice(finalvlaue,1);
        for (value of alltasks){
            h1 = document.createElement("p");
            if (value[4] == "Completed"){
                h1.innerHTML = `<s>Task ${value[0]}: ${value[1]} | ${value[2]} Priority | ${value[3]} | <strong>${value[4]}</strong> | Added ${value[5]}</s>`;
            }
            else{
                h1.innerHTML = `Task ${value[0]}: ${value[1]} | ${value[2]} Priority | ${value[3]} | <strong>${value[4]}</strong> | Added ${value[5]}`; 
            }
            if (value[2] == "Low"){
                h1.style.color = "green";
            }
            else if (value[2] == "Medium"){
                h1.style.color = "blue";
            }
            else if (value[2] == "High"){
                h1.style.color = "orange";
            }
            if (value[3] == "Important"){
                h1.style.color = "red";
            }
            p1.appendChild(h1);
        }
        usir.value = "";
    }
    event.preventDefault();
}
but1.addEventListener("click",addThingy);
but2.addEventListener("click",removeThingy);
but3.addEventListener("click",completeThingy);