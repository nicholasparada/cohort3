import functions from "./10_25_tdd.js"

console.log("hola");
//console.log("hello world from 10_25_tddmain");

const Btn = idDoIt;

//console.log(idDoIt);
Btn.addEventListener("click", () => {
    //console.log("in event listener");
    //console.log("Number1: ", idNumber1.value);
    functions.helloworld();
    const sumNum = functions.sum(Number(idNumber1.value), Number(idNumber2.value));
    console.log(sumNum);

});

//console.log("hello world");
