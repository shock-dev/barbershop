<template>
  <section class="main-section gallery">
    <Title :type="3" class="title">Фотогалерея</Title>
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
import Title from '@/components/app/Title'

export default {
  name: 'Gallery',
  components: {
    Title,
    Hooper,
    Slide,
    HooperNavigation
  },
  props: {
    list: Array
  }
}
</script>
