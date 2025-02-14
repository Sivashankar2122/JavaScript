
// let promise = new Promise((resolve,reject)=>{
    
//     let date = '6';
//     if(typeof date === 'number'){
//         resolve('Success');
//     }else{
//         reject('Failed');
//     }
// });

// promise.then((result)=>{
//     console.log(`Promise resolved with result: ${result}`);
// })
// .catch((error)=>{
//      console.log(`Promise resolved with result: ${error}`);
// });

// function fetchDate(){
// return new Promise((resolve,reject)=>{
//     console.log('Fetching data from server');

//     setTimeout(()=>{
//         const date ={id:1,name:'John'};
//          const random = Math.random();
//          console.log(`Random number: ${random}`);
//          const success =random > 0.5;

//             if(success){
//                 resolve(date);
//             }else{
//                 reject('Failed to fetch data');
//             }
//     },2000);
// });
// };

// fetchDate().then((result)=>{
//     console.log(`Successfully fetched Data name is ${result.name}`);
// }).catch((error)=>{
//     console.log('Fetched Error Data is:',error);
// });


let promise1 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('Promise 1 resolved');
    }, 3000);
});

let promise2 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('Promise 2 resolved');
    }, 2000);
});


let promise3 = new Promise((resolve)=>{
    setTimeout(() => {
        resolve('Promise 3 resolved');
    }, 1000);
});

// promise1.then((result)=>{
//     console.log(result);
// });

// promise2.then((result)=>{
//     console.log(result);
// });

// promise3.then((result)=>{
//     console.log(result);
// });
// Using Promise.all to call all promises together
Promise.all([promise1,promise2,promise3]).then((result)=>{
    console.log('All promises resolved',result);
}).catch((error)=>{
    console.log('Error:',error);
})


Promise.race([promise1,promise2,promise3]).then((result)=>{
    console.log('All promises resolved',result);
}).catch((error)=>{
    console.log('Error:',error);
}) 
