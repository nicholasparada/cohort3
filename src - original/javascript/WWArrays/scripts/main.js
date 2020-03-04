import functions from './functions.js'

let emptyArray = [];

idAdd.addEventListener("click", () => {
    console.log("click Add button");
    let addedItem = functions.add(Number(idInputValueField.value));
    console.log(addedItem);
    emptyArray.push(Number(idInputValueField.value));
    console.log(emptyArray);
    idMessageArea.textContent = addedItem;
    idInputValueField.value = "";
});

idShow.addEventListener("click", () => {
    console.log("click Show button");
    let showArray = functions.show(emptyArray);
    idMessageArea.textContent = `Your current array is: ${showArray}`;
});

idTotal.addEventListener("click", () => {
    console.log("click Total button");
    let totalArray = Number(functions.total(emptyArray));
    idMessageArea.textContent = `The total sum of your array is: ${totalArray}`;
    console.log(totalArray);
});

idClear.addEventListener("click", () => {
    console.log("click Clear button");
    emptyArray = [];
    idInputValueField.value = "";
    idMessageArea.textContent = "Array Cleared";
    console.log(emptyArray);
});