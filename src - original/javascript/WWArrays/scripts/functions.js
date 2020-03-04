const functions = {

    add: (item) => {
        if (typeof item === "number" && isNaN(item) !== true) {
            return `${item} is added to your array`;
        }
        return "This input is not a valid number";
    },
    show: (array) => {
        return array.join();
    },
    total: (array) => {
        return array.reduce((a, b) => a + b, 0);
    },
    clear: (array) => {
        array = [];
        return array;
    }

}

export default functions;