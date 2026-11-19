let t:[number,string,boolean] = [101,"Aravind",true];
console.log(t);

let t1:[number,string];
 t1 = [101,"Aravind"];
 console.log(t1);

 let t2:[boolean,string,number];
//  t2=["cse",true,101]; // error,order of values are not as per declaration
t2 = [true,"cse",101]; // correct
console.log(t2); 
console.log(t2[1]); // cse

// example: write a function to ass a tuple and display the tuple 
 let Student:[number,string,number];
 Student = [101,"Aravind",48];
 //function takes tuple
 function studentDetails(s:[number,string,number]):void{
    console.log(s)
 }
 studentDetails(Student)