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

        let addBefore = document.createElement("button");
        addBefore.id = "idAddBefore"
        addBefore.textContent = "Add Before";
        newCard.appendChild(addBefore);

        let addAfter = document.createElement("button");
        addAfter.id = "idAddAfter"
        addAfter.textContent = "Add After";
        newCard.appendChild(addAfter);

        newCard.appendChild(document.createElement("br"));
        newCard.appendChild(document.createElement("br"));

        let del = document.createElement("button");
        del.id = "idDel"
        del.textContent = "Delete";
        newCard.appendChild(del);

        let brk = document.createElement("br");
        newCard.appendChild(brk);

        panel.appendChild(newCard);

        return newCard;
    },

 }

export default functions;

