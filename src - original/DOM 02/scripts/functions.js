const functions = {

    counter: 0,

    createCard: (panel) => {
        functions.counter++;
        // functions.counter = functions.counter + 1;

        let newCard = document.createElement("div");

        newCard.className = "card";
        
        newCard.textContent = `Card ${functions.counter}`

        newCard.appendChild(document.createElement("br"));
        newCard.appendChild(document.createElement("br"));

        newCard.appendChild(functions.createButton(("Add Before")));
        newCard.appendChild(functions.createButton(("Add After")));
        newCard.appendChild(document.createElement("br"));

        newCard.appendChild(functions.createButton(("Delete")));

        let brk = document.createElement("br");
        newCard.appendChild(brk);

        panel.appendChild(newCard);

        return newCard;
    },

    createButton: (buttonText) => {
        let buttonId = "";
        if (buttonText === "Add Before") buttonId = "idAddBefore";
        if (buttonText === "Add After") buttonId = "idAddAfter";
        if (buttonText === "Delete") buttonId = "idDel";
    
        let newButton = document.createElement("button");
        newButton.setAttribute("class", "button");
        newButton.setAttribute("type", "button");
        newButton.setAttribute("id", buttonId);
        newButton.textContent = buttonText;
        console.log("newButton is: ", newButton);
        return newButton;
    },

 }

export default functions;

