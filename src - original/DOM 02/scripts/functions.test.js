import functions from "./functions.js";

test("createCard function test", () => {

    //Test Setup
    functions.counter = 0;
    const testPanel = document.createElement("div");
    let testPanelChildCount = testPanel.childElementCount;

    //Call function
    functions.createCard(testPanel);


    //Test effects of the function
    expect(functions.counter).toEqual(1);
    expect(testPanel.childElementCount).toEqual(testPanelChildCount + 1);
    expect(testPanel.lastChild.childNodes[0].textContent).toEqual("Card 1")
});

// test("create button function test", () => {

//     //Test Setup
//     functions.counter = 0;
//     const testPanel = document.createElement("div");
//     let testPanelChildCount = testPanel.childElementCount;

//     //Call function
//     functions.createCard(testPanel);


//     //Test effects of the function
//     expect(functions.counter).toEqual(1);
//     expect(testPanel.childElementCount).toEqual(testPanelChildCount + 1);
//     expect(testPanel.lastChild.childNodes[0].textContent).toEqual("Card 1")
// });

// test("Add after test", () => {

//     //Test Setup
//     functions.counter = 0;
//     const testPanel = document.createElement("div");
//     let testPanelChildCount = testPanel.childElementCount;

//     //Call function
//     functions.createCard(testPanel);


//     //Test effects of the function
//     expect(functions.counter).toEqual(1);
//     expect(testPanel.childElementCount).toEqual(testPanelChildCount + 1);
//     expect(testPanel.lastChild.childNodes[0].textContent).toEqual("Card 1")
// });
