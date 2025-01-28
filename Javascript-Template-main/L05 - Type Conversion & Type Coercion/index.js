                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            //Type Conversion (Manually)
/*Type conversion (also known as type casting) is when you explicitly convert a
value from one type to another. JavaScript provides several functions for this purpose.*/

// Type Conversion
console.error('Type Conversion');

// String to Number

let str = '100';
let num = Number(str);
console.log(num);
console.log(typeof num);
// Number to String

let num1= 200;
let str1 = String(num1);
console.log(str1);
console.log(typeof str1);

// Boolean to String
let bool=true;
let str2 = String(bool);
console.log(str2);
console.log(typeof str2);

// String to Boolean

let str3 = 'apple';
let str4 = 'abcdefgh';

let bool1 = Boolean(str3);
console.log(bool1);
let bool2 = Boolean(str4);
console.log(bool2);
console.log(typeof bool1);
console.log(typeof bool2);
// Parsing integers and floats
 
 let floatstr ='3.14';
 let floatnum =parseInt(floatstr);
 console.log(floatnum)
 let float = parseFloat(floatstr);
 console.log(float);

//Type Coercion
/*Type coercion is when JavaScript automatically converts a
value from one type to another during an operation.
This often happens with equality checks and arithmetic operations. */

// Type Coercion (Automatically)

 console.error('Type Coercion');

// String and Number

let result = '3' + 2;
console.log(result);

let result1 = 3 - '2';
console.log(result1);

let result2 = 3 * '2';
console.log(result2);

let result3 = 3 / '2';
console.log(result3);

let result4 = 3 % '2';
console.log(result4);

// Boolean and Number

let result5 =true + 3;
console.log(result5);

let result6 =true + true;
console.log(result6);

let result7 =false + true;
console.log(result7);

// Coercion occurs in equality checks (==), but not in strict equality checks (===).
// Equality checks

let result8 = 3 == '3';
console.log(result8);
let result9 = 3 === '3';
console.log(result9);

let result10 = true == 1;
console.log(result10);
let result11 = true === 1;
console.log(result11);

