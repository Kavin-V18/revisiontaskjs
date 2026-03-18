let search=document.getElementById("searchBox")
let result=document.getElementById("result")
let elements=document.querySelectorAll(".fruits li")


   
          let fruits=[...elements]
   
search.addEventListener("keyup",function(e){
   result.innerHTML=""
            let searched=search.value.trim()

         
            let items=fruits.map(data=>data.textContent).filter(data=>data.includes(searched))

          result.innerText=`${items}`        
})