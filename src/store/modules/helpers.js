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
            if (state.modal) state.modal = false
            if (state.overlay) state.overlay = false
            if (state.burgerMenu) state.burgerMenu = false
            if (state.map) state.map = false
        }
    },
    getters: {
        modal: ({ modal }) => modal,
        overlay: ({ overlay }) => overlay,
        burgerMenu: ({ burgerMenu }) => burgerMenu,
        map: ({ map }) => map
    }
}
