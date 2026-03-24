

let draggedItem;
function allow(e){
e.preventDefault();

}

function drag(e){
draggedItem = e.target;
}
function drop(e){
e.preventDefault();
e.target.appendChild(draggedItem);
}