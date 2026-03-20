      let myModal = document.getElementById("myModal");

        let  button = document.getElementById("modalButton");

        let  cancelButton = document.getElementById("cancelButton");
           myModal.style.display = "none";
        button.onclick = function () {
            myModal.style.display = "block";
        }
        cancelButton.onclick = function (){
                myModal.style.display = "none";
            }