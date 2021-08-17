<template>
  <section class="main-section gallery">
    <h3 class="main-section__title gallery__title">ФОТОГАЛЕРЕЯ</h3>
    <hooper>
      <slide>
        <img src="~@/assets/img/gallery-img.jpg" alt="">
      </slide>
      <slide>
        <img src="~@/assets/img/gallery-img.jpg" alt="">
      </slide>
      <slide>
        <img src="~@/assets/img/gallery-img.jpg" alt="">
      </slide>
      <hooper-navigation slot="hooper-addons"></hooper-navigation>
    </hooper>
  </section>
</template>

<script>
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper';
import 'hooper/dist/hooper.css';

export default {
  name: "bsGallery",
  components: {
    Hooper,
    Slide,
    HooperNavigation
  }
}
</script>
