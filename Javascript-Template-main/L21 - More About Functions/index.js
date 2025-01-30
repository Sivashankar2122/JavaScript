/*
higher order functions
Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
*/

function StartEngine(){
return "Engine Started";
}

//higher order function
function drive(drivername,engine){
    const message = engine();// call back function

    console.log(`${drivername} is driving the car. ${message}`);
}
drive("John",StartEngine);

/*
pure functions : functions that do not have any side effects
*/

//pure function
function add(x,y){
return x+y;
};

console.log(add(5,3));
console.log(add(5,3));
console.log(add(5,3));


//impure function

let count=0;
function increment(value){
count += value;
return count;
};

console.log(increment(1));
console.log(increment(1));
console.log(increment(1));
console.log(increment(1));



