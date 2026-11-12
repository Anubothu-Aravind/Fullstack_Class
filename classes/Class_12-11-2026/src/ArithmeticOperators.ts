let a:number = 10;
let b:number = 20;
let c:number;
// Arithmetic Operators
c = a+b;
console.log(`The value of c is : ${c}`);

c = a-b;
console.log(`The value of c is : ${c}`);

c = a*b;
console.log(`The value of c is : ${c}`);

c = a/b;
console.log(`The value of c is : ${c}`);

c = a%b;
console.log(`The value of c is : ${c}`);

c = a**b;
console.log(`The value of c is : ${c}`);   

// Unary Operators
c = ++a;
console.log(`The value of c is : ${c}`);

c = --a;
console.log(`The value of c is : ${c}`);

c = a++;
console.log(`The value of c is : ${c}`);

c = a--;
console.log(`The value of c is : ${c}`);

// Relational Operators
console.log(`${a && b}`)
console.log(`${a || b}`)
console.log(`!${a}`)
console.log(`!${b}`)
console.log(`${a>b}`)
console.log(`${a<b}`)
console.log(`${a==b}`)
console.log(`${a!=b}`)
console.log(`${a>=b}`)
console.log(`${a<=b}`)

// Bitwise Operators
console.log(`${a&b}`)
console.log(`${a|b}`)
console.log(`${a^b}`)
console.log(`${~a}`)
console.log(`${~b}`)

// Ternary Operator
console.log(`${a<b ? a:b}`)
console.log(`${a>b ? a:b}`)

// comparison and logical operator
console.log(`${a==b && a<b}`)
console.log(`${a==b || a<b}`)