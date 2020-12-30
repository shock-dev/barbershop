const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__list')
const overlay = document.querySelector('.overlay')

const toggleElements = (action = 'add') => {
    document.body.classList[action]('lock')
    overlay.classList[action]('active')
    menu.classList[action]('active')
}

burger.addEventListener('click', () => { toggleElements() })
overlay.addEventListener('click', () => { toggleElements('remove') })
