// Truthy and Falsy Values
console.log('Truthy and Falsy Values');

// Falsy Values:

console.log(Boolean(0)); 
console.log(Boolean(''));
console.log(Boolean(undefined)); 
console.log(Boolean(null)); 
console.log(Boolean(NaN));

// Truthy Values:

console.log(Boolean(-6));
console.log(Boolean('Hello'));
console.log(Boolean({}));
console.log(Boolean([]));
console.log(Boolean(function(){}));




let cash= 1000;

if(cash){
    if(cash>=100){
        console.log('you buy a new t-shirt');
    }else{
        console.log("you con't buy new t-shirt");
    }
}else{
    console.log('you have less money');
}


let idcard= false;
console.log(typeof idcard);
if(idcard){
    console.log('you can go to exam');     
}else{
    console.log('you can not go to the exam');
}