const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');
/* ====================== SHOW MENU ====================== */
/* validate if constant exists */
if(navToggle)
{
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* =========== MENU HIDDEN =========== */
/* validate if constant exists */
if(navClose)
{
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ====================== REMOVE MENU MOBILE ====================== */
const navLinks = document.querySelectorAll('.nav-link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    // ketika mengklik setiap(forEach) NAV LINK,  menghapus class SHOW MENU
    navMenu.classList.remove('show-menu')
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/* ====================== CHANGE ABCKGROUND HEADER ====================== */
function scrollHeader() {
    const header = document.getElementById('header')
    // ketika diSCROLL lebih besar dari 80 viewport height, tambahkan class SCROLL HEADER ke TAG HEADER
    if(this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/* ====================== TESTIMONIAL SWIPER ====================== */
var swiper = new Swiper('.testimonial-wrapper', {
    loop: 'true,',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/* ====================== SCROLL SECTION ACTIVE LINK ====================== */

// get all section taht have an id defined
const section = document.querySelectorAll('section[id]');

// add an event listener listening for scroll
window.addEventListener('scroll', navHightLighter);

function navHightLighter() {
    // get current scroll position
    let scrollY = window.pageYOffset;
    // now we loop through section to get height, top and ID values for each
    section.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id');
        /* - if our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - to know which link need an active class, we use sectionId variable we are getting while looping through section as an selector */
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
        {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    })
}

/* ====================== PORTFOLIO ITEM FILTER ====================== */
const filterContainer = document.querySelector('.portfolio-filter-inner'),
        filterBtns = filterContainer.children,
        totalFilterBtn = filterBtns.length,
        portfolioItem = document.querySelectorAll('.portfolio-item'),
        totalPortfolioItem = portfolioItem.length;
        // console.log(portfolioItem);

    for(let i=0; i<totalFilterBtn; i++)
    {
        // console.log(filterBtns[1]);
        filterBtns[i].addEventListener('click', function() {
            filterContainer.querySelector('.active').classList.remove('active');    
            // console.log(this);
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            // console.log(filterValue);
            for(let k=0; k<totalPortfolioItem; k++) {
                if(filterValue === portfolioItem[k].getAttribute('data-category'))
                {
                    portfolioItem[k].classList.remove('hide');
                    portfolioItem[k].classList.add('show');
                } else {
                    portfolioItem[k].classList.add('hide');
                    portfolioItem[k].classList.remove('show');
                }
                if(filterValue === 'all') {
                    portfolioItem[k].classList.remove('hide');
                    portfolioItem[k].classList.add('show');
                }   
            }
        })
    }

/* ====================== THEME/DISPLAY CUSTOMIZATION ====================== */
const theme = document.querySelector('#theme-button');
const themeModel = document.querySelector('.customize-theme');
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll('.choose-color span');
var root = document.querySelector(':root');
const bg1 = document.querySelector('.bg-1');
const bg2 = document.querySelector('.bg-2');
const bg3 = document.querySelector('.bg-3');

// open model
const openThemeModel = () => {
    themeModel.style.display = 'grid';
}
// theme close
const closeThemeModel = (e) => {
    if(e.target.classList.contains('customize-theme'))
    {
        themeModel.style.display = 'none';
    }
}
theme.addEventListener('click', openThemeModel);
themeModel.addEventListener('click', closeThemeModel);

/* =========== FONT =========== */

// remove active class form spans or font size selector
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}
fontSizes.forEach(size => {
    size.addEventListener('click', () => {

        removeSizeSelector();
        let fontSizes;
        size.classList.toggle('active');
        if(size.classList.contains('font-size-1'))
        {
            fontSize = '12px';
        } else if(size.classList.contains('font-size-2'))
        {
            fontSize = '14px';
        } else if(size.classList.contains('font-size-3'))
        {
            fontSize = '16px';
        } else if(size.classList.contains('font-size-4'))
        {
            fontSize = '18px';
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
})

/* =========== PRIMERY COLORS =========== */

// remove active class from colors
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primeryHue;

        if(color.classList.contains('color-1'))
        {
            primeryHue = 252;
        } else if(color.classList.contains('color-2'))
        {
            primeryHue = 52;
        } else if(color.classList.contains('color-3'))
        {
            primeryHue = 352;
        } else if(color.classList.contains('color-4'))
        {
            primeryHue = 152;
        } else if(color.classList.contains('color-5'))
        {
            primeryHue = 202;
        } 
        color.classList.add('active');
        root.style.setProperty('--primery-color-hue', primeryHue);
    })
})

/* ========= THEME BACKGROUND ========= */
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// change bakground color 
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}
bg1.addEventListener('click', () => {
    // add active class
    bg1.classList.add('active');
    // remove active class from the others
    bg2.classList.remove('active');
    bg3.classList.remove('active');
    window.location.reload();
})
bg2.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';

    // add active class
    bg2.classList.add('active');
    // remove active class from the others
    bg1.classList.remove('active');
    bg3.classList.remove('active');
    changeBG();
})
bg3.addEventListener('click', () => {
    darkColorLightness = '95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';

    // add active class
    bg3.classList.add('active');
    // remove active class from the others
    bg2.classList.remove('active');
    bg1.classList.remove('active');
    changeBG();
})