// Loops
/* 
In programming, loops are used to execute a block of code repeatedly until
a specific condition is met or for a specified number of times.
They provide a way to perform repetitive tasks efficiently without writing
the same code multiple times.
*/

/* 
Types of Loops
1. For Loop
2. While Loop
3. Do While Loop
 */

// For Loop Example

for(let i=3;i<7;i++){
    console.log(`The let number is ${i}`);
}
//  console.log(i);
for(var a=3;a < 6;a++){
    console.log(`The var number is ${a}`);
}
 console.log(a);
//Looping Backwards
for(let i=5;i>=0;i--){
    console.log(`The let number is ${i}`);
}

//Nested Loop
console.error('Nested Loop');
for(let i=0;i<3;i++){
    console.log(`Outer Loop ${i}`);
    for(let j=0;j<3;j++){
        console.log(`Inner Loop ${j}`)
    }
}

for(let a=2;a>0;a--){
    console.log(`Outerloop ${a}`);

    for (let b=4;b>=0;b--){
        console.log(`Innerloop ${b}`);
    }
}

// While Loop Example

let Amount =10;

console.log(`My amount Before spend ${Amount}`);

while(Amount>0){
    console.log(`I spent 1ruppe after my balance is ${Amount}`);
    Amount--;  
}
 console.log(`My amount After spend ${Amount}`); 

 while(Amount<60){
    Amount+=10;
    console.log(`I got 10 ruppees and my balance is ${Amount}`);
 }

 console.log(`Balance Amount is After adding amount ${Amount}`);

// Do While Loop Example

let num=10;

do{
    console.log(`the number is ${num}`);
    num--;
}while(num >= 5)


console.error('break');

    for(let a=0;a<10;a++){
    if(a==6){
        break;
    }
    console.log(`Iteration ${a}`);   
}

console.error('continue');
    for(let a=0;a<10;a++){
    if(a==6){
        continue;
    }
    console.log(`Iteration ${a}`);   
}


function greet(num){
console.log(`Hello World ${num}`);
}

for(let i=1;i<=15;i++){
    greet(i);
}