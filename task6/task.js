let checkall=document.getElementById("checkall")
let uncheckall=document.getElementById("uncheckall")
let toggle=document.getElementById("toggle")



checkall.addEventListener("click",function(){

     let allcheckbox=document.querySelectorAll(".check")

     console.log(allcheckbox)

     allcheckbox.forEach(boxes=>{
        boxes.checked=true;
     })
})
uncheckall.addEventListener("click",function(){

     let allcheckbox=document.querySelectorAll(".check")

     console.log(allcheckbox)

     allcheckbox.forEach(boxes=>{
        boxes.checked=false;
     })
})
toggle.addEventListener("click",function(e){

     let allcheckbox=document.querySelectorAll(".check")

     console.log(allcheckbox)

     allcheckbox.forEach(boxes=>{
        boxes.checked=!boxes.checked;
     })
})

