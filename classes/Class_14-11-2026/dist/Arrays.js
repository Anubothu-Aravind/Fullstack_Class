"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let marks = [10, 20, 30, 40, 50];
console.log(marks);
console.log(marks[4]);
//declare arrary of student names and print the information of 3rd student
let students = ["Aravind", "Bhavesh", "Gowri", "Kavya", "Laxman"];
console.log(students);
console.log(students[3]);
console.log(students[6]);
marks.push(60);
console.log(marks);
marks.push(70, 80, 90, 200);
console.log(marks);
marks.unshift(2, 3, 4);
console.log(marks);
let a = marks.pop();
console.log(a);
console.log(marks);
let b = marks.shift();
console.log(b);
console.log(marks);
console.log(`The length of the array is ${marks.length}`);
//splice
let department = ["cse", "ece", "it"];
console.log(department); // [ 'cse', 'ece', 'it' ]
department.splice(1, 0, "me"); // go to 1st position,don't delete anything,insert "me"
console.log(department); // [ 'cse', 'me', 'ece', 'it' ]
department.splice(2, 0, "eee", "ai&ds"); // go to 2nd position,don't delete anything,insert "eee","ai&ds"
console.log(department); // [ 'cse', 'me', 'eee', 'ai&ds', 'ece', 'it' ]
department.splice(2, 2, "eie"); // go to 2nd position,delete 2 elements ,insert "eie"
console.log(department); // [ 'cse', 'me', 'eie', 'ece', 'it' ]
department.splice(2, 3); // delete 3 elements from index 2
console.log(department); // [ 'cse', 'me', 'it' ]
department.splice(-2, 0, "eie"); // go to 2nd position from the end,don't delete anything,insert "eie"
console.log(department); // [ 'cse', 'me', 'eie', 'it' ]
department.splice(0, 0, "klu"); // go to 0th position,don't delete anything,insert "klu"
console.log(department); // [ 'klu', 'cse', 'me', 'eie', 'it' ]
let names = ["ram", "sam", "raj", "harsha"];
//perform all possible operations
// names.push("Aravind"); // add element at the end of the array
// console.log(names); // [ 'ram', 'sam', 'raj', 'harsha', 'Aravind' ]
// names.unshift("karthik"); // add element at the beginning of the array
// console.log(names); // [ 'karthik', 'ram', 'sam', 'raj', 'harsha', 'Aravind' ]
// names.pop(); // remove element from the end of the array
// console.log(names); // [ 'karthik', 'ram', 'sam', 'raj', 'harsha' ]
// names.shift(); // remove element from the beginning of the array
// console.log(names); // [ 'ram', 'sam', 'raj', 'harsha' ]
// names.splice(2,0,"sita"); // go to 2nd position,don't delete anything,insert "sita"
// console.log(names); // [ 'ram', 'sam', 'sita', 'raj', 'harsha' ]
// names.splice(2,2,"geetha"); // go to 2nd position,delete 2 elements ,insert "geetha"
// console.log(names); // [ 'ram', 'sam', 'geetha', 'harsha' ]
// names.splice(2,3); // delete 3 elements from index 2
// console.log(names); // [ 'ram', 'sam' ]
// names.splice(-2,0,"seetha"); // go to 2nd position from the end,don't delete anything,insert "seetha"
// console.log(names); // [ 'ram', 'seetha', 'sam' ]
// names.splice(0,0,"sita"); // go to 0th position,don't delete anything,insert "sita"
// console.log(names); // [ 'sita', 'ram', 'seetha', 'sam' ]
// names.splice(1,1);
console.log();
console.log(names.slice(0, 2)); // [ 'ram', 'raj']
console.log(names.slice(1, 2)); // [ 'raj' ]
console.log(names.slice(-2, 1)); // []
// console.log(names); // [ 'ram', 'raj', 'harsha' ]
