
/*Writing test tdd

1. Write the stub
2. Write failing test
3. Write only the code to make the test pass
4. Write another test
5. Repeat
6. Refactor

*/

import functions from "./10_25_tdd"



test('mytest', () => {
    console.log("hello world");
    // functions.helloworld("Hello world from mytest!");
});




test('sumtest', () => {
    expect(functions.sum(2, 1)).toEqual(3);

});


