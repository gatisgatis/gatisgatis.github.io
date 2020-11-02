const hamburger = document.querySelector(".js-hambur")
const navItems = document.querySelectorAll('.js-nav__item')
const navWrapper = document.querySelector('.js-nav__wrapper')

const hamburgerClickHandler = () => {
    hamburger.classList.toggle('active') 
    navWrapper.classList.toggle('active')
}

hamburger.addEventListener('click', hamburgerClickHandler)

navItems.forEach(item => {
    item.addEventListener('click', hamburgerClickHandler)
})

navWrapper.addEventListener('click', (e)=> {
    if( e.target === navWrapper){
        hamburgerClickHandler()
    }
})

const clickHandler = (event) => {
    event.preventDefault() // Atceļ defaulto darbību. Šajā gadījumā atceļ to, ka nospiežot uz a tagad tas aizved tur, kas rakstīts href'ā
    const href = event.target.getAttribute("href") // Paņem no tā elementa, kurš tika uzklikots to, kas ierakstīt href atribūtā
    const offsetTop = document.querySelector(href).offsetTop // Iegūstam attālumu no lapas augšas līdz vietai, kur atrodas elements, kuram ir tieši tāds href, kā padots
    scroll({
        top:offsetTop -50,
        behavior: "smooth"
    })
}

const links = document.querySelectorAll("a");

links.forEach(link => {
link.addEventListener('click', clickHandler)
})


const goUpBtn = document.querySelector('.arrow-up')

window.onscroll = () => {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        goUpBtn.style.display = "block"
    } else {
        goUpBtn.style.display = "none"
    }
}

const goToTop = () => {
    window.scrollTo({top:0, behavior:'smooth'})
}

const signUpBack = document.querySelector('.js-sign-up__background')

const signUpClickHandler = () => {
    signUpBack.classList.toggle('active')
    window.scrollTo({top:0, behavior:'smooth'})
}

const logo = document.querySelector('.header__logo-wrapper')

const addAnimation = () => {
    logo.classList.add('animate__heartBeat')
    setTimeout( () => {
        logo.classList.remove('animate__heartBeat')
    },1000)
}

const subscribeBtn = document.querySelector('.js-button--subscribe')
const email = document.querySelector('.js-subscribe__input')
const popUpCloseBtn = document.querySelector('.subscribe__pop-up-close-icon')
const popUpBackground = document.querySelector('.subscribe--overlay')
const popUpWindow = document.querySelector('.subsribe__pop-up')
let outputText = document.querySelector('.header-2--pop-up')


subscribeBtn.addEventListener('click', () => {
    popUpWindow.classList.add('active')
    popUpBackground.classList.add('active')
    outputText.innerHTML = `Congratulations! You just subscribed using email: </br> ${email.value}`
})

popUpCloseBtn.addEventListener('click', () => {
    popUpWindow.classList.remove('active')
    popUpBackground.classList.remove('active')
    email.value = ''
})
