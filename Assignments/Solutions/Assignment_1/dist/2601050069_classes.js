"use strict";
// Part - A Classes 
Object.defineProperty(exports, "__esModule", { value: true });
// Question 1: Class with Direct Initialization
// Create a class Employee with the following variables:
// eno – Employee Number
// ename – Employee Name
// esal – Employee Salary
// Initialize the variables directly inside the class. Write a method display() to display the
// employee information. Create an object and call the display() method. 
// solution
// class declaration
class EmployeeClassQue1 {
    // class properties
    eno = 2601050069;
    ename = "Aravind";
    esal = 100000;
    // display method --> no parameters and no return types
    display() {
        console.log("Question 1 Display Method");
        console.log("Employee Number: " + this.eno);
        console.log("Employee Name: " + this.ename);
        console.log("Employee Salary: " + this.esal);
    }
}
let emp1 = new EmployeeClassQue1();
emp1.display();
// Question 2: Class with Constructor Initialization
// Create a class Employee with the following variables:
// eno
// ename
// esal
// Do not initialize the variables directly inside the class. Write a constructor with three
// parameters to initialize the employee details. Write a method display() to display the
// employee information. Create an object by passing values through the constructor and call the
// display() method. 
console.log();
// solution
// class declaration
class EmployeeClassQue2 {
    // class properties
    eno;
    ename;
    esal;
    // constructor with three parameters
    constructor(eno, ename, esal) {
        this.eno = eno;
        this.ename = ename;
        this.esal = esal;
    }
    // display method --> no parameters and no return types
    display() {
        console.log("Question 2 Display Method");
        console.log(`Employee Number: ${this.eno}`);
        console.log(`Employee Name: ${this.ename}`);
        console.log(`Employee Salary: ${this.esal}`);
    }
}
let emp2 = new EmployeeClassQue2(2601050069, "Aravind", 100000);
emp2.display();
console.log();
// Question 3: Class with Setter Method
// Create a class Employee with the following variables:
// eno
// ename
// esal
// Initialize the variables directly inside the class. Write a method set() with three parameters to
// reassign the employee details. Write another method display() to display the employee
// information.
// Create an object, call the set() method to update the employee details, and then call the
// display() method
// solution
// class declaration
class EmployeeClassQue3 {
    // class properties
    eno = 0;
    ename = "";
    esal = 0;
    // set method with three parameters
    set(eno, ename, esal) {
        this.eno = eno;
        this.ename = ename;
        this.esal = esal;
    }
    display() {
        console.log("Question 3 Display Method");
        console.log(`Employee Number: ${this.eno}`);
        console.log(`Employee Name: ${this.ename}`);
        console.log(`Employee Salary: ${this.esal}`);
    }
}
let emp3 = new EmployeeClassQue3();
emp3.set(2601050069, "Aravind", 100000);
emp3.display();
console.log();
;
// object creation
let b1 = {
    bno: 101,
    bname: "The Silent Patient"
};
console.log("Book number: " + b1.bno);
console.log("Book name: " + b1.bname);
console.log();
// object creation
let b2 = {
    display: () => {
        console.log("Welcome to TypeScript Interfaces");
    }
};
// method call
b2.display();
console.log();
;
// object creation
let b3 = {
    bno: 0,
    bname: "",
    set: (bno, bname) => {
        b3.bno = bno;
        b3.bname = bname;
    },
    display: () => {
        console.log("Book number: " + b3.bno);
        console.log("Book name: " + b3.bname);
    }
};
// method call
b3.set(101, "The Silent Patient");
b3.display();
console.log();
;
// class implementation
class BookImp {
    bno = 0;
    bname = "";
    set(bno, bname) {
        this.bno = bno;
        this.bname = bname;
    }
    display() {
        console.log("Book number: " + this.bno);
        console.log("Book name: " + this.bname);
    }
}
;
// object creation
let b4 = new BookImp();
// method call
b4.set(101, "The Silent Patient");
b4.display();
console.log();
// object creation
let e1 = {
    pno: 101,
    pname: "Aravind",
    esal: 100000
};
// display
console.log("Person number: " + e1.pno);
console.log("Person name: " + e1.pname);
console.log("Employee salary: " + e1.esal);
console.log();
// class implementation
class EmployeeImpQue2 {
    pno = 0;
    pname = "";
    esal = 0;
    constructor(pno, pname, esal) {
        this.pno = pno;
        this.pname = pname;
        this.esal = esal;
    }
    display() {
        console.log("Person number: " + this.pno);
        console.log("Person name: " + this.pname);
        console.log("Employee salary: " + this.esal);
    }
}
;
// object creation
let e2 = new EmployeeImpQue2(101, "Aravind", 100000);
// method call
e2.display();
