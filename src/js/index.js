import Swiper from "swiper";

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__list')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal__wrapper')
const loginButtonsFromMenu = document.querySelectorAll('.header__btn')
const closeModalButton = document.querySelector('.modal__close')
const openMapButton = document.querySelector('#openMapBtn')
const map = document.querySelector('.map')

const mySwiper = new Swiper('.swiper-container')

const isScrollingAvailable = (q = true) => {
    document.body.classList[q ? 'add' : 'remove']('lock')
}

const toggleElements = (elements, action = 'add') => {
    if ( Array.isArray(elements) ) {
        elements.forEach(item => {
            item.classList[action]('active')
        })
    }
}

burger.addEventListener('click', () => {
    isScrollingAvailable()
    toggleElements([overlay, menu])

    overlay.addEventListener('click', () => {
        toggleElements([overlay, menu], 'remove')
        isScrollingAvailable(false)
    })
})

loginButtonsFromMenu.forEach(item => {
    item.addEventListener('click', () => {
        toggleElements([overlay, menu], 'remove')

        setTimeout(() => {
            toggleElements([overlay, modal])
        }, 300)

        closeModalButton.addEventListener('click', () => {
            toggleElements([overlay, modal], 'remove')
            isScrollingAvailable(false)
        })
    })
})

openMapButton.addEventListener('click', () => {
    isScrollingAvailable()
    toggleElements([overlay, map])

    overlay.addEventListener('click', () => {
        toggleElements([overlay, map], 'remove')
        isScrollingAvailable(false)
    })
})
