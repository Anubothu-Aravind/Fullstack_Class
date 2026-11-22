"use strict";
// declaration of a interface with variables
Object.defineProperty(exports, "__esModule", { value: true });
let ob = {
    sno: 1,
    sname: "Aravind"
};
// console.log(ob);
console.log(`Student Number:${ob.sno}`);
console.log(`Student Name:${ob.sname}`);
let ob1 = {
    sno: 1,
    sname: "Aravind"
};
let ob2 = {
    sno: 2,
};
console.log(`Student 1 Number:${ob1.sno}`);
console.log(`Student 1 Name:${ob1.sname}`);
console.log(`Student 2 Number:${ob2.sno}`);
console.log(`Student 2 Name:${ob2.sname}`);
let e = {
    eno: 1,
    ename: "Aravind"
};
// e.eno = 105; // error => Cannot assign to 'eno' because it is a read-only property.
console.log(e.eno);
console.log(e.ename);
let ob3 = {
    display() {
        console.log("Display method");
    }
};
ob3.display();
