const functions = {
    checkType: inputValue =>{
        return typeof inputValue;
    },
    
   
    add: (num1, num2) => {
        return num1 + num2;
    },

    subtract: (num1, num2) => {
        return num1 - num2;
    },

    assertEquals: (num1) => {
        return `${num1} is all good`;
    }

};

export default functions;