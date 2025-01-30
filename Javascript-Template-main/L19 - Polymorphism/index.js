
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
}

class Employee extends person{
    constructor(firstname, lastname, dob, phoneNo, isEmployed, role,company){
        super(firstname,lastname,dob,phoneNo,isEmployed);
        this.role= role;
        this.company= company;
    }

    getDetai1s(){
     const age = new Date().getFullYear() - this.dob;
     console.log(`${this.firstname}${this.lastname} is ${age} years old,work as ${this.role} in ${this.company}`);   
    }
}

employee1= new Employee('John','Doe',1990,1234567890,true,'Software Developer','Google');



class student extends person{
    constructor(firstname, lastname, dob, phoneNo, isEmployed, course, college){
        super(firstname,lastname,dob,phoneNo,isEmployed);
        this.course= course;
        this.college= college;
    }
    
    getDetai1s(){
     const age = new Date().getFullYear() - this.dob;
     console.log(`${this.firstname}${this.lastname} is ${age} years old, studing coures is ${this.course} in ${this.college}`);   
    }
}

student1 = new student('Gokul','',2002,1425364758,false,'MCA','IIT');

employee1.getDetai1s();
student1.getDetai1s();