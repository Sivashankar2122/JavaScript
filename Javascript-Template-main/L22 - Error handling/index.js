class Bank{
    user =[
        {Accountno:19696, balance:10000, username:"Ram",password:"2122"},
        {Accountno:14696, balance:1500,  username:"Ravi",password:"3133"},
        {Accountno:17646, balance:100,   username:"Rahul",password:"7177"},
    ];

    withouterrorhandling (Accountno){
        const result =  this.user.find((e)=>e.Accountno === Accountno);
        console.log(`Account Holder:${result.username}\n Accountno:${result.Accountno}\n Balance:${result.balance}`);
    }
//guard clause
    getBalance(Accountno,password){
        try {
              const result =  this.user.find((e)=>e.Accountno === Accountno);
             if (!result) {
                  throw `Invalid Accountno ${Accountno}`;
             }
              const isValidPassword = result.password === password; 
              if (!isValidPassword) {
                throw "Invalid Password";
              } 
              return `Account Holder is ${result.username} and Balance is ${result.balance}`;
        } catch (error) {           
            return error;
        }finally{
            console.log("Thank you for using our services");
        }
    }
    // getBalance(Accountno,password){
    //     try {
    //           const result =  this.user.find((e)=>e.Accountno === Accountno);
    //          if (result) {
    //           const isValidPassword = result.password === password;               
    //           if (isValidPassword) {
    //             console.log(`Account Holder is ${result.username} and Balance is ${result.balance}`);
    //             return `Account Holder is ${result.username} and Balance is ${result.balance}`;
    //           } else {
    //             throw "Invalid Password";
    //           }
    //          }else{
    //             throw `Invalid Accountno ${Accountno}`;
    //          }            
    //     } catch (error) {
    //         console.log(error);
    //         return error;
    //     }finally{
    //         console.log("Thank you for using our services");
    //     }
    // }
}

let iob=new Bank();
console.log(iob.user);

iob.getBalance(19696,"2122");
// iob.getBalance(14696,"3133");
// iob.getBalance(17646,"7177");

// iob.withouterrorhandling(19696);
// iob.withouterrorhandling(19690);


const formElement = document.getElementById("formData");
const displaymessage = document.getElementById("displayMessage");

formElement.addEventListener('submit',function(event){
    event.preventDefault();   

    const formData = new FormData(this);

    const request ={Accountno:null,password:''};

    formData.forEach((value,key)=>{
        request[key]=value; 
    });

    let iob=new Bank();

    const message = iob.getBalance(Number(request.Accountno),request.password);

    displaymessage.innerHTML = message;

    formElement.reset();
});