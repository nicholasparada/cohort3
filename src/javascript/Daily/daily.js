const functions = {

    //October 31 Daily

    //What are the 4 files we need to create to setup the framework for a TDD web app?
    // Problem Solving Code (psc)
    // Test code (test)
    // HTML
    // connector

    helloworld: () => {
        console.log("hello world");
    },


    //October 22 Daily

    loopStaffMap: staff => {
        // arr[0].toLowerCase()
        // staff[0].uperCase()
        console.log(staff[6]);
        let empemail = [];
        const newStaffEm = staff.map(item => {
            let staffEmail = functions.makeEmailObj(staff[6]);
            empemail.push(staffEmail);
        });
        return empemail;
    },
    loopStaffForEach: staff => {
        console.log(staff[3]);
        let empEmail = [];
        const newStaff = staff.forEach(() => {
            let staffEmail = functions.makeEmailObj(staff[3]);
            empEmail.push(staffEmail);
        });
        return empEmail;
    },
    loopStaffOf: staff => {
        let email = [];
        for (const value of staff) {
            let staffEmail = functions.makeEmailObj(value);
            email.push(staffEmail);
        }
        return email;
    },
    loopStaffIn: staff => {
        let email = [];
        for (let i in staff) {
            let staffEmail = functions.makeEmailObj(staff[i]);
            email.push(staffEmail);
        }
        return email;
    },

    loopStaff: a => {
        let email = [];
        for (let i = 0; i < a.length; i++) {
            let staffEmail = functions.makeEmailObj(a[i]);
            email.push(staffEmail);
        }
        return email;
    },

    //October 17 Daily

    makeSlice: () => {
        var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
        var citrus = fruits.slice(1, 3);
        return citrus;
    },

    makeSplice: () => {
        const array = [1, 2, 3, 4, 5];
        return array.splice(2);
    },

    makeForeach: () => {
        const array = [1, 2, 10, 17];
        const double = [];
        const newArray = array.forEach(num => {
            double.push(num * 2);
        });
        return double;
    },

    makeMap: arr => {
        const newNums = [1, 2, 10, 16];
        const mapNums = newNums.map(num => num * 2);
        return mapNums;
    },

    makeReduce: arr => {
        var arr = [1, 2, 3, 4];
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
            return sum;
        }
    },

    makeFilter: arr => {
        const array = [3, 6, 9];
        const filteredArray = array.filter(num => num < 5);
        return filteredArray;
    },

    makeSort: arr => {
        const months = ["March", "Jan", "Feb", "Dec"];
        months.sort();
        return months[0];
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


