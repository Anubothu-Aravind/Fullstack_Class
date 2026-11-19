"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let t = [101, "Aravind", true];
console.log(t);
let t1;
t1 = [101, "Aravind"];
console.log(t1);
let t2;
//  t2=["cse",true,101]; // error,order of values are not as per declaration
t2 = [true, "cse", 101]; // correct
console.log(t2);
console.log(t2[1]); // cse
// example: write a function to ass a tuple and display the tuple 
let Student;
Student = [101, "Aravind", 48];
//function takes tuple
function studentDetails(s) {
    console.log(s);
}
studentDetails(Student);
