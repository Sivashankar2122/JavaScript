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

    getBalance(Accountno,password){

        try {
              const result =  this.user.find((e)=>e.Accountno === Accountno);

             if (result) {
              const isValidPassword = result.password === password;               
              if (isValidPassword) {
                console.log(`Account Holder is ${result.username} and Balance is ${result.balance}`);
              } else {
                throw "Invalid Password";
              }
             }else{
                throw `invalid Accountno ${Accountno}`;
             }            
        } catch (error) {
            console.log(error);
        }finally{

        }
    }
}

let iob=new Bank();

iob.getBalance(19696,"3133");
iob.getBalance(19696,"2122");

// iob.withouterrorhandling(19696);
// iob.withouterrorhandling(19690);