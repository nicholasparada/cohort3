console.log("hello world");
let button = document.getElementById("clickButton");
function onButtonClicked(){
    console.log("i'm in the button click event");
}
button.addEventListener("click", onButtonClicked);

let input = document.getElementById("value");
