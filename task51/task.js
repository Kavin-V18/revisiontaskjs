let timer;



window.onscroll=()=>{

// debounce

clearTimeout(timer);

timer=setTimeout(()=>{

console.log("Debounce scroll position:",window.scrollY+"px");

},500);

//trottle

if(!window.throttle){

console.log("Throttle scroll position:",window.scrollY+"px");

window.throttle=true;

setTimeout(()=>window.throttle=false,500);

}
}
