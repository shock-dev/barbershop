const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__list')
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const loginButtonsFromMenu = document.querySelectorAll('.header__btn')
const closeModalButton = document.querySelector('.modal__close')

const toggleElements = (action = 'add') => {
    document.body.classList[action]('lock')
    overlay.classList[action]('active')
    menu.classList[action]('active')
}

burger.addEventListener('click', () => { toggleElements() })
overlay.addEventListener('click', () => { toggleElements('remove') })

loginButtonsFromMenu.forEach(item => {
    item.addEventListener('click', () => {
        document.body.classList.add('lock')
        overlay.classList.add('active')
        modal.classList.add('active')
    })
})

closeModalButton.addEventListener('click', () => {
    document.body.classList.remove('lock')
    overlay.classList.remove('active')
    modal.classList.remove('active')
})
