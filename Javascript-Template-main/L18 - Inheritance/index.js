
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

getEmploymentStatus() {
    console.log(`${this.firstname}${this.lastname} is ${this.isEmployed ? 'employed' : 'unemployed'}`);
}
}



class Employee extends person{
    constructor(firstname, lastname, dob, phoneNo, isEmployed, role,company){
        super(firstname,lastname,dob,phoneNo,isEmployed);
        this.role= role;
        this.company= company;
    }

    getjobdetails(){
        console.log(`${this.firstname} ${this.lastname} is working as ${this.role} in ${this.company}`);
    }
}

employee1= new Employee('John','Doe',1990,1234567890,true,'Software Developer','Google');

employee1.getjobdetails();
employee1.getDetai1s();
employee1.getEmploymentStatus();

employee2= new Employee('Siva','Shankar',1995,1425475869,true,'UI/UX Developer','Microsoft');

employee2.getDetai1s();
employee2.getEmploymentStatus();


