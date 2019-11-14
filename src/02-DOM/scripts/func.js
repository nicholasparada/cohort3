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
        div.setAttribute("class", "card");
        div.innerHTML = `<p> Card Number ${functions.counter} </p>
        <button id="idAddBefore">Add Before</button>
            <button id="idAddAfter">Add After</button>
            <button id="idDelete">Delete</button>`;
        return div;
    },

    // delCard: () => {
    //     return console.log("inside delCard");

    // }

    addCard: (groupCardDiv) => {
        let newChildCard = functions.createCard();
        groupCardDiv.appendChild(newChildCard);
        return;

    },









};







export default functions;
