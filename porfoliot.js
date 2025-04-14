window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle('scrolled', window.scrollY > 50);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const serviceBoxes = document.querySelectorAll('.service-box');
    let currentIndex = 0;

    const updateCarousel = () => {
        const offset = -currentIndex * 100;
        carousel.style.transform = `translateX(${offset}%)`;
    };

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : serviceBoxes.length - 1;
        updateCarousel();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex < serviceBoxes.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    });

    // Automatic sliding
    setInterval(() => {
        currentIndex = (currentIndex < serviceBoxes.length - 1) ? currentIndex + 1 : 0;
        updateCarousel();
    }, 5000); // 5 seconds interval

    const projetsCarousel = document.querySelector('.projets-carousel');
    const prevBtnProjets = document.querySelector('.prev-btn-projets');
    const nextBtnProjets = document.querySelector('.next-btn-projets');
    const projetBoxes = document.querySelectorAll('.projet-box');
    let currentProjetIndex = 0;

    const updateProjetsCarousel = () => {
        const offset = -currentProjetIndex * 100;
        projetsCarousel.style.transform = `translateX(${offset}%)`;
    };

    prevBtnProjets.addEventListener('click', () => {
        currentProjetIndex = (currentProjetIndex > 0) ? currentProjetIndex - 1 : projetBoxes.length - 1;
        updateProjetsCarousel();
    });

    nextBtnProjets.addEventListener('click', () => {
        currentProjetIndex = (currentProjetIndex < projetBoxes.length - 1) ? currentProjetIndex + 1 : 0;
        updateProjetsCarousel();
    });

    // Automatic sliding for projects
    setInterval(() => {
        currentProjetIndex = (currentProjetIndex < projetBoxes.length - 1) ? currentProjetIndex + 1 : 0;
        updateProjetsCarousel();
    }, 100000); // 5 seconds interval
});