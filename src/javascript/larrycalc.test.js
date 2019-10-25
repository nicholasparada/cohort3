import functions from "./larrycalc"

test('larrystest', () => {
    console.log("hello world");
    functions.helloworld("Hello world from Larry!");
});

test('sumtest', () => {
    expect(functions.sum(2, 1)).toEqual(3);
    expect(functions.sum(3, 5)).toEqual(8);


});


