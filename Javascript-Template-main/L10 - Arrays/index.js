/*
An array is a data structure that can hold multiple values at once. 
These values can be of any type, including numbers, strings, objects, or even other arrays.
Arrays in JavaScript are zero-indexed, meaning the first element is at index 0.
*/

// Using square brackets

let furniture = ["table", "chair", "sofa", "bed"];

console.log(furniture);
console.log(furniture.length);

// Accessing Array Elements:
console.log(furniture[0]);
console.log(furniture[1]);
console.log(furniture[2]);
console.log(furniture[3]);
console.log(furniture[4]);

// Change Value in Array
 furniture[3]='dining table';
 console.log(furniture);

/*
Using for loop to print array with hard-coded condition 
it will create issue if condition is like i < 5
*/

for(let i=0;i<2;i++){
console.log(furniture[i]);
}

/* 
To avoid hard-coded condition switch to array methods
*/
// We can use array length
console.log(furniture.length);

for(let i=0;i<furniture.length;i++){
console.log(furniture[i]);
}

// More Array Methods
let fruits = ["Banana", "Mango", "Orange"]; 
console.log(fruits);

/* 
Add element to array
Adds one or more elements to the end of an array 
and returns the new length of the array.
*/
fruits.push("Apple");
fruits.push("Pineapple");

console.log(fruits);
/*
Remove element from array
Removes the last element from an array and returns that element.
*/
fruits.pop();
console.log(fruits);
/*
Adds one or more elements to the beginning of an array and returns the new length of the array.
*/
fruits.unshift("Kiwi");
fruits.unshift("Grapes");
console.log(fruits);
/*
Removes the first element from an array and returns that element.
*/
fruits.shift();
console.log(fruits);
// Anonymous Functions
fruits.forEach(function(x,index){
    console.log(x,index);
})

fruits.forEach((x)=>{
    console.log(x);
});

// Combining Arrays

let array1=["apple","banana"];
let array2=["paper","pen","pencil"];

let comarray=array1.concat(array2);

console.log(comarray);
// Finding an Element Index, If not found it will return -1

let testdata = comarray.indexOf("pen");
console.log(testdata);

let testdata1 = comarray.indexOf("blackspen");
console.log(testdata1);

let searchdata="paper";
let testdata3=comarray.indexOf(searchdata);

if(testdata3>=0){
console.log(`search data ${searchdata} found at index ${testdata3}`);
}else{
    console.log(`search data ${searchdata} not found`);
}

// Array with mixed data types

let mixdata=["apple",1,2,3,"banana",true,false];
console.log(mixdata);

let test = mixdata.includes("apple");
console.log(test);

let test1 = mixdata.includes("paper");
console.log(test1);

console.log(mixdata.includes("banana"));
console.log(mixdata.includes("paper"));
// Array of Employee Objects

let employee=[
    {id:1,name:"John",salary:5000,age:25},
    {id:2,name:"Ram",salary:6000,age:30},
    {id:3,name:"Ravi",salary:5500,age:28},
];
console.log(employee);

employee.forEach((x)=>{
    console.log(x.id);
})

employee.forEach((x)=>{
    console.log(
    `Employee ID: ${x.id},
     Employee Name: ${x.name},
     Employee Salary: ${x.salary}`);
})

//Fliters
let filtersdata=employee.filter((data)=>data.id==3);
console.log(filtersdata);

let filtersdata1=employee.filter((data)=>data.salary>=5500);
console.log(filtersdata1);
// Map
 let agemap=employee.map(
    (employee)=>{console.log(
        `Employee Name:${employee.name},
         Employee Age:${new Date().getFullYear()-employee.age}
        `)
    });
