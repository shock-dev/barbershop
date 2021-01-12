<template>
  <div class="modal__wrapper" :class="{ active: modal }">
    <div class="modal">
      <button class="modal__close btn-reset" @click="$emit('closeModal')">
        <svg>
          <use href="~@/assets/img/sprite.svg#close-icon"></use>
        </svg>
      </button>
      <div class="modal__title">ЛИЧНЫЙ КАБИНЕТ</div>
      <p class="modal__text">Введите пожалуйста свой логин и пароль</p>
      <form class="modal__form">
        <div class="modal__field-wrapper login">
          <input class="modal__field" type="text" placeholder="ЛОГИН" aria-label="логин">
        </div>
        <div class="modal__field-wrapper password">
          <input class="modal__field" type="text" placeholder="ПАРОЛЬ" aria-label="пароль">
        </div>
        <div class="modal__additional">
          <label class="modal__label">
            <input class="modal__checkbox-real" type="checkbox" checked>
            <span class="modal__checkbox-fake"></span>
            <span class="modal__checkbox-text">Запомните меня</span>
          </label>
          <router-link class="modal__forgot-password" to="#">Я ЗАБЫЛ ПАРОЛЬ!</router-link>
        </div>
        <button class="btn btn-reset btn-full">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "bsModalLogin",
  props: {
    modal: {
      type: Boolean,
      default: false
    }
  }
}
</script>
