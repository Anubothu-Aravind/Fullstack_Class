class Book{
    bno:number=1;
    bname:string="React";
    display():void{
        console.log(`Book number:${this.bno} -  Book name:${this.bname}`)
        console.log("Book number:"+this.bno+",Book name:"+this.bname)
    }
}

let book=new Book()
book.display()

//create a class with pno,pname,price as properties
//and display the data via function and return type

class Product
{
    pno:number=101;
    pname:string="Book";
    price:number=200;

    display():string{
        return `Product number: ${this.pno} -  Product name: ${this.pname} - Product price: ${this.price}`
    }
}

let product1 = new Product()
console.log(product1.display())

// Ex: create a class Employee with eno and ename are properties. 

// initalize with constructor and display the information. 

class Employee{
    eno:number;
    ename:string;
    //constructor
    constructor(){
        this.eno=101;
        this.ename="Aravind";
    }
    // display():void{
    //     console.log(`Employee number:${this.eno} -  Employee name:${this.ename}`)
    // }
    display():string{
        return `Employee number:${this.eno} -  Employee name:${this.ename}`
    }
}

let employee1=new Employee() // constructor is invoked at the time of object creation
// employee1.display() // display() method is invoked via object emp
let s = employee1.display()
console.log(s)

// classes with parameterized constructor
// Ex : Create a class order with oid,oname,isOrderProcessed,create a parameterized consstructor and dislplay the information
class Order{
    oid:number;
    oname:string;
    isOrderProcessed:boolean;

    constructor(id:number, name:string,status:boolean)
    {
        this.oid=id;
        this.oname=name;
        this.isOrderProcessed=status;
    }
    display():string{
        return `Order number: ${this.oid} -  Order name: ${this.oname} - Order processed: ${this.isOrderProcessed}`
    }
} 

let order1 = new Order(101,"pizza",true)
let order1Display = order1.display()
console.log(order1Display)


class University
{
getUniversity():void
{
console.log("K L University");
}
}

class Department extends University {
getDepartment():void
{
console.log("Department of CSE");

}
}
let dept=new Department();
dept.getUniversity();
dept.getDepartment();

class University1{
constructor(){
 console.log("University");   
}
}

class Department1 extends University1 {
constructor()
{
super();
console.log("Department");
}
}
let dept1=new Department1();

//Ex create a class univerity2 with variables,uname,uciity,create a
// parameterized method to assign values to the variables and display the information.create
// a sub class department2 with variables dname,dbuilding.
// create a parameterized method to assign values to the variables and display the information
 


class A
{
    a:number = 2;
    set(a:number):void
    {
        this.a=a;
    }
    display():void{
        console.log(this.a);
    }
}

let a1 = new A();
a1.set(5)
a1.display()