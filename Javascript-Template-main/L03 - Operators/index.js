//Operators
/*
1.Arithmetic Operators
2.Assignment Operators
3.Comparison Operators
4.Logical Operators
5.String Operators
*/

//1.Arithmetic Operators - Arithmetic operators are used to perform basic mathematical operations
//1.1)Addition (+)
console.error('Arithmetic Operators');
let sum = 10 + 10;
console.log('Addition:'+sum);

//1.2)Subtraction (-)
let sub = 10 - 5;
console.log('Subtraction:',sub);
//1.3)Multiplication (*)
let mul = 10 * 10;
console.log('Multiplication:',mul);

//1.4)Division (/)
let div = 10 / 2;
console.log('Division:',div); 

//1.5)Modulus (%)
let mod = 10 % 3;
console.log('Modulus:',mod); 

//1.6)Exponentiation (**)
let exp = 2 ** 3;
console.log('Exponentiation:',exp);

//1.7)Increment (++)
let inc = 10;
let inc1 =10;
++inc1;
console.log('Increment:',inc1);

inc++;  
console.log('Increment:',inc); 

//1.8)Decrement (--)
let dec = 10;
let dec1 =10;
--dec1;
dec--;  
console.log('Decrement:',dec);
console.log('Decrement:',dec1);

//2.Assignment Operators - Assignment operators are used to assign values to variables.
//2.1)Assignment (=)
console.error('Assignment Operators');
let x = 10;
console.log('Assignment:',x);
//2.2)Addition Assignment (+=)
let add = 10;
add += 5;
console.log('Addition Assignment:',add);

//2.3)Subtraction Assignment (-=):
let sub1 = 10;
sub1 -= 5;
console.log('Subtraction Assignment:',sub1);

//2.4)Multiplication Assignment (*=):
let mul1 = 10;
mul1 *= 5;
console.log('Multiplication Assignment:',mul1);
//2.5)Division Assignment (/=):
let div1 = 10;
div1 /= 5;
console.log('Division Assignment:',div1);

//2.6)Modulus Assignment (%=):
let mod1 = 10;
mod1 %= 3;
console.log('Modulus Assignment:',mod1);

//2.7)Exponentiation Assignment (**=)
let exp1 = 2;
exp1 **= 3;
console.log('Exponentiation Assignment:',exp1);

//3.Comparison Operators - Comparison operators are used to compare two values.
console.error('Comparison Operators');
//3.1)Equal (==)
console.log('Equal 10==10',10 == 10);
console.log('Equal 10==10',10 == 11);
console.log("Equal 10=='10'",10 == '10');//TYPE COERCION

//3.2)Strict Equal (===)
console.log("Equal 10 === '10'",10 === '10');

//3.4)Not Equal (!=)
console.log('Not Equal 10!=10',10 != 10);
console.log('Not Equal 10!=11',10 != 11);

//3.5)Strict Not Equal (!==)
console.log('Not Equal 10!==10',10 !== 10);
console.log('Not Equal 10!==11',10 !== '11');

//3.6)Greater Than (>)
console.log('Greater Than 10>10',100 > 10);

//3.7)Less Than (<)
console.log('Less Than 10<10',10 < 10);

//3.8)Greater Than or Equal (>=)
console.log('Greater Than or Equal 10>=10',10 >= 10);

//3.9)Less Than or Equal (<=)
console.log('Less Than or Equal 10<=10',10 <= 10);

//4.Logical Operators - Logical operators are used to combine multiple conditions.
console.error('Logical Operators');
//4.1)Logical AND (&&)
let a = 10;
let b = 20;
let c = 10;
console.log('Logical AND:',a < b && b < c);
console.log('Logical AND:',true && false);
console.log('Logical AND:',true && true);

//4.2)Logical OR (||)
console.log('Logical OR:',a < b || b < c);
console.log('Logical OR:',true || false);
console.log('Logical OR:',false || false);

//4.3)Logical NOT (!)
console.log('Logical NOT:',!true);
console.log('Logical NOT:',!false);

//Example

let id = false;
let clg = true;

if (id && clg) {
    console.log('You can enter');
}else{
    console.log('You can not enter');
}
 
// 5.String Operators
console.error('String Operators');
console.log('Hello');
//String concatenation
let char='hello word';
console.log(char);

//String with Different Quotes:
let str= 'Hai'+ ' ' + 'Ram';
console.log(str);

str+= ' ' + 'How are you?';
console.log(str);

let message ='Hello';

let message1 ="hello i'm Ravi";
let message2 ='hello i\'m "Ravi"';
console.log(message);
console.log(message1);
console.log(message2);

//Concatenation with Object Properties:
let person1 = {
    name: 'Ravi',
    age: 25
};
console.log('Welcome '+ person1.name+ ' you are '+ person1.age+ ' years old');

//Template literal
console.log(`Welcome ${person1.name} you are ${person1.age} years old`);
//Order Prcedence
console.error('Order Prcedence');
console.log(2 + 3 * 4);
console.log((2 + 3) * 4);

// New Examples with - and /

// Additional Combined Example
