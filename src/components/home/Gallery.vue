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

<style lang="scss">
.gallery {

  .swiper-container {
    width: 100%;
  }

  .swiper-wrapper {
    height: 200px;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev,
  .swiper-button-next {
    position: static;
    background-color: #000;
    color: #fff;
    left: 0;
  }

  .hooper {
    outline: none;
    height: 280px;
  }

  .hooper-navigation {
    position: absolute;
    bottom: 35px;

    button {
      outline: none;
    }
  }

  .hooper-slide {
    height: 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .hooper-next, .hooper-prev {
    background-color: #000;
    padding: 13px 25px;

    svg {
      display: none;
    }
  }

  .hooper-next {
    right: auto;
    left: 100px;

    &:after {
      content: 'Вперед';
      color: white;
      font-size: 14px;
      text-transform: uppercase;
    }
  }

  .hooper-prev {

    &:after {
      content: 'Назад';
      color: white;
      font-size: 14px;
      text-transform: uppercase;
    }
  }

}
</style>
