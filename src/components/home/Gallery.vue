<template>
  <section class="main-section gallery">
    <h3 class="main-section__title">ФОТОГАЛЕРЕЯ</h3>
    <hooper>
      <slide v-for="(item, index) in list" :key="index">
        <img :src="require(`@/assets/img/gallery/${item.file}`)" alt="">
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
  name: 'Gallery',
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },
  props: {
    list: Array
  }
}
</script>
