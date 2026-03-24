
let draggedItem = null;
let items = document.querySelectorAll("#list li");
items.forEach(item => {

 // Start dragging
 item.addEventListener("dragstart", function(){

 draggedItem = this;

 });
 // Allow drop
 item.addEventListener("dragover", function(e){
 e.preventDefault();
 });
 // Drop
 item.addEventListener("drop", function(){
 this.parentNode.insertBefore(draggedItem, this);

 });
});