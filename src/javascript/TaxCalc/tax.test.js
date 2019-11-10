import functions from './tax.js'

test("hello", () => {

    console.log("Canadian Federal Tax");
    
});

test("Federal Tax Basket test", () => {

    expect(functions.CanadaFederalTax(-3)).toBe(0); //Minus Income
    expect(functions.CanadaFederalTax(0)).toBe(0); //No Income
    expect(functions.CanadaFederalTax(47630)).toBe(7144.50); // 0-47630 Income 
    expect(functions.CanadaFederalTax(95259)).toBe(16908.445); //47360-95259 Income 
    expect(functions.CanadaFederalTax(147667)).toBe(30534.525); // 95259-147667 Income 
    expect(functions.CanadaFederalTax(210371)).toBe(48718.685); // 147667-210371 Income 
    expect(functions.CanadaFederalTax(210372)).toBe(48719.015); // >210371 Income  

});