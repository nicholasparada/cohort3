const functions = {
    helloworld: () => {
        console.log("hi");
    },
};



class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    getName() {
        return this.name;
    }

    getAge() {
        return this.age;
    }

    getBirthday() {
        return this.age++;
    }
}

export { Person, functions };