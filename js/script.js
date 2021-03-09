const simple = document.querySelector('#simple');
const speedy = document.querySelector('#speedy');
const easy = document.querySelector('#easy');

const tab1 = document.querySelector('#tab1');
const tab2 = document.querySelector('#tab2');
const tab3 = document.querySelector('#tab3');

const ftext1 = document.querySelector('.ftext1')
const ftext2 = document.querySelector('.ftext2')
const ftext3 = document.querySelector('.ftext3')

simple.addEventListener('click', (e) => {
    e.preventDefault();

    simple.classList.add('active');
    speedy.classList.remove('active');
    easy.classList.remove('active');

    tab1.style.opacity = 1;
    ftext1.style.opacity = 1;

    tab2.style.opacity = 0;
    ftext2.style.opacity = 0;

    tab3.style.opacity = 0;
    ftext3.style.opacity = 0;
})

speedy.addEventListener('click', (e) => {
    e.preventDefault();

    speedy.classList.add('active');
    simple.classList.remove('active');
    easy.classList.remove('active');

    tab1.style.opacity = 0;
    ftext1.style.opacity = 0;

    tab2.style.opacity = 1;
    ftext2.style.opacity = 1;

    tab3.style.opacity = 0;
    ftext3.style.opacity = 0;
})

easy.addEventListener('click', (e) => {
    e.preventDefault();

    easy.classList.add('active');
    speedy.classList.remove('active');
    simple.classList.remove('active');

    tab1.style.opacity = 0;
    ftext1.style.opacity = 0;

    tab2.style.opacity = 0;
    ftext2.style.opacity = 0;

    tab3.style.opacity = 1;
    ftext3.style.opacity = 1;
})

const fright = document.querySelector('#first-faq #right')
const fdown = document.querySelector('#first-faq #down')
const sright = document.querySelector('#second-faq #right')
const sdown = document.querySelector('#second-faq #down')
const thright = document.querySelector('#third-faq #right')
const thdown = document.querySelector('#third-faq #down')
const foright = document.querySelector('#fourth-faq #right')
const fodown = document.querySelector('#fourth-faq #down')
const first = document.querySelector('#first-faq');
const second = document.querySelector('#second-faq');
const third = document.querySelector('#third-faq');
const fourth = document.querySelector('#fourth-faq');
const firstPara = document.querySelector('#first-para')
const secondPara = document.querySelector('#second-para')
const thirdPara = document.querySelector('#third-para')
const fourthPara = document.querySelector('#fourth-para')

first.addEventListener('click', () => {
    firstPara.classList.toggle('display');
    // secondPara.classList.remove('display');
    // thirdPara.classList.remove('display');
    // fourthPara.classList.remove('display');
    fright.classList.toggle('down');
    fdown.classList.toggle('up');
})

second.addEventListener('click', () => {
    secondPara.classList.toggle('display');
    // firstPara.classList.remove('display');
    // thirdPara.classList.remove('display');
    // fourthPara.classList.remove('display');
    sright.classList.toggle('down');
    sdown.classList.toggle('up');
})

third.addEventListener('click', () => {
    thirdPara.classList.toggle('display');
    // firstPara.classList.remove('display');
    // secondPara.classList.remove('display');
    // fourthPara.classList.remove('display');
    thright.classList.toggle('down');
    thdown.classList.toggle('up');
})

fourth.addEventListener('click', () => {
    fourthPara.classList.toggle('display');
    //  
    foright.classList.toggle('down');
    fodown.classList.toggle('up');
})

const bars = document.querySelector('#bars')
const times = document.querySelector('#times')
const mobileMenu = document.querySelector('.mobile-menu-wrapper')

bars.addEventListener('click', () => {
    mobileMenu.classList.toggle('show')
})

