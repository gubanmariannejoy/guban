console.log ("Hello World!");

const myName = "Marainne Joy Guban";
let age = 20; 
const number = "9772025578";
const address = "Hda. Buenasuerte, Brgy. Andres Bonifacio, Cadiz City";


console.log(`Name: ${myName}`);
console.log(`Age: ${age}`);
console.log(`Number: ${number}`);
console.log(`Address: ${address}`);

function greet(name) {
    return `Good morning, ${name}`;
}

console.log(greet(`Rene`));

function mdas(num1, num2) {

    let Mul = num1 * num2;
    let Div = num1 / num2;
    let Add = num1 + num2;
    let Sub = num1 - num2;

    return `value (${num1}, ${num2})
     \nMul: ${Mul} \nDiv: ${Div.toFixed(2)} \nAdd: ${Add} \nSub: ${Sub}`;  
}   
console.log(mdas(5, 3));


// querySelector
const heading = document.querySelector("h1");
console.log(heading);
const contactHeading = document.querySelector("#contact h2");
console.log(contactHeading);
const servicesHeading = document.querySelector("#services h2");
console.log(servicesHeading);