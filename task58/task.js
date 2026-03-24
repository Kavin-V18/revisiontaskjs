        let step = 0;
        let steps = document.querySelectorAll(".step");

        function showStep(){

            steps.forEach((s,i)=>s.style.display = i===step?"block":"none");
        }

        function next() {
            
            if (step < steps.length) {
                step++;
                showStep();
            }
        }
        function prev() {
            if (step > 0) {
                step--; showStep();
            }
        }
function result(){
    alert("form submitted successfully")
   step=0
}
        showStep();