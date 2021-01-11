import Swiper, { Navigation } from "swiper"
import IMask from 'imask';

Swiper.use([Navigation])

const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__list')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal__wrapper')
const loginButtonsFromMenu = document.querySelectorAll('.header__btn')
const closeModalButton = document.querySelector('.modal__close')
const openMapButton = document.querySelector('#openMapBtn')
const map = document.querySelector('.map')

const mySwiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

const phoneMask = IMask(
    document.getElementById('phone-mask'),
    {
        mask: '+{7}(000)000-00-00'
    }
);

const dateMask = IMask(
    document.getElementById('date-mask'),
    {
        mask: Date,
        min: new Date(1990, 0, 1),
        max: new Date(2020, 0, 1),
        lazy: true
    });

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
