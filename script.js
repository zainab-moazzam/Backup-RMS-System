let menu = document.querySelector('#menu-bars')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('actives');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    section.forEach(sec =>{
        let top =window.scrollY;
        let height =sec.offsetHeight;
        let offset =sec.offsetTop -150;
        let id =sec.getAttribute('id');

        if(top >= offset && top < offset + height ){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        };
    });
}

let search = document.querySelector('#search-icon');
let searchClose = document.querySelector('#close');

search.onclick =() =>{
    document.querySelector('#search-form').classList.toggle('active');
}

searchClose.onclick =() =>{
    document.querySelector('#search-form').classList.remove('active');
}
let heart = document.querySelector('#heart');
// document.querySelector('#search-icon').onclick = () =>{
//     document.querySelector('#search-form').classList.toggle('active');
// }

// document.querySelector('#close').onclick = () =>{
//     document.querySelector('#search-form').classList.remove('active');
// }

var swiper = new Swiper(".home-slider", {
    spaceBetween: 200,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
    0: {
        slidesPerView: 1,
    },    
    640:{
        slidesPerView: 2,
    },
    768:{
        slidesPerView: 2,
    },
    1024:{
        slidesPerView: 3,
    },
    },
});
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 3000);
// }
// // window.onload = fadeOut;
// function loader() {
//     const loaderContainer = document.querySelector('.loader-container');
//     loaderContainer.classList.add('fade-out');
// }

// function fadeOut() {
//     setTimeout(loader, 3000); // Wait 3 seconds before calling loader function
// }

// window.onload = fadeOut;  // Call fadeOut once the page has finished loading
