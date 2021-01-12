<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <nav class="header__nav menu">
          <a class="header__logo" href="#">
            <img src="~@/assets/img/logo.png" alt="Logo">
          </a>
          <ul class="menu__list">
            <li class="menu__item"><a href="#" class="menu__link">ИНФОРМАЦИЯ</a></li>
            <li class="menu__item"><a href="#" class="menu__link">НОВОСТИ</a></li>
            <li class="menu__item active"><a href="#" class="menu__link">ПРАЙС-ЛИСТ</a></li>
            <li class="menu__item"><a href="#" class="menu__link">МАГАЗИН</a></li>
            <li class="menu__item"><a href="#" class="menu__link">КОНТАКТЫ</a></li>
            <li class="menu__item">
              <button class="header__btn btn-reset menu__item--btn">
                Вход
              </button>
            </li>
          </ul>
        </nav>
        <button class="header__btn btn-reset">
          <svg class="header__btn-icon">
            <use href="img/sprite.svg#login"></use>
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
