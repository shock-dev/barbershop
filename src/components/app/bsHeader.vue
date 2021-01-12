<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nav class="header__nav menu">
          <router-link class="header__logo" :to="{ name: 'Home' }">
            <img src="~@/assets/img/logo.png" alt="Logo">
          </router-link>
          <ul class="menu__list">
            <li class="menu__item">
              <router-link to="#" class="menu__link" active-class="active">ИНФОРМАЦИЯ</router-link>
            </li>
            <li class="menu__item">
              <router-link to="#" class="menu__link" active-class="active">НОВОСТИ</router-link>
            </li>
            <li class="menu__item">
              <router-link to="/price" class="menu__link" active-class="active">ПРАЙС-ЛИСТ</router-link>
            </li>
            <li class="menu__item">
              <router-link to="/shop" class="menu__link" active-class="active">МАГАЗИН</router-link>
            </li>
            <li class="menu__item">
              <router-link to="#" class="menu__link" active-class="active">КОНТАКТЫ</router-link>
            </li>
            <li class="menu__item">
              <button class="header__btn btn-reset menu__item--btn">
                Вход
              </button>
            </li>
          </ul>
        </nav>
        <button class="header__btn btn-reset">
          <svg class="header__btn-icon">
            <use href="~@/assets/img/sprite.svg#login"></use>
          </svg>
          Вход
        </button>
        <button class="burger btn-reset">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
name: "bsHeader"
}
</script>
