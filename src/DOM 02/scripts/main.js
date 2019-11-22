import functions from "./functions.js"

// ------------------- Cards ----------------
// const addDivButton = document.getElementById("idAddDiv");
// const addBefButton = document.getElementById("idAddBefore");
// const addAffter = document.getElementById("addAffter");
// const delCard = document.getElementById("delCard");

// const left = document.getElementById("left");


left.addEventListener("click", () => {
    console.log(event);

    //Bubbled event listener for Add card
    if (event.target.id === "idAddDiv") {
        left.appendChild(functions.createCard(left));
    };

    if (event.target.id === "idAddAfter") {
        left.insertBefore(functions.createCard(left), event.target.parentNode.nextSibling);
    };

    if (event.target.id === "idAddBefore") {
        left.insertBefore(functions.createCard(left), event.target.parentNode);

    };

    if (event.target.id === "idDel") {
        left.removeChild(event.target.parentNode);

    };

    

});

