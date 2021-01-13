<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nav class="header__nav menu">
          <router-link class="header__logo" :to="{ name: 'Home' }">
            <img src="~@/assets/img/logo.png" alt="Logo">
          </router-link>
          <ul class="menu__list" :class="{ active: burgerMenu }">
            <li class="menu__cancel">
              <button class="btn-reset" @click="hideAll"></button>
            </li>
            <li class="menu__item" @click="hideAll">
              <router-link to="#" class="menu__link">ИНФОРМАЦИЯ</router-link>
            </li>
            <li class="menu__item" @click="hideAll">
              <router-link to="#" class="menu__link">НОВОСТИ</router-link>
            </li>
            <li class="menu__item" @click="hideAll">
              <router-link to="/price" class="menu__link" active-class="active">ПРАЙС-ЛИСТ</router-link>
            </li>
            <li class="menu__item" @click="hideAll">
              <router-link to="/shop" class="menu__link" active-class="active">МАГАЗИН</router-link>
            </li>
            <li class="menu__item" @click="hideAll">
              <router-link to="#" class="menu__link">КОНТАКТЫ</router-link>
            </li>
            <li class="menu__item">
              <button class="header__btn btn-reset menu__item--btn" @click="openBurgerMenuFromMobile">
                Вход
              </button>
            </li>
          </ul>
        </nav>
        <button class="header__btn btn-reset" @click="openModal">
          <svg class="header__btn-icon">
            <use href="~@/assets/img/sprite.svg#login"></use>
          </svg>
          Вход
        </button>
        <button class="burger btn-reset" @click="openBurgerMenu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "bsHeader",
  computed: {
    ...mapGetters(['burgerMenu'])
  },
  methods: {
    ...mapMutations([
      'toggleOverlay',
      'toggleModal',
      'toggleBurgerMenu',
      'hideAll'
    ]),
    openModal() {
      document.body.classList.add('lock')
      this.toggleOverlay()
      this.toggleModal()
    },
    openBurgerMenu() {
      document.body.classList.add('lock')
      this.toggleOverlay()
      this.toggleBurgerMenu()
    },
    openBurgerMenuFromMobile() {
      this.hideAll()

      setTimeout(() => {
        document.body.classList.add('lock')
        this.toggleOverlay()
        this.toggleModal()
      }, 300)
    }
  }
}
</script>
