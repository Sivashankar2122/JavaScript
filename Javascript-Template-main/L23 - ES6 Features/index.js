/*
Arrow Functions
Variable Declarations
Template Literals
Object Destructuring
Default Parameters
Spread Operator
*/

//ES5 => ES6
//ES5
function multyply(x,y){
    return x*y;
}

//ES6 //Arrow Functions
const multyply1 = (x,y) => x*y;

//ES5
var x = 10;

//ES6 //Variable Declarations
let x1 = 10;
const x2 = 10;


//ES5
var name= "Ravi";
console.log("Hello "+name + " Welcome to JS Class");

//ES6 //Template Literals

console.log(`Hello ${name} Welcome to JS Class`)

//Object Destructuring
//ES5
 var username = {firstname: "Ravi", lastname: "Kumar"};

 console.log(username.firstname);
 console.log(username.lastname);

//ES6
 var username1 = {firstname: "Ravi", lastname: "Kumar"};
const {firstname, lastname} = username1;

console.log(firstname);
console.log(lastname);


//Default Parameters
//ES5
function greet(name){
    name = name || "Mister";
    console.log("Hello "+name+" Good Morning");
}

greet("Ravi");
//ES6
function greetuser(name ="Mister"){
    console.log(`Hello ${name} Good morning`);
};
greetuser('ram');


//string concatenation using spread operator
//ES5
let a=[1,2,3,4];
let b=[5,6,7]; 
let c= a.concat(b);

 console.log(c);

//ES6
let combine  = [...a,...b];
console.log(combine);

