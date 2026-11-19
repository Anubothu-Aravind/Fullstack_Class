// wirte a function by taking bno,bname and bprice.
// a. use an arrow function
// b. use a normal function

//arrow function
let displayArrow = (bno:number,bname:string,bprice:number):string => {
    return `Book Number : ${bno}, Book Name : ${bname}, Book Price : ${bprice}`;
}

console.log("Arrow function")
console.log(displayArrow(101,"Book1",500))

// normal function
function displayNormal(bno:number,bname:string,bprice:number):void{
    console.log(`Book Number : ${bno}, Book Name : ${bname}, Book Price : ${bprice}`);
}

console.log("Normal function")
displayNormal(102,"Book2",600)

// function expression
let displayFunExp = function(bno:number,bname:string,bprice:number):void{
    console.log(`Book Number : ${bno}, Book Name : ${bname}, Book Price : ${bprice}`);
}

console.log("Function expression")
displayFunExp(103,"Book3",700)

console.log();
// write a program to display sno,sname,use 
// arrow functions with parameters,with return type
// function expression with parameter,with return type

//arrow function 
let studentArrow = (sno:number,sname:string):string => {
    return `Student Number : ${sno}, Student Name : ${sname}`;
}

console.log("Arrow function")
console.log(studentArrow(101,"Student1"))

//function expression
let studentFunExp = function(sno:number,sname:string):string {
    return `Student Number : ${sno}, Student Name : ${sname}`;
}

console.log("Function expression")
console.log(studentFunExp(102,"Student2"))

// passing an array to a function
function displayMarks(a:number[]):void{
    console.log(a);
}
//function calling
displayMarks([10,20,30,40,50]);

// example 2 : write a program to read a number and string of book names and print the information via a function 

function displayBooks(a:number,b:string[]):void{
    for(var i=0;i<a;i++){
        console.log(`Book Number : ${i+1}, Book Name : ${b[i]} is stored successfully`);
    }
}

displayBooks(3,["Java","Python","Typescript"]);

let Studentinfo = [101,102,103];
console.log(Studentinfo)

let Studentinfo1 = [101,"CSE","klu"];
console.log(Studentinfo1)
// console.log(typeof(Studentinfo1)) // object

