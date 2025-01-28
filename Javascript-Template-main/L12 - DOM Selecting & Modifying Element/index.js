/*
Document Object Model (DOM) manipulation
The following the way to Selecting & Modifying Element in DOM
1.getElementById
2.getElementsByClassName
3.getElementsByTagName
4.querySelector
5.querySelectorAll
*/


//1.getElementById
//Selects a single element based on its unique id attribute.

const heading =document.getElementById("main-heading");

//find the value 
console.log(heading);
console.log(heading.innerHTML); // get the inner HTML of the element
console.log(heading.textContent); // get the text content of the element

//change the value
heading.innerHTML ="See, I am from planet earth!";


function changeheading(){
    setTimeout(() => {
        heading.textContent ="New Heading";        
    }, 3000);
}

changeheading();

//2.getElementsByClassName 
// select the element based on there class name, returning a collection of elements.

const listitems=document.getElementsByClassName('list-item');
console.log(listitems);

console.log(listitems.item(0));
console.log(listitems.item(3));
console.log(listitems.item(3).innerHTML);
console.log(listitems.item(3).textContent);


for(let i=0;i < listitems.length;i++){
// console.log(listitems.item(i).textContent);
console.log(listitems.item(i).innerHTML);
}


for(let i=0;i < listitems.length;i++){
    listitems.item(i).innerHTML =`Modified Item ${i+1}`;
}


const ItemArray =Array.from(listitems);

ItemArray.forEach((item)=>{
    console.log(item.textContent);
})

//3.getElementsByTagName
const content = document.getElementById('content').getElementsByTagName('p');
console.log(content);

function chnagecontentstyle(){
content.item(0).style.color='blue';
content.item(1).style.fontSize='26px';
content.item(2).style.fontWeight='800';
content.item(3).style.backgroundColor='black';
content.item(3).style.color='white';
}

chnagecontentstyle();


function contentstyle(){
    for(let i=0;i<content.length;i++){
        content.item(i).style.paddingBottom='10px';
    };
}

contentstyle();

//Remove element from the DOM

const removeElement = document.getElementById('message');

    setTimeout(() => {
            removeElement.remove();   
    }, 4000);

//Add element to the DOM
const newparagraph = document.createElement('p');
newparagraph.textContent ='This is a new paragraph';
newparagraph.style.color='red';
newparagraph.classList.add('new-paragraph');
const container =document.getElementById('main');

// container.appendChild(newparagraph);

// container.insertBefore(newparagraph,heading);

container.insertAdjacentHTML('afterbegin','<p>see me  main begin </p>');
container.insertAdjacentHTML('afterend','<p>see me after main end </p>');
container.insertAdjacentHTML('beforebegin','<p>see me after main beforebegin </p>');
container.insertAdjacentHTML('beforeend','<p style= "padding-top:20px">see me after  beforeend </p>');

//4.querySelector

const subtitle= document.querySelector('.subtitle');

console.log(subtitle.textContent);

setTimeout(()=>{
    subtitle.textContent='New Subtitle from JS';
},6000);

//5.querySelectorAll

const listItemQuery = document.querySelectorAll('.list-item');

console.log(listItemQuery);

listItemQuery.forEach((item,index)=>{
item.textContent=`New Item ${index+2}`;    
})



