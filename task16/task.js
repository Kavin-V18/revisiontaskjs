let inputvalue=document.getElementById("inputfield")
let error=document.getElementById("errormsg")
let button=document.getElementById("countbtn")
let result=document.getElementById("resultdiv")
 

 button.addEventListener("click",function(){

    error.innerHTML=""
    result.innerHTML=""
      
       let values=inputvalue.value.trim()

        if(values==="")
        {
             error.innerHTML="empty input not allowed"
             return
        }
        if(/\d/.test(values))
        {
             error.innerHTML="numbers not allowed"
             return
        }
        if(/[^\w\s]/.test(values)){
              error.innerHTML="special characters not allowed"
              return
        }

           let vowelscount=0
           let consonantscount=0
        //    console.log(values)

           let arr=values.split("")
            
               arr.forEach(element => {
                    
                    if("aeiou".includes(element)){
                         vowelscount++
                    }
                    else{
                         consonantscount++
                    }
               });
               result.innerText=`vowels count: ${vowelscount}
                consonants count :${consonantscount}`
 })