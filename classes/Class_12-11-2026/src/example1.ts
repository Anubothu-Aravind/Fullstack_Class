// print the following details :
// sno,
// sname,
// isJobAvailable,
// modify sno value
// change the sname
// company name is not known in advance
// make sure salary is null
// the descriptions of eno ans sno are different
// store the aadharnumber

let sno:number = 1;
let sname:string = "aravind";
let isJobAvailable:boolean = true;
let companyName:undefined = undefined;
let salary = null;
let description:symbol = Symbol("Student");
let enoDescription:symbol = Symbol("Student");
let aadharNumber:bigint = 123456789012n;
console.log(`sno  : ${sno}`);
console.log(`sname  : ${sname}`);
console.log(`isJobAvailable  : ${isJobAvailable}`);
console.log(`companyName  : ${companyName}`);
console.log(`salary  : ${salary}`);
console.log(`description  : ${description == enoDescription}`);
console.log(`aadharNumber  : ${aadharNumber}`);

sno = 2;
sname = "hero";
salary = 10000;
console.log("-------")
console.log(`sno  : ${sno}`);
console.log(`sname  : ${sname}`);
console.log(`isJobAvailable  : ${isJobAvailable}`);
console.log(`companyName  : ${companyName}`);
console.log(`salary  : ${salary}`);
console.log(`aadharNumber  : ${aadharNumber}`);