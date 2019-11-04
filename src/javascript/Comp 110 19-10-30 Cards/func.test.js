import functions from "./func.js"
import { exportAllDeclaration } from "@babel/types";

test('mytest', () => {
    console.log("hello world");
    functions.helloworld();
});

test('mycards', () => {
    const div = functions.createCard();
    //const x = div.getAttribute("count");
    //expect(x).toBe(1);
    expect(div.getAttribute("count")).toBe("1");
    //expect(div.textContent).toBe("Card 1");

});

test('addCard', () => {

    functions.counter = 0;
    const groupCardDiv = document.createElement("div");
    expect(groupCardDiv.childElementCount).toBe(0);
    functions.addCard();
    expect(groupCardDiv.childElementCount).toBe(1);
    functions.addCard();
    expect(groupCardDiv.childElementCount).toBe(2);
    functions.addCard();
    expect(groupCardDiv.childElementCount).toBe(3);
    // console.log(groupCardDiv.children[0]);

    console.log(groupCardDiv.children[0].getAttribute("count"));
    console.log(groupCardDiv.children[1].getAttribute("count"));

    console.log(groupCardDiv.children[2].getAttribute("count"));

    expect(groupCardDiv.children[0].getAttribute("count")).toEqual("1");
    expect(groupCardDiv.children[0].getAttribute("count")).toEqual("2");
    expect(groupCardDiv.children[0].getAttribute("count")).toEqual("3");

});

