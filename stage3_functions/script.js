
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