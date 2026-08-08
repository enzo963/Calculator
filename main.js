// variables

const display = document.querySelectorAll(".result-area");
let currentValue = "";
const buttons = document.querySelectorAll(".btn");




buttons.forEach(button => {
    button.addEventListener("click", (event) => {

        if (currentValue.includes(".")) {

        }
        else {
            currentValue += event.target.textContent;
            document.querySelector(".result-area").value = currentValue;
        }
    })
});





// function add() {

//     }

// function subtract() {

//     }

// function multiply() {

//     }

// function divide() {

//     }


// function clearDisplay() {
// 
// }
// 
// function backspace() {
// 
// 
// }

//-----------------------------

function doNathing() {

}


buttons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.add("pressed");

        setTimeout(() => {
            button.classList.remove("pressed");
        }, 800);

    });

});