//function without parameter and without return type
function display():void{
    console.log("hello");
}
display(); // function calling

//function with parameters and without return type
function displayName(name:string):void{
    console.log(`hello ${name}`);
}
displayName("aravind");//function calling with parameters

//write a function to find the sum of 2 numbers & return the value
//function with parameters and without return type
function add(a:number,b:number):void{
    console.log(`Sum is ${a+b}`);
}
add(10,20);//function calling with parameters and without return type
add(1.3,4.5);

// function with parameters and with return type
function messageFunction(s1:string,s2:string):string{
    let s3:string = s1+s2;
    return `The string is ${s3}`
}
let s4:string = messageFunction("aravind","kumar");
console.log(s4);

// function with parameters and with return type number
function sum(a:number,b:number):number{
    return a+b
}
console.log(sum(10,20));

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


console.log("dispEmp1")
//function without parameters, without return type 
function dispEmp1():void{
    let eno:number = 101;
    let ename:string = "Raj";
    let esal:number = 10000;
    let dept:string = "tech";
    let isHike:boolean = true;
    console.log(`Employee details: ${eno}, ${ename}, ${esal}, ${dept}, ${isHike}`);
}
dispEmp1();
console.log();


console.log("dispEmp2")
//function without parameters, with return type number
function dispEmp2():string{
    let eno:number = 101;
    let ename:string = "Raj";
    let esal:number = 10000;
    let dept:string = "tech";
    let isHike:boolean = true;
    return `Employee details: ${eno}, ${ename}, ${esal}, ${dept}, ${isHike}`;
}
console.log(dispEmp2());
console.log();


console.log("dispEmp3");
//function with parameters, without return type 
function dispEmp3(eno:number,ename:string,esal:number,dept:string,isHike:boolean):string{
    return `Employee details: ${eno}, ${ename}, ${esal}, ${dept}, ${isHike}`;
}
console.log(dispEmp3(101,"Raj",10000,"tech",true));
console.log();


console.log("dispEmp4")
//function with parameters, with return type
function dispEmp4():string{
    let eno:number = 101;
    let ename:string = "Raj";
    let esal:number = 10000;
    let dept:string = "tech";
    let isHike:boolean = true;
    return `Employee details: ${eno}, ${ename}, ${esal}, ${dept}, ${isHike}`;
}
console.log(dispEmp4());

//function with optional parameters 
//no need in notes
function disp2(s1:string,s2?:string):void{
    console.log(`The data is : ${s1},${s2}`);
}
disp2("hello","world");
disp2("hello");

//function with default values 
function disp3(a:number,b:number,c:number=100):void{
    console.log(`The numbers are : ${a},${b},${c}`);
}
disp3(1,2);
disp3(1,2,3);