import functions from './daily.js'

//October 31 Daily

test('mytest', () => {
  console.log("hello world from daily");
  functions.helloworld();
});

//October 22 Daily

test("Company email for map", () => {
  const staffEmail = functions.loopStaffMap(data.staff);
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});


test(" Comany email forEach", () => {
  const staffEmail = functions.loopStaffForEach(data.staff);
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
});

test("Company email for of loop", () => {
  const staffEmail = functions.loopStaffOf(data.staff);
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

test("Company email for in loop", () => {
  const staffEmail = functions.loopStaffIn(data.staff);
  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
});
test("email builder for company", () => {
  const staffEmail = functions.loopStaff(data.staff);

  expect(staffEmail[0]).toEqual("jane.smith@evolveu.ca");
  expect(staffEmail[3]).toEqual("olivia.notly@evolveu.ca");
  expect(staffEmail[6]).toEqual("benjamin.amis@evolveu.ca");
});

//October 17 Daily

test("Make slice", () => {
  expect(functions.makeSlice(["a", "b", "c", "d"]), 1, 3).toEqual(["b", "c"]);
  expect(functions.makeSlice(["audi", "porsche", "ferrari", "ford", "chevy"], 2, 4)).toEqual(["ferrari", "ford"]);
});

test("Splice", () => {
  expect(functions.makeSplice(["blue", "red", "green", "grey"], 2, 1, "yellow")).toEqual(["blue", "red", "yellow", "grey"]);
  expect(functions.makeSplice(["audi", "porsche", "ferrari", "ford", "chevy"], 3, 1, "honda")).toEqual(["audi", "porsche", "ferrari", "honda", "chevy"]);
});

test("ForEach method ", () => {
  expect(functions.makeForeach(["apple", "orange", "cherry"])).toEqual("apple/orange/cherry/");
});



test("Make map()", () => {
  expect(functions.makeMap([1, 2, 3, 4])).toEqual([10, 20, 30, 40]);
});
test("Make reduce()", () => {
  expect(functions.makeReduce([1, 2, 3, 4])).toEqual(10);
});
test("Make filter()", () => {
  expect(functions.makeFilter([10, 20, 30, 40, 50])).toEqual([30, 40, 50]);
});

test("Make sort()", () => {
  expect(functions.makeSort(["apple", "orange", "cherry"])).toEqual(["apple", "cherry", "orange"]);
});

//October 15 Daily 

test("Next level for of loop", () => {
  expect(functions.makeForOfLoop([1, 2, 3])).toEqual("123");
  expect(functions.makeForOfLoop(["first", "last"])).toEqual("firstlast");
});


test("Next Level for in loop", () => {
  expect(functions.makeForInLoop([1, 2, 3])).toEqual("123");
  expect(functions.makeForInLoop(["first", "last"])).toEqual("firstlast");
});


//   expect(functions.makeForInLoop("Age")).toEqual("Mark23Lawyer");
// });

test("basic do while loop", () => {
  expect(functions.makeDoWhileLoop([1, 2, 3])).toEqual("123");
  expect(functions.makeDoWhileLoop(["first", "last"])).toEqual("firstlast");

});

test("basic while loop", () => {
  expect(functions.makeBasicWhileLoop([1, 2, 3])).toEqual("123");
  expect(functions.makeBasicWhileLoop(["first", "last"])).toEqual("firstlast");

});

test("basic for loop", () => {

  expect(functions.makeBasicForLoop([1, 2, 3])).toEqual("123");
  expect(functions.makeBasicForLoop(["first", "last"])).toEqual("firstlast");

});

// // test('Check the sizes', () => {
// //     expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
// //     expect(functions.size(0)).toBe("small");
// //     expect(functions.size(10)).toBe("medium");
// //     expect(functions.size(15)).toBe("medium");
// //     expect(functions.size(20)).toBe("large");
// //     expect(functions.size(2000000)).toBe("large");
// // });

// test('Does that add function work?', () => {
//     expect(functions.add(1,2)).toBe(3);
//     expect(functions.add(101,202)).toBe(303);
// });

// test('Is it all good?', () => {
//     expect(functions.assertEquals(2)).toBe("2 is all good");
//     expect(functions.assertEquals(101)).toBe("101 is all good");
// });

//October 11 Daily

/*	
	Write the function to format an email based on an object / map
*/

test('email builder from an object / map', () => {
  const name = { fname: 'first', lname: 'last' };
  expect(functions.makeEmailObj(name))
    .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: 'First', lname: 'Last' }))
    .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailObj({ fname: "Bill", lname: "Smith" }))
    .toEqual("bill.smith@evolveu.ca");
});


//October 9 Daily
/*
    Write a function to format an email based on an array.
*/

test('email builder from an array', () => {
  const name = ["first", "last"];
  expect(functions.makeEmailArr(name))
    .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["First", "Last"]))
    .toEqual("first.last@evolveu.ca");
  expect(functions.makeEmailArr(["Bill", "Smith"]))
    .toEqual("bill.smith@evolveu.ca");

});



//October 7 Daily

test('assertEquals(p1,p2) comparing parameters', () => {
  expect(functions.assertEquals(3, 3)).toEqual(true);
  expect(functions.assertEquals(3, 4)).toEqual(false);
  expect(functions.assertEquals("2", 2)).toEqual(false);
  expect(functions.assertEquals("a", "a")).toEqual(true);



});










