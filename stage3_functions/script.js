
// ! 1. FUNCTION DECLARATION 


// ? Calling a function
function print(){
    console.log("Github JavaScript");
}
print(); 


// ? Funtion Parameters
function printName(name, age){
    console.log(`Your name is ${name} Your age is ${age}`);
}
printName("Ismail Orhan.", 23);  // ! Call | Invoke
printName("Diego.", 27);    // ! Call | Invoke


// Example
function calculatorAge(bornDate){
    return 2021 - bornDate;
}
alert(`Your age is: ${calculatorAge(1910)}`); // 111
const age = calculatorAge(1998);
console.log(`Your age is: ${age}`);

// Example
// odd/even number

const yourNumber = prompt("Enter your number:");

function oddEven(yourNumber){
  const result = yourNumber %2 != 0 ? `${yourNumber} is odd` : `${yourNumber} is even`;
  return result; 
}
alert(oddEven(yourNumber));

// ! 2. FUNCTION EXPRESSION

// Example 

const oddEven1 = function(yourNumber){
    return yourNumber %2 == 0 ? "Even" : "Odd";
}

console.log(oddEven1(5));  // invoke

// Example : Find a biggest number

let findBig = function(x,y,z) {
    let biggest;
    if(x > y && x > z){
        biggest = x;
    } else if(y > x &&  y > z){
        biggest = y;
    }else if(z > x  && z > y){
        biggest = z;
    }
    return biggest;
}

console.log("The biggest number is : " + findBig(5,6,7));


// ! 3. ARROW FUNCTION

const add = (a,b) => a + b;   // Definition of Arrow Function

console.log("Total of the numbers is : " + add(3,4)); // invoke


// Example 

const even1 = (number2) => number2 %2 == 0 ? "Even" : "Odd";

console.log(even1(4));

Example: Exponentiation

const base = prompt("Enter a number for base: ");
const power = prompt("Enter a number for power: ");

const exponentiation = (t,u) => t**u;

console.log(exponentiation(base,power));


// Example: Menu
const menu = () => {
    console.log("===============================");
    console.log("      JAVASCRIPT COURSE        ");
    console.log("===============================");
  };
  
menu();

const identity = (name, surname,birthDate) => {
    const info = `My name is ${name}, surname is ${surname} and my age is ${2021 - birthDate}`;
    return info;
}

console.log(identity("Ismail", "DOGAN", 1998));

// Example: Find a volume of cylinder

const r = prompt("Enter a radius");
const h = prompt("Enter a height");

const calcVolume = (r, h) =>  Math.PI * (r**2) * h;
console.log("Volume is: " + calcVolume(r, h).toFixed(2)); // 37.70
console.log("Volume is: " + Math.round(calcVolume(r, h))); // 38
