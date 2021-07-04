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
// var swiper = new Swiper(".discover__container", {
//     effect: "coverflow",
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: "auto",
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true,
//     },
//     pagination: {
//       el: ".swiper-pagination",
//     },
//   });


/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file');
const videoButton = document.getElementById('video-button');
const videoIcon = document.getElementById('video-icon');

function playPause(){
    if(videoFile.paused){
        // Play Video
        videoFile.play();

        // Change the icon
        videoIcon.classList.add('ri-pause-circle-line');
        videoIcon.classList.remove('ri-play-circle-line');
    }else{
        videoFile.pause();
        // Change the icon
        videoIcon.classList.remove('ri-pause-line');
        videoIcon.classList.add('ri-play-circle-line');
    }
}

videoButton.addEventListener('click', function(){
    playPause();
});

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line');
    videoIcon.classList.add('ri-play-circle-line');
}

videoFile.addEventListener('ended', finalVideo);


