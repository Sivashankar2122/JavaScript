let persion={
name:"Ravi",
age:25,
work:true
};

console.log(persion);
console.log(persion.name);
console.log(persion.age);
console.log(persion.work);

const persion1={
name:"Ram",
age:30,
work:true
};

console.log(persion1);
console.log(persion1.age);
console.log(persion1.name);
console.log(persion1.work);


// Adding a new property
persion.city="Bangalore";
console.log(persion);
persion1.city="Mysore";
console.log(persion1);

// Modifying an existing property
persion.age=26;
console.log(persion);
// Object with method

let bike={
    name:"FZ",
    color:"Blue",
    model:"2016",
    bikedetails:function(){
        return`
        Bike Name:${this.name},
        Color:${this.color},
        Model:${this.model}`;
    },
};

console.log(bike);
console.log(bike.bikedetails());
// Destructuring assignment

let student={
    name:"Jai",
    age:19,
    deparment:"IT",
};

let{name,age,deparment}=student;
console.log(name);
console.log(age);
console.log(deparment);
//Nested Complex Objects
let school={
    name:"ABC School",
    location:"Bangalore",
    details:{
        contact:{
            phone:1234567890,
            email:"abcschool@abc.edu.in"
        },
        students:{
            boys:80,
            girls:50
        },
        staff:{
            teaching:15,
            nonteaching:8
        }
    },
    classes:[{standard:"1st",fees:10000,sets :true},
        {standard:"2nd",fees:10000,sets :true},
        {standard:"3rd",fees:20000,sets :true},
        {standard:"4th",fees:25000,sets :false},
        {standard:"5th",fees:30000,sets :false}],
}
console.log(school);

// Accessing properties of the nested objects

console.log(`Welcome to ${school.name} in ${school.location}`);
console.log(`Contact us at ${school.details.contact.phone} or 
    ${school.details.contact.email}`);

school.classes.forEach((schoolclass)=>{
    console.log(
`Class:${schoolclass.class} standard,Fees:${schoolclass.fees},Seat Availability:${schoolclass.sets?"Availabel ":"Set Full"}`);
});

// Destructure owner object
let {name:SchoolName,location:SchoolLocation,
    contact:{email:schoolemail,phone:schoolphone}}=school.details;

// Output details about the restaurant

console.log(`Welcome to ${SchoolName} in ${SchoolLocation}`);
console.log(`Contact us at ${schoolphone} or ${schoolemail}`);

// Output the menu items using destructuring within forEach

school.classes.forEach(({standard,fees,sets})=>{
    console.log(
`Class:${standard} standard,Fees:${fees},Seat Availability:${sets?"Availabel ":"Set Full"}`);
});
