   let nameInput=document.getElementById("nameInput")
   let ageInput=document.getElementById("ageInput")
   let button=document.getElementById("addButton")
   let tableContent=document.getElementById("tableContent")

           let object={}
   button.addEventListener("click",function(){
           let userName=nameInput.value.trim()
           let userAge=ageInput.value.trim()
                 object.name=userName
                 object.age=userAge

                let newRow= document.createElement("tr")

            

                 newRow.innerHTML=` <td>${object.name}</td><td>${object.age}</td>`

                 tableContent.appendChild(newRow)
   })
         