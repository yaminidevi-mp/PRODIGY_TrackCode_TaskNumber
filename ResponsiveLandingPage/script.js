// Select the navigation bar
const navbar = document.getElementById('navbar');

// add a scroll event listener
window.addEventListener('scroll',() => {
    if(window.scrollY > 50){
        navbar.classList.add('scrolled');
    }
    else{
        navbar.classList.remove('scrolled');
    }
});
