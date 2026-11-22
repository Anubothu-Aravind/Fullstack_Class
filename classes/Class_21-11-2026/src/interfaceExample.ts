// declaration of a interface with variables

interface Student {//like an blueprint
    sno:number; // property
    sname:string;
}
let ob:Student={// object creation
    sno:1,
    sname:"Aravind"
}
// console.log(ob);
console.log(`Student Number:${ob.sno}`);
console.log(`Student Name:${ob.sname}`);

// interface with optional parameters 
interface Student1{
    sno:number;
    sname?:string
}
let ob1:Student1={
    sno:1,
    sname:"Aravind"
}
let ob2:Student1={
    sno:2,
}
console.log(`Student 1 Number:${ob1.sno}`);
console.log(`Student 1 Name:${ob1.sname}`);
console.log(`Student 2 Number:${ob2.sno}`);
console.log(`Student 2 Name:${ob2.sname}`);

// interface with readonly property
interface Employee{
    readonly eno:number;
    ename?:string;
}
let e:Employee={
    eno:1,
    ename:"Aravind"
}

// e.eno = 105; // error => Cannot assign to 'eno' because it is a read-only property.
console.log(e.eno);
console.log(e.ename);

// interface with methods
interface Student2{
    display():void;
}
let ob3:Student2={
    display():void{
        console.log("Display method");
    }
}
ob3.display(); //o/p => Display method

interface Student3{
    sno:number;
    sname:string;
    set(sno:number,sname:string):void;
    display():void;
}

class StudentImplementation implements Student3{
    sno:number = 1;
    sname:string = "";
    set(sno:number,sname:string):void{
        this.sno=sno;
        this.sname=sname;
    }
    display():void{
        console.log(`Student Number:${this.sno}`);
        console.log(`Student Name:${this.sname}`);
    }
}
let ob4:Student3=new StudentImplementation();
ob4.set(2,"Aravind");
ob4.display();

