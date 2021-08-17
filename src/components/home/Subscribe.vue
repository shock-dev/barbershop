<template>
  <section class="main-section subscribe">
    <h3 class="main-section__title subscribe__title">ЗАПИСАТЬСЯ</h3>
    <p class="subscribe__text">УКАЖИТЕ ЖЕЛАЕМУЮ ДАТУ И ВРЕМЯ И МЫ СВЯЖЕМСЯ С ВАМИ ДЛЯ ПОДТВЕРЖДЕНИЯ БРОНИ</p>
    <form class="subscribe__form">
      <div class="subscribe__form-inner">
        <label class="subscribe__label">
          <span class="subscribe__name">ДАТА</span>
          <input id="date-mask" class="subscribe__field" type="text" v-facade="'##.##.####'" placeholder="08.10.2017">
        </label>
        <label class="subscribe__label">
          <span class="subscribe__name">ВРЕМЯ</span>
          <input class="subscribe__field" type="text" v-facade="'##:##'" placeholder="10:00">
        </label>
        <label class="subscribe__label">
          <span class="subscribe__name">ВАШЕ ИМЯ</span>
          <input class="subscribe__field" type="text" placeholder="Борода">
        </label>
        <label class="subscribe__label">
          <span class="subscribe__name">ТЕЛЕФОН</span>
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

export default {
  name: "Subscribe",
  components: { Button },
  directives: { facade }
}
</script>
