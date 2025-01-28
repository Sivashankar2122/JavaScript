// Datatypes
// Javascript is Dynamic Typing
// Primitive and Object Type

//Primitive Data Types
//1.Number - Represents both integer and floating-point numbers.
let age = 25;
console.log(age);
console.log(typeof age);

let price = 19.99;
console.log(price);
console.log(typeof price);

age = "25";
console.log(age);
console.log(typeof age);
//2.String - Represents a sequence of characters.
let greeting = "Hello, World!";
console.log(greeting);
console.log(typeof greeting);

//3.Boolean - Represents a logical entity and can have two values: true or false.
let isOnline = true;
console.log(isOnline);  
console.log(typeof isOnline);

let isOffline = false;
console.log(isOffline);
console.log(typeof isOffline);


//4.Undefined - A variable that has been declared but not assigned a value.
 let test;
 console.log(test);

//5.Null - Represents the intentional absence of any object value.
let car = null;
console.log(car);

//6.Symbol - Represents a unique and immutable value, often used as object property keys.

let id = Symbol("car");
console.log(id);

//7.BigInt - Represents whole numbers larger than 2^53 - 1 (the largest number JavaScript can reliably represent with the Number type).

let bignumber = BigInt(456789012345678901234567890);
let bigno = 456789012345678901234567890n;
console.log(bignumber);
console.log(bigno);

//Non-Primitive Data Types
//1.Object
/*Represents a collection of properties, each consisting of a key (usually a string) 
and a value (which can be any data type, including another object).*/
let person = { 
    name: "Jai", 
    age: 25, 
    isOnline: true 
};
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.isOnline);

let empty = {};
console.log(empty);

//2.Array
//A special type of object used for storing ordered collections of values.

let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);

let numbers = [1, 2, 3, 4, 5];
console.log(numbers);

let mixed = [1, "Apple", true, null, { name: "Jai" }];
console.log(mixed);

//3.Function
//A special type of object that is callable and can perform an action.

function test1(){
    console.log("Hello, World!");
}
test1();

function greet(name) {
    return "Hello, " + name + "!";
} 
console.log(greet("Jai"));  

//4.Date - A built-in object for handling dates and times.

let today = new Date();
console.log(today);
//5.