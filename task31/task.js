let item = document.getElementById("drag-item");
let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");


item.addEventListener("dragstart", dragStart);
box1.addEventListener("dragover", dragOver);
box1.addEventListener("drop", drop);
box2.addEventListener("dragover", dragOver);
box2.addEventListener("drop", drop);

let draggedItem = null;

function dragStart(e) {
    draggedItem = e.target;

}

function dragOver(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    if (this !== draggedItem.parentNode) {
        this.appendChild(draggedItem); 
    }

    draggedItem = null;
}
