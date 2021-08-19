<template>
  <section class="main-section subscribe">
    <Title :type="3" class="title">Записаться</Title>
    <p class="subscribe__text">Укажите желаемую дату и время и мы свяжемся с вами для подтверждения брони</p>
    <form class="subscribe__form">
      <div class="subscribe__form-inner">
        <label class="subscribe__label">
          <span class="subscribe__name">Дата</span>
          <input id="date-mask" class="subscribe__field" type="text" v-facade="'##.##.####'" placeholder="08.10.2017">
        </label>
        <label class="subscribe__label">
          <span class="subscribe__name">Время</span>
          <input class="subscribe__field" type="text" v-facade="'##:##'" placeholder="10:00">
        </label>
        <label class="subscribe__label">
          <span class="subscribe__name">Ваше имя</span>
          <input class="subscribe__field" type="text" placeholder="Борода">
        </label>
        <label class="subscribe__label">
          <span class="subscribe__name">Телефон</span>
          <input id="phone-mask" class="subscribe__field" type="text" v-facade="'+7 ### ###-##-##'" placeholder="+7 123 456-78-90">
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
import Button from '@/components/app/Button';
import Title from '@/components/app/Title';

export default {
  name: 'Subscribe',
  components: { Title, Button },
  directives: { facade }
}
</script>
