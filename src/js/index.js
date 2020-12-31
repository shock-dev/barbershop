const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__list')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal__wrapper')
const loginButtonsFromMenu = document.querySelectorAll('.header__btn')
const closeModalButton = document.querySelector('.modal__close')

const isScrollingAvailable = (q = true) => {
    document.body.classList[q ? 'add' : 'remove']('lock')
}

