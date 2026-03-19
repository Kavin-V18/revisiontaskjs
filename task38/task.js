
    let products=["laptop","mobilephone","computer","tablet"]
 function debounceFunction(callback){
      let timer;
       return function(){
            clearTimeout(timer)

            timer=setTimeout(()=>{
                  callback()
            },300)
       }
} 

function callbackFunction(){
       let input=  document.getElementById("inputField").value.trim()
         let output=products.filter(data=>data.includes(input))
       let result= document.getElementById("result")
       result.innerHTML=`${output}`
}

let searchFunction=debounceFunction(callbackFunction)