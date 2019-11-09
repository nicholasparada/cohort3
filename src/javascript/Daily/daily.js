const functions = {

    //October 29 Daily

    totalBalances: (staffArray) => {
        return staffArray.reduce(((accumulator, staffMem) => accumulator + staffMem.balance), 0);
    },

    averageBalances: (staffArray) => {
        const total = staffArray.reduce(((accumulator, staffMem) => accumulator + staffMem.balance), 0);
        return total / staffArray.length;


    },

    //October 25 Daily

    loopStaffForEach: (staffArray) => {
        const emailArr = [];
        staffArray.forEach((staffMem, index) => {
            emailArr[index] = functions.makeEmailObj(staffMem);
        })
        return emailArr;
    },

    loopStaffMap: (staffArray) => {
        return staffArray.map(staffMember => {
            return functions.makeEmailObj(staffMember);
        });
    },

    //October 24 Daily

    loopStaffOf: (staffArray) => {
        let emailArray = [];
        let staffMember;
        for (staffMember of staffArray) {
            console.log(staffMember);
            emailArray.push(functions.makeEmailObj(staffMember));
        };
        return emailArray;
    },

    loopStaffIn: (staffArray) => {
        const emailArr = [];
        let emailIndex = 0;
        for (const staffIndex in staffArray) {
            emailArr[emailIndex] = functions.makeEmailObj(staffArray[staffIndex]);
            emailIndex++;
        }
        return emailArr;

    },

    //October 22 Daily

    loopStaff: (staffArray) => {
        return staffArray.map(staffMember => {
            return functions.makeEmailObj(staffMember);
        });
    },

    //October 17 Daily

    makeSlice: (array, start, end) => {
        return array.slice(start, end);
    },


    makeSplice: (array, start, howmanyDelete, item) => {
        array.splice(start, howmanyDelete, item);
        return array;

    },


    makeForeach: (array) => {
        let text = "";
        array.forEach(element => {
            text += element + "/";
        });
        return text;
    },

    makeMap: (array) => {
        return array.map(element => {
            return element * 10;
        });

    },

    makeReduce: (array) => {
        return array.reduce((result, element) => {
            return result + element;
        }, 0);
    },

    makeFilter: (array) => {
        return array.filter(element => {
            return element >= 30;
        });
    },

    makeSort: (array) => {
        return array.sort()
    },




    //October 15 Daily

    makeForOfLoop: (array) => {
        let text = "";
        let x;
        for (x of array) {
            text += x;
        }
        return text;

    },


    makeForInLoop: (array) => {
        let text = "";
        let x;
        for (x in array) {
            text += array[x];
        }
        return text;
    },


    makeDoWhileLoop: (array) => {
        let text = "";
        let i = 0
        do {
            text += array[i]
            i++;

        } while (i < array.length)
        return text;
    },


    makeBasicWhileLoop: (array) => {
        let text = "";
        let i = 0
        while (i < array.length) {
            text += array[i]
            i++;
        }
        return text;
    },

    makeBasicForLoop: (array) => {
        let text = "";
        for (let i = 0; i < array.length; i++) {
            text += array[i]

        }
        return text; //"1 2 3 "
    },

    //October 11 Daily

    makeEmailObj: (nameObject) => {
        let text = "";
        text = nameObject.fname.toLowerCase() + "." + nameObject.lname.toLowerCase() + "@evolveu.ca"
        return text;
    },


    //October 9 Daily

    makeEmailArr: (nameArray) => {
        return nameArray[0].toLowerCase() + "." + nameArray[1].toLowerCase() + "@evolveu.ca"

    },



    //October 7 Daily

    /*	
        Write the function that will create this output:
    
    *** the two values are not the same:
        p1--> a
        p2--> b
    *** the two values are not the same:
        p1--> 1
        p2--> 2
    *** the two values are not the same:
        p1--> 2
        p2--> 2
    */

    // Write the function after this comment ---
    assertEquals: (p1, p2) => {
        if (p1 === p2) {
            return true;
        }
        console.log(`the two values are not the same
        p1--> ${p1}
        p2--> ${p2}`)
        return false;


    }

    // and before this comment ---



};

functions.assertEquals("a", "b");
functions.assertEquals("a", "a");
functions.assertEquals(1, 2);
functions.assertEquals(2, 2);
functions.assertEquals("2", 2);
functions.assertEquals("This value", "This value");





export default functions;


