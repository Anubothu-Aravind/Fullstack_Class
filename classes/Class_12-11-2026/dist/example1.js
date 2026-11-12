"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
let sno = 1;
let sname = "aravind";
let isJobAvailable = true;
let companyName = undefined;
let salary = null;
let description = Symbol("Student");
let enoDescription = Symbol("Student");
let aadharNumber = 123456789012n;
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
console.log("-------");
console.log(`sno  : ${sno}`);
console.log(`sname  : ${sname}`);
console.log(`isJobAvailable  : ${isJobAvailable}`);
console.log(`companyName  : ${companyName}`);
console.log(`salary  : ${salary}`);
console.log(`aadharNumber  : ${aadharNumber}`);
