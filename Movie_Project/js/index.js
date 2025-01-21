// Swiper
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.popular-content', {
        direction: 'horizontal',
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            draggable: true,
        },
        breakpoints: {
            640: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
        },
    });

    // Intersection Observer for Popular and Movie
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } else {
                entry.target.classList.remove('show');
            }
        });
    }, {
        // threshold: 0.5,
    });

    // Target both .popular and .movie elements for animation
    const elementsToAnimate = document.querySelectorAll('.popular, .movie, .cast, .cast-heading, .download-title, .download-links');
    elementsToAnimate.forEach((el) => observer.observe(el));
});


// Play Video
let playButton = document.querySelector('.play-movie');
let video = document.querySelector('.video-container');
let myVideo = document.querySelector('#myvideo');
let closeBtn = document.querySelector('.close-video');

playButton.onclick = () => {
    video.classList.add('show-video');
    // Auto Play
    myVideo.play();
};

closeBtn.onclick = () => {
    video.classList.remove('show-video');
    myVideo.pause();
    myVideo.currentTime = 0;
};
