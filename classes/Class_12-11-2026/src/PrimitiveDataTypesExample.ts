//number
let eno:number = 101; 
console.log(eno);
var sno:number = 102; 
console.log(sno);
let price: number = 100.90; 
console.log(price);
const marks: number = -25; 
console.log(marks);

// console.log(eno,sno,price,marks);
// //string
let department:string = "cse"; 
console.log(`The string value is : ${department}`);
let course = "Full stack"; 
console.log(`The string value is : ${course}`);

//boolean
let isDeleted:boolean = true; 
console.log(`The boolean value is : ${isDeleted}`);
let passed:boolean = false; 
console.log(`The boolean value is : ${passed}`);
let available = true;
console.log(`The boolean value is : ${available}`);

//case study
// let javamarks;
// console.log(javamarks); //o/p --> undefined
// undefined
let javamarks:undefined = undefined;
console.log(javamarks); //o/p --> undefined

//null
let middleName:null = null;
console.log(middleName);

//bigint
let phNumber:bigint = 12345678n;
console.log(`The bigint value is : ${phNumber}`);   
console.log(typeof phNumber);

//symbol
let pno:symbol = Symbol("id");
let lno:symbol = Symbol("id");

console.log(pno == lno); //o/p --> false
