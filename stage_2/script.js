//          ********** If Else ********** //

const s1 = Number(prompt("First Number: "));
const islem = prompt("Islemi giriniz: ");
const s2 = Number(prompt("Second Number: "));
let sonuc = 0;
if(islem == "+"){
    sonuc = s1 + s2; 
}
else if(islem == "-"){
    sonuc = s1 - s2 ;
}
else if(islem == "*"){
    sonuc = s1 * s2 ;
}
else if(islem == "/"){
    sonuc = s1 / s2 ;
}
else{
    alert("Wrong Operation"); 
}

console.log(` ${s1} ${islem} ${s2} = ${sonuc}`);

                    // Ternary //
const age = prompt("Enter your age: ");
const health = prompt("Are you healthy? (y/n)");

const result = (age > 18 && health == "y" ? "You can be a soldier" : "You cannot be a soldier");
console.log(result);
alert(result);

                // Switch Case
const dayNo = Number(prompt("Enter the day number:"));
switch (dayNo) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    alert("Enter a value between 1 and 7");
    break;
}
console.log(dayName);

const salary = prompt("Enter your salary: ");
const workHour = prompt("Enter your work hour: ")

const extraSalary = workHour > 10 ? salary * 1.5 : (workHour > 5 ? salary * 1.2 : salary * 1.1);
console.log(extraSalary);

const borç = 0;
const maaş = 3000;
console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir 🤑" : "Kredi Alamaz 🥺");

// Loops 

for (let i = 1; i >= 10 ; i++) {
    console.log(`${i} - Ismail`);

}

// Find a Prime Number 

const number = Number(prompt("Enter a number: "));

let prime = false;
for (let i = 2; i < number ; i++) {
    if(number %i == 0){
        prime  = false;
        break;
    }
    prime = true; 
    
}

const final = prime ? "PRIME NUMBER" : "NOT A PRIME NUMBER";
console.log(final);