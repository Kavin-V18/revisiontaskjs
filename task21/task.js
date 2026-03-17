let input=document.getElementById("inputField")
let result=document.getElementById("resultDiv")

input.addEventListener("keyup",function(){
      let inputValue=input.value.trim()

      if(inputValue.length>200){
        result.innerHTML="*exceeded more than 200"
          return 
      }

      result.innerHTML=`the character length is ${inputValue.length}/200`
})