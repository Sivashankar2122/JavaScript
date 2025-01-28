
const inputnames = document.getElementById('name');
const outputnames = document.getElementById('name-output');

console.log(inputnames);
console.log(outputnames);

inputnames.addEventListener('input',()=>{
    console.log(inputnames.value);
     outputnames.textContent =`Typed name:${inputnames.value}`;
})

const carselect= document.getElementById('car');
const outputcar = document.getElementById('selected-car');

carselect.addEventListener('change',()=>{
    outputcar.textContent= `Selected car: ${carselect.value}`;
});

