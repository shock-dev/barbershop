<template>
  <nav class="nav">
    <ul
      class="list"
      :class="{ active: isOpen }"
    >
      <li
        class="cancel"
        @click="$emit('closeBurger')"
      >
        <button></button>
      </li>
      <li
        v-for="(link, index) in list"
        :key="index"
        class="item"
      >
        <router-link
          class="link"
          active-class="active"
          :to="link.url"
          @click.native="$emit('closeBurger')"
        >
          {{ link.title }}
        </router-link>
      </li>
      <li class="item">
        <button class="btn" @click="$emit('onMobileLogin')">
          Вход
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Menu',
  props: {
    list: Array,
    isOpen: Boolean
  }
}
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
}

.list {
  width: 100%;
  display: flex;
  position: relative;
}

.link {
  position: relative;
  box-sizing: content-box;
  font-size: 16px;
  line-height: 20px;
  padding: 20px;
  transition: background-color .2s;
  outline: none;

  &.active:after {
    content: '';
    position: absolute;
    height: 3px;
    background-color: #fff;
    bottom: 0;
    left: 0;
    right: 0;
  }

  &:hover,
  &:focus {
    background-color: rgba(#fff, .1);
  }
}

.btn {
  display: none;
}

@media (max-width: 570px) {
  .btn {
    padding: 20px;
    display: block;
    font-size: 16px;
    line-height: 20px;
  }

  .list {
    top: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    max-width: 400px;
    width: 100%;
    z-index: 100;
    background-color: #000;
    color: #fff;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 60px;
    transform: translateX(100%);
    transition: transform .3s;

    &.active {
      transform: translateX(0);
    }
  }

  .item {
    display: flex;
    width: 100%;
    text-align: center;
  }

  .link {
    width: 100%;
    border-bottom: 1px solid #3b3a3a;
  }

  .cancel {
    display: block;
    position: absolute;
    top: 25px;
    right: 25px;
    width: 40px !important;
    height: 40px;

    button {
      width: 100%;
      height: 100%;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-50%, -50%);
        height: 3px;
        width: 100%;
        background-color: #fff;
      }

      &:before {
        transform: rotate(45deg);
      }

      &:after {
        transform: rotate(-45deg);
      }
    }
  }

  .btn {
    display: block;
    width: 100%;
  }
}

@media (max-width: 530px) {
  .list {
    max-width: 100%;
  }
}

@media (max-width: 500px) {
  .list {
    padding: 20px;
  }
}
</style>
