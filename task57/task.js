

let history=[], index=-1;

input.oninput=()=>{
history.push(input.value);
index++;
};

function undo(){
if(index>0) input.value=history[--index];

}
function redo(){

if(index<history.length-1) input.value=history[++index];

}