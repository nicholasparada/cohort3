const functions = {
    checkType: inputValue =>{
        return typeof inputValue;
    },

    size: (num) => {
            if (num < 0)  return "negative";
            if (num < 10) return "small";
            if (num < 20) return "medium";
            else return "large";
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


