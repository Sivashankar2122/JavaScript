window.addEventListener('resize',()=>{
const dimensions =`window dimensions:${window.innerWidth}px x ${window.innerHeight}px`
document.getElementById('dimensions').textContent= dimensions;
});

window.addEventListener('load',()=>{
    console.log('page is fully loaded');
});

window.addEventListener('scroll',()=>{
    console.log('page is scrolling');
});
