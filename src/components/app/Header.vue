<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <router-link class="header__logo" :to="{ name: 'Home' }">
          <Logo />
        </router-link>
        <nav class="header__nav menu">
          <ul class="menu__list" :class="{ active: burgerMenu }">
            <li class="menu__cancel">
              <button class="btn-reset" @click="hideAll"></button>
            </li>
            <li
              v-for="(link, index) in links"
              :key="index"
              class="menu__item"
              @click="hideAll"
            >
              <router-link
                class="menu__link"
                active-class="active"
                :to="link.url"
              >
                {{ link.title }}
              </router-link>
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
            <use href="~@/assets/img/[icons].svg#login"></use>
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
import { menu } from '@/resources/menu'
import Logo from '@/components/app/Logo'

export default {
  name: "Header",
  components: { Logo },
  data() {
    return {
      links: menu
    }
  },
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
