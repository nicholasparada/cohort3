const functions = {

    showItems: (arrElements) => { // input is an array of Li elements
        let message = "";
        for (let i = 0; i < arrElements.length; i++) {
            message += arrElements[i].textContent + ", ";
        };
        return ("List items are: " + message.substring(0, message.length - 2));
    },

    addItems: (arrElements, childNumber) => {
        let newLi = document.createElement("li");
        newLi.textContent = `Item ${++childNumber}`;
        arrElements.appendChild(newLi);
    },

    addCards: (leftPanel) => {
        let cards = leftPanel.querySelectorAll("div").length;

        // ....

        let newCard = document.createElement("div");
        let title = 'Card ${divNumber}';
        let addBeforeButton = document.createElement("button");
        let addAfterButton = document.createElement("button");
        let delButton = document.createElement("button");

        newCard.appendChild(title);
        newCard.appendChild(addBeforeButton);
        newCard.appendChild(addAfterButton);
        newCard.appendChild(delButton);

        newLi.textContent = `Item ${++childNumber}`;
        arrElements.appendChild(newLi);
    },

};

export default functions;