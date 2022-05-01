const ratingState = document.getElementById("rating-state");
const thankYouState = document.getElementById("thank-you-state");
const form = document.querySelector("form");
const radioButtons = document.querySelectorAll("input[type='radio']");
var stars = document.getElementById("selected-stars")


form.addEventListener("submit", e => {
    e.preventDefault;
    if (radioChecks()){
        transition();
    }
});

function transition(){
    radioButtons.forEach(radio => {
        if (radio.checked){
            let label = document.querySelector(`label[for='${radio.id}']`)
            stars.innerHTML = label.innerHTML;
            ratingState.className += " hidden";
            thankYouState.className = "main-container";
        };
    });

};

function radioChecks(){
    let validation = false;
    radioButtons.forEach(radio => {
        if (radio.checked){
                validation = true;
        }
    });
    if (!validation){
        alert("Stars not selected.");
            console.log("Alerted");
    };
    return validation;
}