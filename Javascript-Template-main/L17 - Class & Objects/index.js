// Object Issue: Code repetition with individuel objectsl
let siva={
firstname: 'Siva' ,
lastname: 'Shankar' ,
dob: 2001,
phoneNo: 1234567890,
isEmployed: true,

getDetai1s: function (){
const age = new Date().getFullYear()- this.dob;
console. log (
    ` ${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}`
);
},

getEmploymcntStatus: function () {
    console.log(`${this.firstname} ${this.lastname} is ${this.isEmployed ? 'employed' : 'unemployed'}`);
}
};

console.log(siva);
siva.getDetai1s();
siva.getEmploymcntStatus();


let kumar={
firstname: 'Siva' ,
lastname: 'kumar' ,
dob: 2001,
phoneNo: 1234567890,
isEmployed: false,

getDetai1s: function (){
const age = new Date().getFullYear()- this.dob;
console. log (
    ` ${this.firstname} ${this.lastname} is ${age} old & contact no is ${this.phoneNo}`
);
},

getEmploymcntStatus: function () {
    console.log(`${this.firstname}${this.lastname} is ${this.isEmployed ? 'employed' : 'unemployed'}`);
}
};

console.log(kumar);
kumar.getDetai1s();
kumar.getEmploymcntStatus();


class person{
constructor(firstname, lastname, dob, phoneNo, isEmployed){
    this.firstname= firstname;
    this.lastname= lastname;
    this.dob= dob;
    this.phoneNo= phoneNo;
    this.isEmployed= isEmployed; 
}

getDetai1s(){
const age = new Date().getFullYear()- this.dob;
console. log (
    ` ${this.firstname} ${this.lastname} is ${age} years old & contact no is ${this.phoneNo}`
);
} 
getEmploymcntStatus() {
    console.log(`${this.firstname}${this.lastname} is ${this.isEmployed ? 'employed' : 'unemployed'}`);
}
}

let personames1= new person('kavin','kumar',2003,8475956881,false);


personames1.getDetai1s();
personames1.getEmploymcntStatus();

let personames2= new person('vijay','antony',1990,7485964152,true);

personames2.getDetai1s();
personames2.getEmploymcntStatus();