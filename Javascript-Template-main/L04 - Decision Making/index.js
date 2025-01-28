// Decision Making: if, if...else, else if
console.log('Decision Making');


// Example 1: if statement

let day="Sunday";

if(day=="Sunday"){
    console.log("Today is Holiday");
}

// Example 2: if...else statement
day="Monday";
if(day=="Sunday"){
    console.log("Today is Holiday");
}else{
    console.log("Today is Working Day");
}

let age=20;
if(age>=18){
    console.log("You are eligible to vote");}
else{
    console.log("You are not eligible to vote");
}
// Example 3: else if statement
let marks=50;
if(marks>=90){
    console.log("Grade A"); 
}
else if(marks>=80){
    console.log("Grade B");
}else{
    console.log("Grade C");
}

// Example 4: Nested if statements
// Variables
let age1=10
let withParent=false;
let id=false;

// Decision logic
if (age1>=18){
if (id){
    console.log("You are eligible to watch the movie");
}else{
        console.log("You can visit the mall");
    }
}else {
    if (withParent){
    console.log("You can visit the play area");
    }else{
        console.log("You not allowed to visit the mall");
    }

}

// Switch Statement
let weekdays=5;
switch (weekdays) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
         break;
    case 3: 
        console.log("Tuesday"); break;
    case 4:
        console.log("Wednesday");
         break;
    case 5:
        console.log("Thursday");
         break;
    case 6:
        console.log("Friday");
         break;
    case 7:
        console.log("Saturday"); 
        break; 
   default:
        console.log("Invalid Day");
        break;
}

let drink="Tea";

switch(drink){
    case "Tea":
        console.log("Tea is available");
        break;
    case "Coffee":
        console.log("Coffee is available");
        break;
    case "Juice":
        console.log("Juice is available");
        break;
    default:
        console.log(drink+" Not Available");
        break;
}

//Ternary Operator

let admin=true;

admin=false;

let message=admin?"Welcome Admin":"Welcome User";
console.log(message);


let mark=88;

let result=mark>=35?"Pass":"Fail";

console.log(result);

