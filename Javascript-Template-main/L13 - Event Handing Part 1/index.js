const button = document.getElementById('button');

console.log(button);

button.addEventListener('click',()=>{
    console.log('Button clicked');
    alert('Button clicked');
})

button.addEventListener('mouseover',()=>{
    button.classList.add('buttonHover');
})

button.addEventListener('mouseout',()=>{
    button.classList.remove('buttonHover');
})

// document.addEventListener('keydown',(event)=>{
//     if (event.key ==='Enter'){
//         alert('Enter key pressed');
//     }
// });

// document.addEventListener('keypress',(event)=>{
//     if (event.key ==='Enter'){
//         alert('Enter key pressed');
//     }
// });

document.addEventListener('keyup',(event)=>{
    if (event.key ==='Enter'){
        alert('Enter key pressed');
    }
});

document.addEventListener('keydown',(event)=>{
    if (event.ctrlKey){
        alert('Enter key pressed');
    }
    
    if (event.shiftKey){
        alert('Enter key pressed');
    }
    
    if(event.key>='a'&& event.key<='z'){
        alert(`Alphabet key ${event.key} pressed!`);
    }

    if(event.key>='0'&& event.key<='9'){
        alert(`Number  ${event.key} pressed!`);
    }
});

