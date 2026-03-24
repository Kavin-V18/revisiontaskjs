
let area = document.getElementById("dropArea");
 

area.addEventListener("dragover", function(e){
e.preventDefault();
});
 

area.addEventListener("drop", function(e){
e.preventDefault();
 
let file = e.dataTransfer.files[0];
 
if(file.type.startsWith("image")){
document.getElementById("result").innerText = "File: " +file.name;
}else{
document.getElementById("result").innerText = "Only image allowed";
}
 
});
 
