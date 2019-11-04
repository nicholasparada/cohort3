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

    makeForOfLoop: arr => {
        const airLines1 = ["United", "WestJet", "AirCanada"];
        let item;
        for (item of airLines1) {
            return item;
        }
    },

    makeForInLoop: obj => {
        let person = {
            name: "Mark",
            Age: 23,
            Occupation: "Lawyer"
        };
        let personalInfo = "";
        let i;
        for (i in person) {
            personalInfo += person[i] + "";
        }
        return personalInfo;
    },

    makeDoWhileLoop: () => {
        let counter = 5;
        do {
            return counter;
            counter++;
        } while (counter > 0);
    },

    makeBasicWhileLoop: () => {
        let nums = 6;
        while (nums < 7) {
            return nums;
            nums++;
        }
    },

    makeBasicLoop: () => {
        let array1 = [];
        for (let i = 0; i <= 6; i++) {
            array1.push(i);
        }
        return array1;
    },

    //October 11 Daily

    makeEmailObj: (obj) => {
        //console.log("object.first");
        return (obj.fname.toLowerCase() + "." + obj.lname.toLowerCase() + "@evolveu.ca");
    }

    //October 9 Daily
    // makeEmailArr: (arr) =>{
    //     console.log(arr[0]);
    //     return (arr[0].toLowerCase()+"."+arr[1].toLowerCase()+"@evolveu.ca");

    //     return ("first.last@evolveu.ca");


    // }
    //};
    //     // size: (num) => {
    //     //     if (num < 0)  return "negative";
    //     //     if (num < 10) return "small";
    //     //     if (num < 20) return "medium";
    //     //     return "large";
    //     // },

    //     add: (num1, num2) => {
    //         return num1 + num2;
    //     },

    //     subtract: (num1, num2) => {
    //         return num1 - num2;
    //     },

    //     assertEquals: (num1) => {
    //         return `${num1} is all good`;
    //     }

    // };


};

export default functions;


