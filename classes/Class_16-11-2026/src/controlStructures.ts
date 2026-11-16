//Conditional / Decision-Making Statements
let tsmarks = 60;
// if statement
if(tsmarks>90){
    console.log(`Grade A`);
}

// if-else statement
if(tsmarks>90){
    console.log(`Grade A`);
}else{
    console.log(`Grade B`);
}

// if-else-if statement
if(tsmarks>90){
    console.log(`Grade A`);
}else if(tsmarks>80){
    console.log(`Grade B`);
}else if(tsmarks>70){
    console.log(`Grade C`);
}else{
    console.log(`Grade F`);
}

//nested if
if(tsmarks>90){
    console.log(`Grade A`);
    if(tsmarks>95){
        console.log(`Grade A+`);
    }
}

//switch statement
switch(tsmarks){
    case 90:
        console.log(`Grade A`);
        break;
    case 80:
        console.log(`Grade B`);
        break;
    case 70:
        console.log(`Grade C`);
        break;
    default:
        console.log(`Grade F`);
}

// for string
let stringArray: string[] = ["Ram", "Teja", "Aravind", "Ravi","Ad","c"];

// for (let name of stringArray) {
//     let nameLength = name.length;

//     if (nameLength < 2) {
//         console.log("Short name");
//     }
//     else if (nameLength >2 && nameLength < 5) {
//         console.log("Medium name");
//     }
//     else {
//         console.log("Long name");
//     }
// }

let l = stringArray.length;
switch(l){
    case 1:
        console.log("Short name");
        break;
    case 2:
        console.log("Medium name");
        break;
    case 3:
        console.log("Long name");
        break;
    default:
        console.log("Very long name");
}

//Looping Statements (Iterative Statements)
//for loop
for(let i = 0; i<10; i++){
    console.log(i);
}

let subjects:string[] = ["java","ts","react","next","dotnet"];
for(let i = 0;i<subjects.length;i++){
    console.log(`${i}, ${subjects[i]}`);
}

// for loop with of 
for(let subject of subjects){
    console.log(subject);
}
console.log("");
let arrayNums = [1,2,60,23,22,18,35,12]
for(let age of arrayNums){
    if (age < 10){
        console.log("Children");
    }
    else if (age >=10 && age < 18){
        console.log("Teenager");
    }
    else if (age >=18 && age < 60){
        console.log("Adult");
    }
    else{
        console.log("Senior Citizen");
    }
}
//while loop
let i = 0;
console.log("while loop");
while(i<arrayNums.length){
    console.log(i);
    i++;
}