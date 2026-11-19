"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Book {
    bno = 1;
    bname = "React";
    display() {
        console.log(`Book number:${this.bno} -  Book name:${this.bname}`);
        console.log("Book number:" + this.bno + ",Book name:" + this.bname);
    }
}
let book = new Book();
book.display();
//create a class with pno,pname,price as properties
//and display the data via function and return type
class Product {
    pno = 101;
    pname = "Book";
    price = 200;
    display() {
        return `Product number: ${this.pno} -  Product name: ${this.pname} - Product price: ${this.price}`;
    }
}
let product1 = new Product();
console.log(product1.display());
// Ex: create a class Employee with eno and ename are properties. 
// initalize with constructor and display the information. 
class Employee {
    eno;
    ename;
    //constructor
    constructor() {
        this.eno = 101;
        this.ename = "Aravind";
    }
    // display():void{
    //     console.log(`Employee number:${this.eno} -  Employee name:${this.ename}`)
    // }
    display() {
        return `Employee number:${this.eno} -  Employee name:${this.ename}`;
    }
}
let employee1 = new Employee(); // constructor is invoked at the time of object creation
// employee1.display() // display() method is invoked via object emp
let s = employee1.display();
console.log(s);
// classes with parameterized constructor
// Ex : Create a class order with oid,oname,isOrderProcessed,create a parameterized consstructor and dislplay the information
class Order {
    oid;
    oname;
    isOrderProcessed;
    constructor(id, name, status) {
        this.oid = id;
        this.oname = name;
        this.isOrderProcessed = status;
    }
    display() {
        return `Order number: ${this.oid} -  Order name: ${this.oname} - Order processed: ${this.isOrderProcessed}`;
    }
}
let order1 = new Order(101, "pizza", true);
let order1Display = order1.display();
console.log(order1Display);
class University {
    getUniversity() {
        console.log("K L University");
    }
}
class Department extends University {
    getDepartment() {
        console.log("Department of CSE");
    }
}
let dept = new Department();
dept.getUniversity();
dept.getDepartment();
class University1 {
    constructor() {
        console.log("University");
    }
}
class Department1 extends University1 {
    constructor() {
        super();
        console.log("Department");
    }
}
let dept1 = new Department1();
