import functions from './tax.js'

idCalc.addEventListener("click", () => {
    functions.canadianTax();
    const taxFinalResult = functions.CanadaFederalTax(idIncome.value);
    idTax.value = taxFinalResult.toFixed(2);
});

