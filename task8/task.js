let inputvalues=document.getElementById("inputField")
let position=document.getElementById("positionvalue")
let newElement=document.getElementById("newelement")
let error=document.getElementById("errordiv")
let replacebtn=document.getElementById("replacebutton")
let result=document.getElementById("resultdiv")

replacebtn.addEventListener("click",function(){
             error.innerHTML=""
             result.innerHTML=""
      let values=inputvalues.value.trim()
      let removeposition=Number(position.value)
       if(values===""){
              error.innerHTML="enter values separated with commas"
              return
       }
        
          let arrelements=values.split(",")

             let replacedarr=arrelements.splice(removeposition,1,newElement.value)

            //  console.log(replacedarr)
            //  console.log(arrelements)

             result.innerHTML=`${arrelements}`
            
             
})