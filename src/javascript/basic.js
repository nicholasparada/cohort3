console.log("hello world from basic.js");


const button = document.getElementById("pbutton");
const input = document.getElementById("uinput");



function onButtonClicked() {
    console.log("Im in the button click event");
    console.log(Number(input.value) + 1);
};

function size(integer) {
    if (integer < 10) {
        return "small";
    } else if (integer >= 10 && integer <= 19) {
        return "med";
    } else return "large";
};




button.addEventListener("click", onButtonClicked);

