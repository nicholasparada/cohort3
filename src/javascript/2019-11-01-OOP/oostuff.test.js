import {Person, functions} from "./oostuff.js"
import { exportAllDeclaration } from "@babel/types";


test('mytest', () => {
    console.log("hello world");
    functions.helloworld();
});

test('test class',()=>{
    const l = new Person("Larry", 5);
    expect(l.getName()).toEqual("Larry");
    //console.log(l);
    const d = new Person("Dean", 29);
    expect(d.getName()).toEqual("Dean")
    //console.log(d);
    expect(l.getAge()).toEqual(5);
    l.getBirthday();
    expect(l.getAge()).toEqual(6);
});
