<template>
  <section class="main-section">
    <Title :type="3" class="title">Записаться</Title>
    <p class="text">Укажите желаемую дату и время и мы свяжемся с вами для подтверждения брони</p>
    <form class="form">
      <div class="form-inner">
        <label class="label">
          <span class="name">Дата</span>
          <input id="date-mask" class="field" type="text" v-facade="'##.##.####'" placeholder="08.10.2017">
        </label>
        <label class="label">
          <span class="name">Время</span>
          <input class="field" type="text" v-facade="'##:##'" placeholder="10:00">
        </label>
        <label class="label">
          <span class="name">Ваше имя</span>
          <input class="field" type="text" placeholder="Борода">
        </label>
        <label class="label">
          <span class="name">Телефон</span>
          <input id="phone-mask" class="field" type="text" v-facade="'+7 ### ###-##-##'" placeholder="+7 123 456-78-90">
        </label>
      </div>
      <Button :style="{ marginTop: '20px' }" full>
        Отправить
      </Button>
    </form>
  </section>
</template>

<script>
import { facade } from 'vue-input-facade'

// Components
import Button from '@/components/app/Button'
import Title from '@/components/app/Title'

export default {
  name: 'Subscribe',
  components: { Title, Button },
  directives: { facade }
}
</script>

<style lang="scss" scoped>
.subscribe {
  padding-right: 80px;
}

.form {
  display: block;
}

.form-inner {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.label {
  margin-top: 10px;
}

.name {
  display: inline-block;
  padding-left: 12px;
}

.field {
  display: block;
  width: 140px;
  height: 43px;
  border: 2px solid #000;
  padding: 0 15px;
  outline: none;
  text-transform: uppercase;

  &:focus {
    border-color: #663D15;
  }

  &::placeholder {
    text-transform: capitalize;
    mix-blend-mode: normal;
    font-family: inherit;
    color: rgba(#000, .7);
  }
}

.btn {
  margin-top: 20px;
}

@media (max-width: 1000px) {
  .field {
    max-width: 180px;
    width: 100%;
  }
}

@media (max-width: 930px) {
  .label {
    width: 48%;
  }

  .name {
    padding-left: 0;
  }

  .field {
    width: 100%;
    max-width: none;
  }
}

@media (max-width: 380px) {
  .label {
    width: 100%;
  }

  .field {
    width: 100%;
    max-width: none;
  }
}
</style>
