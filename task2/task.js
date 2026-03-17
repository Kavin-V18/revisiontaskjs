let inputvalue=document.getElementById("inputField")
let error=document.getElementById("errormsg")
let button=document.getElementById("checkButton")
let result=document.getElementById("resultDiv")

    button.addEventListener("click",function(){
          error.innerHTML=""
          result.innerHTML=""
              let arr=["a","e","i","o","u"]
             let letter=inputvalue.value.trim()

             if(letter===""){error.innerHTML="enter a letter";
                 return
             }

               let word=arr.some(ele=> ele===letter.toLowerCase())
               console.log(word)

               if(word){
                 result.innerHTML="Vowel"
               }
               else{
                result.innerHTML="not vowel"
               }

    })