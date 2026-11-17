"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//function without parameter and without return type
function display() {
    console.log("hello");
}
display(); // function calling
//function with parameters and without return type
function displayName(name) {
    console.log(`hello ${name}`);
}
displayName("aravind"); //function calling with parameters
//write a function to find the sum of 2 numbers & return the value
//function with parameters and without return type
function add(a, b) {
    console.log(`Sum is ${a + b}`);
}
add(10, 20); //function calling with parameters and without return type
add(1.3, 4.5);
// function with parameters and with return type
function messageFunction(s1, s2) {
    let s3 = s1 + s2;
    return `The string is ${s3}`;
}
let s4 = messageFunction("aravind", "kumar");
console.log(s4);
// function with parameters and with return type number
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 20));
// task 
// write all possible types of function definitions and display the output for the employee 
// with employee data type
// en0:number, ename:string, esal:number, dept:string, isHike:boolean
// function without parameters, without return type 
// function without parameters, with return type 
// function with parameters, without return type 
// function with parameters, with return type 
// function disp1():void{} 
// function disp2(a: string):string{return} 
// function disp3(a: string):void{} 
// function disp4(a: string):string{return} 
console.log();
console.log("dispEmp1");
//function without parameters, without return type 
function dispEmp1() {
    let eno = 101;
    let ename = "Raj";
    let esal = 10000;
    let dept = "tech";
    let isHike = true;
    console.log(`Employee details: ${eno}, ${ename}, ${esal}, ${dept}, ${isHike}`);
}
dispEmp1();
console.log();
console.log("dispEmp2");
//function without parameters, with return type number
function dispEmp2() {
    let eno = 101;
    let ename = "Raj";
    let esal = 10000;
    let dept = "tech";
    let isHike = true;
    return `Employee details: ${eno}, ${ename}, ${esal}, ${dept}, ${isHike}`;
}
console.log(dispEmp2());
console.log();
console.log("dispEmp3");
//function with parameters, without return type 
function dispEmp3(eno, ename, esal, dept, isHike) {
    return `Employee details: ${eno}, ${ename}, ${esal}, ${dept}, ${isHike}`;
}
console.log(dispEmp3(101, "Raj", 10000, "tech", true));
console.log();
console.log("dispEmp4");
//function with parameters, with return type
function dispEmp4() {
    let eno = 101;
    let ename = "Raj";
    let esal = 10000;
    let dept = "tech";
    let isHike = true;
    return `Employee details: ${eno}, ${ename}, ${esal}, ${dept}, ${isHike}`;
}
console.log(dispEmp4());
//function with optional parameters 
//no need in notes
function disp2(s1, s2) {
    console.log(`The data is : ${s1},${s2}`);
}
disp2("hello", "world");
disp2("hello");
//function with default values 
function disp3(a, b, c = 100) {
    console.log(a);
    console.log(b);
    console.log(c);
}
disp3(1, 2);
disp3(1, 2, 3);
