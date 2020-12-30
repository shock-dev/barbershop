const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu__list')
const overlay = document.querySelector('.overlay')

const toggleElements = (action = 'add', className = 'active') => {
    overlay.classList[action](className)
    menu.classList[action](className)
}

burger.addEventListener('click', () => { toggleElements() })
overlay.addEventListener('click', () => { toggleElements('remove') })
