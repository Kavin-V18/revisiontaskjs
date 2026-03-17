let inputvalue=document.getElementById("inputfield")
let error=document.getElementById("errormsg")
let button=document.getElementById("reverse")
let result=document.getElementById("resultdiv")

button.addEventListener("click",function(){
       
    error.innerHTML=""
    result.innerHTML=""
        
       let value=inputvalue.value.trim()

            if(value===""){
                 error.innerHTML="enter a word"
                 return
            }

            let reversedvalue=value.split("").reverse().join("")
            
               result.innerHTML=`the reversed string : ${reversedvalue}`

})