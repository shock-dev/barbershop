<template>
  <header class="header">
    <div class="container" style="max-width: 1010px">
      <div class="inner">
        <router-link
          class="logo"
          :to="{ name: 'Home' }"
        >
          <Logo />
        </router-link>

        <Overlay
          :isOpen="isOpenBurgerMenu"
          @click="closeBurgerMenu"
        />
        <Menu
          :list="links"
          :isOpen="isOpenBurgerMenu"
          @closeBurger="closeBurgerMenu"
          @onMobileLogin="openModalFromMobile"
        />

        <button
          class="login"
          @click="$emit('openModal')"
        >
          <svg class="login__icon">
            <use href="~@/assets/img/[icons].svg#login" />
          </svg>
          Вход
        </button>
        <Burger @click="openBurgerMenu" />
      </div>
    </div>
  </header>
</template>

<script>
import { allowScroll, stopScroll } from '@/utils/scroll'

// Resources
import { menu } from '@/resources/menu'

// Components
import Logo from '@/components/app/Logo'
import Burger from '@/components/app/Burger'
import Menu from '@/components/app/Menu'
import Overlay from '@/components/app/Overlay';

export default {
  name: 'Header',
  components: { Overlay, Menu, Burger, Logo },
  data() {
    return {
      isOpenBurgerMenu: false,
      links: menu
    }
  },
  methods: {
    openBurgerMenu() {
      this.isOpenBurgerMenu = true
      stopScroll()
    },
    closeBurgerMenu() {
      this.isOpenBurgerMenu = false
      allowScroll()
    },
    openModalFromMobile() {
      this.isOpenBurgerMenu = false
      stopScroll()
      this.$emit('openModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  background-color: #000;
  color: #fff;
}

.inner {
  display: flex;
  align-items: center;
  min-height: 59px;
}

.logo {
  display: flex;
  align-self: center;
  margin-right: 20px;
  padding-top: 5px;
}

.nav {
  display: flex;
}

.login {
  margin-left: auto;
  display: flex;
  align-items: center;
  padding: 20px;
  transition: background-color .2s;
  font-size: 16px;
  line-height: 20px;
  outline: none;

  &__icon {
    width: 14px;
    height: 14px;
    margin-right: 16px;
    fill: rgba(#fff, .1);
    transition: fill .2s;
  }

  &:hover,
  &:focus {
    background-color: rgba(#fff, .1);

    .login__icon {
      fill: rgba(#fff, 1);
    }
  }
}

@media (max-width: 570px) {
  .login {
    display: none;
  }
}
</style>
