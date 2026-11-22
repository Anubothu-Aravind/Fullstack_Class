// Part - A Classes 

// Question 1: Class with Direct Initialization
// Create a class Employee with the following variables:
// eno – Employee Number
// ename – Employee Name
// esal – Employee Salary
// Initialize the variables directly inside the class. Write a method display() to display the
// employee information. Create an object and call the display() method. 

// solution
// class declaration
class EmployeeClassQue1{
    // class properties
    eno : number = 2601050069;
    ename : string = "Aravind";
    esal : number = 100000;
    // display method --> no parameters and no return types
    display() : void {
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
class EmployeeClassQue2{
    // class properties
    eno : number;
    ename : string;
    esal : number;
    // constructor with three parameters
    constructor(eno : number, ename : string, esal : number){
        this.eno = eno;
        this.ename = ename;
        this.esal = esal;
    }
    // display method --> no parameters and no return types
    display() : void {
        console.log("Question 2 Display Method")
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
class EmployeeClassQue3{
    // class properties
    eno : number = 0;
    ename : string = "";
    esal : number = 0;
    // set method with three parameters
    set(eno : number, ename : string, esal : number) : void {
        this.eno = eno;
        this.ename = ename;
        this.esal = esal;
    }
    display() : void {
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

// Part B: Interfaces 

// Question 4: Interface with Variables
// Declare an interface Book with the following properties:
//  bno – Book Number
//  bname – Book Name
// Create an object of type Book and initialize the values for both properties. Display the book
// information using the object.

// Solution
// class declaration 
interface book {
 bno:number,
 bname:string   
};
// object creation
let b1:book = {
    bno:101,
    bname:"The Silent Patient"
};
console.log("Book number: " + b1.bno);
console.log("Book name: " + b1.bname);
console.log();

// Question 5: Interface with a Method
// Declare an interface Book with a method display() that does not take any parameters and
// does not return any value.
// Create an object that implements the Book interface. Implement the display() method inside
// the object to print the message "Welcome to TypeScript Interfaces". Call the method using
// the object.

// solution
// interface declaration
interface bookQue2 {
    display():void;
}
// object creation
let b2:bookQue2={
    display:()=>{
        console.log("Welcome to TypeScript Interfaces");
    }
};
// method call
b2.display();
console.log();

// Question 6: Interface with Variables and Methods
// Declare an interface Book with the following:
// Variables: bno and bname
// Method: set(bno, bname) to assign values to the variables.
// Method: display() to display the book information.
// Create an object that implements the Book interface. Assign values to the variables and
// implement both methods inside the object.
// Call the set() and display() methods using the object. 

// solution
// interface declaration
interface bookQue3 {
    bno:number;
    bname:string;
    set(bno:number, bname:string):void;
    display():void;
};
// object creation
let b3:bookQue3={
    bno:0,
    bname:"",
    set:(bno:number, bname:string)=>{
        b3.bno=bno;
        b3.bname=bname;
    },
    display:()=>{
        console.log("Book number: " + b3.bno);
        console.log("Book name: " + b3.bname);
    }
};
// method call
b3.set(101,"The Silent Patient");
b3.display();
console.log();

// Question 7: Interface Implementation Using a Class
// Declare an interface Book with the following:
// Variables: bno and bname
// Method: set(bno, bname) to assign values to the variables.
// Method: display() to display the book information.
// Create a class BookImp that implements the Book interface.
// Inside the class:
// 1. Declare the variables bno and bname.
// 2. Implement the set() method to assign values to the variables.
// 3. Implement the display() method to display the book information.
// Create an object of the BookImp class and call both methods. 

//solution
// interface declaration
interface bookQue4 {
    bno:number;
    bname:string;
    set(bno:number, bname:string):void;
    display():void;
};
// class implementation
class BookImp implements bookQue4 {
    bno:number=0;
    bname:string="";
    set(bno:number, bname:string):void {
        this.bno=bno;
        this.bname=bname;
    }
    display():void {
        console.log("Book number: " + this.bno);
        console.log("Book name: " + this.bname);
    }
};
// object creation
let b4=new BookImp();
// method call
b4.set(101,"The Silent Patient");
b4.display();
console.log();

// Question 8: Interface Inheritance
// Declare an interface Person with the following properties:
// pno
// pname
// Declare another interface Employee that extends the Person interface and contains an
// additional property:
// - esal
// Create an object of type Employee, initialize all three properties, and display the employee
// information. 

//solution
//interface Person declaration
interface Person{
    pno:number;
    pname:string;
}
//interface Employee declaration
interface Employee extends Person {
    esal:number;
}
// object creation
let e1:Employee={
    pno:101,
    pname:"Aravind",
    esal:100000
};
// display
console.log("Person number: " + e1.pno);
console.log("Person name: " + e1.pname);
console.log("Employee salary: " + e1.esal);
console.log();

// Question 9: Class Implementing an Extended Interface
// Declare an interface Person with the following properties:
// pno
// pname
// Declare another interface Employee that extends the Person interface and contains an
// additional property esal.
// Create a class EmployeeImp that implements the Employee interface. Implement a method
// display() to display all employee details.
// Create an object of EmployeeImp and display the employee information. 

// solution
// interface Person declaration
interface PersonQue2{
    pno:number;
    pname:string;
}
//interface Employee declaration
interface EmployeeQue2 extends PersonQue2 {
    esal:number;
}
// class implementation
class EmployeeImpQue2 implements EmployeeQue2 {
    pno:number=0;
    pname:string="";
    esal:number=0;
    constructor(pno:number,pname:string,esal:number){
        this.pno=pno;
        this.pname=pname;
        this.esal=esal;
    }
    display():void {
        console.log("Person number: " + this.pno);
        console.log("Person name: " + this.pname);
        console.log("Employee salary: " + this.esal);
    }
};
// object creation
let e2=new EmployeeImpQue2(101,"Aravind",100000);
// method call
e2.display();
