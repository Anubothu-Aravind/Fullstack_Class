let univ = ["klu","jntuk","jntua","jntuk"];
//try extract klu only
//try extract juntua and jntuk
// extract juntua and jntuk from last
// extract all elements of the univ array
let extractElement: string[];

extractElement = univ.slice(0, 1);
console.log(extractElement); // ["klu"]

extractElement = univ.slice(2, 4);
console.log(extractElement); // ["jntua", "jntuk"]

extractElement = univ.slice(-2);
console.log(extractElement); // ["jntua", "jntuk"]

console.log(univ)