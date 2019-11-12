import functions from "./functions.js";

test("Mo test ", () => {
  expect(functions.helloWorld()).toEqual("Hello world from here!");
});
const fakeObjArr = [{ fname: "Rob", lname: "Loban", balance: 2500 }];
expect(functions.balanceGreater(fakeObjArr)).toEqual([2500]);

test("Show Items in li", () => {
  expect(functions.show()).toBe(ol.li);
});

