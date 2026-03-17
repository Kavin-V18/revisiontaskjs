let inputvalue=document.getElementById("inputField")
let error=document.getElementById("errorMsg")
let button=document.getElementById("find")
let result=document.getElementById("resultDiv")

button.addEventListener("click",function(){
     error.innerHTML=""
     result.innerHTML=""
      
        let value=inputvalue.value.trim()
        if(value===""){
             error.innerHTML="enter the numeric values with commas"
             return
        }

        let arrvalue=value.split(",")
        
           console.log(arrvalue)
         let largest=arrvalue.reduce((acc,curr)=> Number(acc)>Number(curr)?acc:curr)

         result.innerHTML=`the largest is: ${largest}`

})