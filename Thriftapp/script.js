//variable declaration for bar id
const bar = document.getElementById('bar');

const close = document.getElementById('close');

//variable declaration fornav id
const nav = document.getElementById('navbar');

// Condition to check if the navbar is opened or not by clicking on the bar
if (bar){
    // when bar is clicked an event trigers
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

// if close icon is clicked, remove the sidenav
if (close){
    // when bar is clicked an event trigers
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}
