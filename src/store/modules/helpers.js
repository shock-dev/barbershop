export default {
    state: {
        modal: false,
        overlay: false,
        burgerMenu: false,
        map: false
    },
    mutations: {
        toggleModal(state) {
            state.modal = !state.modal
        },
        toggleOverlay(state) {
            state.overlay = !state.overlay
        },
        toggleBurgerMenu(state) {
            state.burgerMenu = !state.burgerMenu
        },
        toggleMap(state) {
            state.map = !state.map
        },
        hideAll(state) {
            document.body.classList.remove('lock')
            state.modal = false
            state.overlay = false
            state.burgerMenu = false
            state.map = false
        }
    },
    getters: {
        modal: ({ modal }) => modal,
        overlay: ({ overlay }) => overlay,
        burgerMenu: ({ burgerMenu }) => burgerMenu,
        map: ({ map }) => map
    }
}
