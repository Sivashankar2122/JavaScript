
const feedbackform = document.getElementById('feedbackForm');
const response = document.getElementById('response');

console.log(feedbackform);

feedbackform.addEventListener('submit',function(event){
event.preventDefault();

const formData = new FormData(this);

console.log(formData);

const formDataJSON = {};

formData.forEach((value,key)=>{
    formDataJSON[key] =value;
});

console.log(formDataJSON);

const jsonstring = JSON.stringify(formDataJSON,null,2);

response.innerHTML = `<pre>${jsonstring}</pre>`;
feedbackform.reset();
});





