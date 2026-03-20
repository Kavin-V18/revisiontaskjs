  let modal = document.getElementById("myModal");
        let  button = document.getElementById("openButton");

        let close = document.getElementsByClassName("closeButton")[0];
              modal.style.display = "none"
        button.onclick = function () {
            modal.style.display = "block";
        }
        close.onclick = function(){
            modal.style.display = "none"
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }