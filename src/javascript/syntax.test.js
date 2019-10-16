import functions from './syntax'

test('check input type', () => {
    expect(functions.checkType(true)).toBe("boolean");
    expect(functions.checkType(8)).toBe("number");
    expect(functions.checkType()).toBe("undefined");
});

test('Check the sizes', () => {
     expect(functions.size(-1)).toBe("negative"); // Consider the edge cases
     expect(functions.size(0)).toBe("small");     
     expect(functions.size(10)).toBe("medium");
     expect(functions.size(15)).toBe("medium");
     expect(functions.size(20)).toBe("large");
     expect(functions.size(2000000)).toBe("large");
});

