let search=document.getElementById("searchBox")
let result=document.getElementById("result")


   let fruits=["mango","apple","banana","grappes","jackfruit","orange"]
search.addEventListener("keyup",function(){
            let searched=search.value.trim()
       let output=fruits.filter(elements=> elements.includes(searched))
       
       result.innerText=`${output}`

})