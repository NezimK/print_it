document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        {
            "image": "./assets/images/slideshow/slide1.jpg",
            "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
        },
        {
            "image": "./assets/images/slideshow/slide2.jpg",
            "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
        },
        {
            "image": "./assets/images/slideshow/slide3.jpg",
            "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
        },
        {
            "image": "./assets/images/slideshow/slide4.png",
            "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
        }
    ];

    let currentSlideIndex = 0;

    const arrowLeft = document.querySelector('.arrow_left');
    const arrowRight = document.querySelector('.arrow_right');
    const bannerImgs = document.querySelectorAll('.banner-img');
    const bannerTexts = document.querySelectorAll('.banner-text');
    const dots = document.querySelectorAll('.dot');

    function updateSlide(index) {

        bannerImgs.forEach((img, i) => img.style.display = 'none');
        bannerTexts.forEach((text, i) => text.style.display = 'none');
        
        bannerImgs[index].style.display = 'block';
        bannerTexts[index].style.display = 'block';

        dots.forEach((dot, i) => {
            if (i === index) {
                dot.classList.add('dot_selected');
            } else {
                dot.classList.remove('dot_selected');
            }
        });
    }

    arrowLeft.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex > 0) ? currentSlideIndex - 1 : slides.length - 1;
        updateSlide(currentSlideIndex);
        console.log("Left arrow clicked");
    });

    arrowRight.addEventListener('click', () => {
        currentSlideIndex = (currentSlideIndex < slides.length - 1) ? currentSlideIndex + 1 : 0;
        updateSlide(currentSlideIndex);
        console.log("Right arrow clicked");
    });

    updateSlide(currentSlideIndex);
});
