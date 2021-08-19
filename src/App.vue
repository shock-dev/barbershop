<template>
  <div id="app" class="app">
    <Header @openModal="openModal" />
    <main :class="$route.path === '/' ? 'main' : 'page'">
      <div class="container">
        <router-view/>
      </div>
    </main>
    <Footer/>

    <Overlay :isOpen="isModalOpen">
      <Modal
        title="Личный кабинет"
        text="Введите пожалуйста свой логин и пароль"
        :isOpen="isModalOpen"
        @onClose="closeModal"
      >
        <form @submit.prevent>
          <Field
            placeholder="логин"
            aria="логин"
            icon="login"
          />
          <Field
            placeholder="Пароль"
            aria="пароль"
            icon="password"
          />
          <div class="additional">
            <Checkbox text="Запомните меня!" />
            <router-link class="forgot-password" to="#">Я забыл пароль!</router-link>
          </div>
          <Button full>
            Войти
          </Button>
        </form>
      </Modal>
    </Overlay>
  </div>
</template>

<script>
import { allowScroll, stopScroll } from '@/utils/scroll'

// Components
import Header from '@/components/app/Header'
import Footer from '@/components/app/Footer'
import Overlay from '@/components/app/Overlay'
import Modal from '@/components/app/Modal/Modal'
import Field from '@/components/app/Modal/Field'
import Checkbox from '@/components/app/Checkbox'
import Button from '@/components/app/Button'

export default {
  components: {
    Modal,
    Overlay,
    Header,
    Footer,
    Field,
    Checkbox,
    Button
  },
  data() {
    return {
      isModalOpen: false
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
      stopScroll()
    },
    closeModal() {
      this.isModalOpen = false
      allowScroll()
    }
  }
}
</script>

<style lang="scss">
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main {
  background-image: url('~@/assets/img/main-bg.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;
}

.page {
  background-image: url('~@/assets/img/page-bg.jpg');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  .container {
    max-width: 970px;
  }
}


.additional {
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
}

.forgot-password {
  display: inline-block;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 4px;
    width: 100%;
    height: 1px;
    background-color: #000;
  }
}
</style>
