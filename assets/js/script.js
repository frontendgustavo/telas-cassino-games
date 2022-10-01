document.addEventListener('DOMContentLoaded', function () {
    splideEls = document.querySelectorAll('.splide');

    for (var i = 0; i < splideEls.length; i++) {

        new Splide(splideEls[0], {
            type: 'loop',
            perPage: 2,
            perMove: 1,
            padding: '5rem',
            breakpoints: {
                4000: {
                    perPage: 6,
                    padding: '5rem'
                },
                2500: {
                    perPage: 4,
                    padding: '5rem'
                },
                1700: {
                    perPage: 3,
                    padding: '6rem'
                },
                1500: {
                    perPage: 2,
                    padding: '5rem'
                },
                1200: {
                    perPage: 2,
                    padding: '5rem'
                },
                1165: {
                    perPage: 2,
                    padding: '1rem'
                },
                768: {
                    perPage: 1,
                    padding: '2rem'
                },
            }
        }).mount();
        new Splide(splideEls[1], {
            type: 'loop',
            perPage: 5,
            perMove: 1,
            padding: '3em',
            breakpoints: {
                4000: {
                    perPage: 14,
                    padding: '2rem'
                },
                3500: {
                    perPage:12,
                    padding: '2rem'
                },
                3000: {
                    perPage: 9,
                    padding: '2rem'
                },
                2400: {
                    perPage: 7,
                    padding: '2rem'
                },
                1700: {
                    perPage: 6,
                    padding: '2rem'
                },
                1450: {
                    perPage: 5,
                    padding: '2rem'
                },
                1250: {
                    perPage: 4,
                    padding: '2rem'
                },
                1100: {
                    perPage: 3,
                    padding: '2rem'
                },
                800: {
                    perPage: 2,
                    padding: '2rem'
                },
                550: {
                    perPage: 2,
                    padding: '1rem'
                },
                500: {
                    perPage: 1,
                    padding: '7rem',
                },
                450: {
                    perPage: 1,
                    padding: '7rem',
                },
                400: {
                    perPage: 1,
                    padding: '4rem',
                },
                350: {
                    perPage: 1,
                    padding: '2rem',
                },
            }
        }).mount();
        new Splide(splideEls[2], {
            type: 'loop',
            perPage: 5,
            perMove: 1,
            padding: '2em',
            breakpoints: {
                4000: {
                    perPage: 14,
                    padding: '2rem'
                },
                3500: {
                    perPage:12,
                    padding: '2rem'
                },
                3000: {
                    perPage: 9,
                    padding: '2rem'
                },
                2400: {
                    perPage: 7,
                    padding: '2rem'
                },
                1700: {
                    perPage: 6,
                    padding: '2rem'
                },
                1450: {
                    perPage: 5,
                    padding: '2rem'
                },
                1250: {
                    perPage: 4,
                    padding: '2rem'
                },
                1100: {
                    perPage: 3,
                    padding: '2rem'
                },
                800: {
                    perPage: 2,
                    padding: '2rem'
                },
                550: {
                    perPage: 2,
                    padding: '1rem'
                },
                500: {
                    perPage: 1,
                    padding: '7rem',
                },
                450: {
                    perPage: 1,
                    padding: '7rem',
                },
                400: {
                    perPage: 1,
                    padding: '4rem',
                },
                350: {
                    perPage: 1,
                    padding: '2rem',
                },
            }
        }).mount();
        new Splide(splideEls[3], {
            type: 'loop',
            perPage: 5,
            perMove: 1,
            padding: '2em',
            breakpoints: {
                4000: {
                    perPage: 14,
                    padding: '2rem'
                },
                3500: {
                    perPage:12,
                    padding: '2rem'
                },
                3000: {
                    perPage: 9,
                    padding: '2rem'
                },
                2400: {
                    perPage: 7,
                    padding: '2rem'
                },
                1700: {
                    perPage: 6,
                    padding: '2rem'
                },
                1450: {
                    perPage: 5,
                    padding: '2rem'
                },
                1250: {
                    perPage: 4,
                    padding: '2rem'
                },
                1100: {
                    perPage: 3,
                    padding: '2rem'
                },
                800: {
                    perPage: 2,
                    padding: '2rem'
                },
                550: {
                    perPage: 2,
                    padding: '1rem'
                },
                500: {
                    perPage: 1,
                    padding: '7rem',
                },
                450: {
                    perPage: 1,
                    padding: '7rem',
                },
                400: {
                    perPage: 1,
                    padding: '4rem',
                },
                350: {
                    perPage: 1,
                    padding: '2rem',
                },
            }
        }).mount();



    }
});

let btnMenuMobileEl = document.querySelector('.btn-menu-mobile');
let menuAsideEl = document.querySelector('.menu-aside');
let logoMobileEl = document.querySelector('.logo-mobile');

btnMenuMobileEl.addEventListener('click', function () {
    menuAsideEl.style.width = "250px";
    menuAsideEl.style.opacity = '1';
    logoMobileEl.style.opacity = '0';
    menuAsideEl.addEventListener('click', function () {
        menuAsideEl.style.width = "0px";
        menuAsideEl.style.overflowX = 'hidden'
        menuAsideEl.style.opacity = '0';
        logoMobileEl.style.opacity = '1';
    })
})