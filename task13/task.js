
function count(){

let visits = getCookie("visits");
if(visits === ""){
visits = 0;
}
visits++;
document.cookie = "visits=" + visits;
alert("Visits: " + visits);
}
function getCookie(name){
let cookies = document.cookie.split(";");
for(let c of cookies){
let [key, value] = c.trim().split("=");
if(key === name){
return value;
}
}
return "";
}
