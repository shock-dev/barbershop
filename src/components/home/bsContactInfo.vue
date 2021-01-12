<template>
  <section class="main-section contact-info">
    <h3 class="main-section__title contact-info__title">КОНТАКТНАЯ ИНФОРМАЦИЯ</h3>
    <ul class="contact-info__list">
      <li>БАРБЕРШОП «БОРОДИНСКИЙ»</li>
      <li>АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, Б. КОНЮШЕННАЯ, Д. 19/8</li>
      <li>ТЕЛЕФОН: +7 (495) 666-02-66</li>
    </ul>
    <ul class="contact-info__list">
      <li>БАРБЕРШОП «БОРОДИНСКИЙ»</li>
      <li>АДРЕС: Г. САНКТ-ПЕТЕРБУРГ, Б. КОНЮШЕННАЯ, Д. 19/8</li>
      <li>ТЕЛЕФОН: +7 (495) 666-02-66</li>
    </ul>
    <div class="main-section__buttons contact-info__buttons">
      <button id="openMapBtn" class="btn btn-reset" @click="openMap">КАК ПРОЕХАТЬ</button>
      <button class="btn btn-reset">ОБРАТНАЯ СВЯЗЬ</button>
    </div>
  </section>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "bsContactInfo",
  methods: {
    ...mapMutations(['toggleMap', 'toggleOverlay']),
    openMap() {
      this.toggleOverlay()
      this.toggleMap()
    }
  }
}
</script>
