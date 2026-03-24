
let onlinestatus=document.getElementById("status")
function update(){

onlinestatus.innerText = navigator.onLine ? "Online" : "Offline";
}
window.addEventListener("online",update);
window.addEventListener("offline",update);

update()