let marks:number[] = [10,20,30,40,50];

console.log(marks);
console.log(marks[4]);

//declare arrary of student names and print the information of 3rd student

let students:string[] = ["Aravind", "Bhavesh", "Gowri", "Kavya", "Laxman"];
console.log(students);
console.log(students[3]);
console.log(students[6]);

marks.push(60);
console.log(marks);
marks.push(70,80,90,200);
console.log(marks);

marks.unshift(2,3,4);
console.log(marks);

let a = marks.pop();
console.log(a);
console.log(marks);