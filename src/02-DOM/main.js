import functions from "./functions.js"

idShow.addEventListener("click", () => {
    let listItems = document.querySelectorAll("li");
    idMessage.textContent = functions.showItems(listItems);
});

idAdd.addEventListener("click", () => {
    functions.addItems(idOl, document.querySelectorAll("li").length);
});

idAddCard.addEventListener("click", () => {
    functions.addCards(idleft-panel, idleft-panel.querySelectorAll("div").length);
})