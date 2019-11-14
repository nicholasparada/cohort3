import functions from "./func.js"
// import { isDeclaredPredicate } from "@babel/types";

//console.log("hola");

//MAP FUNCTION

const Btn = idDoIt;

console.log(idDoIt);
Btn.addEventListener("click", () => {
    console.log("Hello world from DOM");
});

idLeftSide.addEventListener("click", () => {
    console.log(event.target, event.target.getAttribute("count"));
    console.log(event.target.parentNode);
    console.log(event.target.parentNode.children);

});

let click = 0;
idAdd.addEventListener("click", () => {
    console.log(event.target);
    
//  alert('haha');
 functions.addCard(idLeftSide);
});

// let a = document.getElementById("idAdd");
// a.onclick = function(b) {

    // const div = document.createElement('div');
    // div.textContent = click++;
    // div.className = 'test';
    // idBigDiv.append(div);
// };
