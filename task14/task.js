let inputvalue=document.getElementById("inputfield")
let error=document.getElementById("errordiv")
let button=document.getElementById("count")
let result=document.getElementById("result")

 button.addEventListener("click",function(){
    error.innerHTML=""
    result.innerHTML=""
       let values=inputvalue.value.trim()

       if(values===""){
          error.innerHTML="enter a sentence"
       }

       let array=values.split(" ")

           result.innerHTML=`total words= ${array.length}`
 })