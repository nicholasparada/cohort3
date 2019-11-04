const functions = {

    helloworld: () => {
        console.log("hi");
    },
    counter: 0,

    createCard: () => {
        functions.counter++;

        let div = document.createElement("div");
        div.setAttribute("count", functions.counter);
        div.textContent = `count ${functions.counter}`;
        div.setAttribute("class", "test");
        return div;
    },

    addCard: (groupCardDiv) => {
        let newChildCard = functions.createCard();
        groupCardDiv.appendChild(newChildCard);
        return;

    }








};







export default functions;
