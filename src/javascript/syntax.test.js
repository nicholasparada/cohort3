import functions from './syntax'

test('check input type', () => {
    expect(functions.checkType(true)).toBe("boolean");
    expect(functions.checkType(8)).toBe("number");
    expect(functions.checkType()).toBe("undefined");

    
    


    
});