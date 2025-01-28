// Functions
// Functions are pieces of code that we can reuse again and again in our code

// Function Declaration - JavaScript Hoisting
/* A function declaration defines a named function.It's hoisted,
 meaning you can call it before it's defined. */

 function message(){
    console.log("This is a Message,this is a function");
}
// Calling the function
message();

// Function Parameters and Arguments
/*Functions can take parameters, which act as placeholders for the values 
that will be passed to the function.The passing value is called an argument.*/

function greeting(greet){
    if(greet){
        if(greet== "morning"){
            console.log("Good Morning");
        } else if (greet== "evening"){
            console.log("Good Evening");
        }else{
            console.log("Good Night");
        } 
    }else{
        console.log("Hello");
    }
}

function greetuser(username1,username2){
    console.log(`Welcome ${username1} and ${username2}`);
}

function add(a,b){
    return a+b;
}

greeting("hello");
greetuser("John","Doe");
console.log(add(2,3));

// Default Parameter
function printer(color="red"){
    console.log(`The color is ${color} color`);
}

printer("blue");
printer();
// Function with Return Type

function addition(a,b){
    return a+b;
}

let sum=addition(30,50);

console.log(sum);


///////////////////////////////////////////////////////////////////////

// Function Expression
/* A function expression defines a function inside an expression.
It's not hoisted, so you can't call it before it's defined.*/

// With Argument

const text=function(){
    console.log("This is a Function Expression");
}
text();

let morning=function(name){
    console.log(`Good Morning ${name}`)
};

morning("Ram");
morning("Ravi");


// Function Expression with Return Type

const mult=function(x,y){
    return x*y;
}

let result=mult(5,5);
console.log(result);

console.log(mult(5,5));
///////////////////////////////////////////////////////////////////////

// Arrow Function
// Arrow functions provide a concise syntax and do not bind their own 'this'. They are not hoisted.


let msg=()=>{
console.log("This is an Arrow Function");
};
msg();

// With Argument

let msg1=(name)=>{
    console.log(`Hello ${name}`);
};

msg1("Ram");

// Arrow Function with Return Type

let sub=(a,b)=>{
    return a-b;
};
let rul=sub(15,3);

console.log(rul);
console.log(sub(10,5));

// Shorter Way
let sub1=(m,n)=>m-n;
console.log(sub1(20,5));

//Function Calling Other Function
function welcomeshop(name){
    console.log(`Welcome to the Shop ${name}`);
}
function main(){
    welcomeshop("John");
}

main();

//Anonymous Functions: Later on Course on Arrays

setTimeout(() => {
 console.log("This is an Anonymous Function");   
},3000);

/**
Scope of variables will on functions and loops
var: Function scoped.
let: Block scoped.
const: Block scoped.
 */

function scope(){
    var z=10;
if(z=10){
    var a=100;
    let b=200;
    const c=300;
    console.log(b,c);
} 
// console.log(b,c); 
}
scope();
