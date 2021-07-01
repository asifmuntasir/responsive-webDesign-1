// --------------- SHOW MENU --------------------
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    })
}


// ---------------- CHANGE BACKGROUND HEADER ---------
function scrollHeader(){
    const header = document.getElementById('header');
    // When the scroll is greater then 100 viewport height
    if(this.scrollY >= 100) {
        header.classList.add('scroll-header'); 
    }else {
        header.classList.remove('scroll-header');
    }
}

window.addEventListener('scroll', scrollHeader);


/*==================== SWIPER DISCOVER ====================*/
let swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
        rotate: 0,
    },
});


