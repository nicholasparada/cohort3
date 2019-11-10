import functions from './syntax.js';

test('check number', () => {
    expect(functions.number(30)).toBe(30);
});

test('check string', () => {
    expect(functions.string('Hello')).toBe('Hello');
});

test('check booleans', () => {
    expect(functions.boolean(8, 4)).toBe(true);
    expect(functions.boolean(1, 2)).toBe(false);
});


test('check array', () => {
    expect(functions.array([1, 2, 3])).toEqual([1, 2, 3]);
});


test('check object', () => {
    expect(functions.dict().age).toBe(35);
});

test('check undefined', () => {
    expect(functions.undefined()).toBe(undefined);
});

test('check size', () => {
    expect(functions.size(-1)).toBe(`-1 is negative`);
    expect(functions.size(8)).toBe(`8 is small`);
    expect(functions.size(15)).toBe(`15 is medium`);
    expect(functions.size(30)).toBe(`30 is large`);
    expect(functions.size(100)).toBe(`100 is extra-large`);
});

test('check functions and parameters', () => {
    expect(functions.paraReturn(2, 1)).toBe(3);
});

test('check add value infront array', () => {
    expect(functions.addToBeginingArray(0, [1, 2, 3])).toEqual([0, 1, 2, 3]);
});

test('check add value to the end of array', () => {
    expect(functions.addToEndArray(4, [0, 1, 2, 3])).toEqual([0, 1, 2, 3, 4]);
});

test('check update values', () => {
    expect(functions.updateValue(5)).toBe(6);
});

test('check for loop in array by pushing value into a new array', () => {
    expect(functions.forArray([1, 2, 3])).toEqual([2, 4, 6]);
});

test('check for/ in loop in object by returning an array of keys', () => {
    expect(functions.forInObj()).toEqual(["userName", "age", "gender", "car"]);
});

test('check while loop in array by pushing value into a new array', () => {
    expect(functions.whileLopping([1, 2, 3])).toEqual([2, 4, 6]);
});

test('check do while loop in array by pushing value into a new array', () => {
    expect(functions.doWhileLopping([1, 2, 3])).toEqual([2, 4, 6]);
});

test('check for each loop in array by pushing value into a new array', () => {
    expect(functions.forEachInArray([1, 2, 3])).toEqual([2, 4, 6]);
});

test('check object declaration by class', () => {
    expect(functions.objDeclaration()).toEqual("Nicolas");
});

test('check key look up', () => {
    expect(functions.keyLookUp({ userName: "Nicolas", age: 35, gender: "male", car: "kia" })).toBe("Nicolas");
});