let inputvalue=document.getElementById("inputField")
let error=document.getElementById("errorMsg")
let button=document.getElementById("checkButton")
let result=document.getElementById("resultDiv")

button.addEventListener("click",function(){
   
      error.innerHTML=""
      result.innerHTML=""
       
       let value=inputvalue.value.trim()
        if(value===""){
             error.innerHTML="enter a word"
             return
        }

          let length=value.length
          console.log(length)

              if(value[0]===value[length-1]){
                 result.innerHTML="both are same"
              }
              else{
                  result.innerHTML="both are not same"
              }
})