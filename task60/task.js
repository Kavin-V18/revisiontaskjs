
let timer;

function resetTimer(){

clearTimeout(timer);

timer = setTimeout(() => {

let stay = confirm("Are you still there?");

if(!stay){
alert("Logged out due to inactivity");
}
}, 10000);

}
// Events to detect activity
window.onload = resetTimer;
document.onmousemove = resetTimer;
document.onkeypress = resetTimer;
