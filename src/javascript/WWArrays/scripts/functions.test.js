import functions from './functions.js'

test("Working with Arrays", () => {
    expect(functions.add(8)).toBe("8 is added to your array");
    expect(functions.add("string")).toBe("This input is not a valid number");
    expect(functions.show([1, 2, 3])).toBe("1,2,3");
    expect(functions.total([5, 10, 15])).toBe(30);
    expect(functions.clear()).toEqual([]);
});