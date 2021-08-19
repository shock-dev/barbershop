<template>
  <div>
    <Intro />
    <Advantages :list="advantages" />
    <div class="main-section-wrapper bottom-line">
      <News :list="news" />
      <Gallery :list="gallery" />
    </div>
    <div class="main-section-wrapper">
      <Contacts
        :list="contacts"
        @openMap="openMap"
      />
      <Subscribe />
    </div>
    <Overlay
      :isOpen="isMapOpen"
      @click="closeMap"
    >
      <Map :isOpen="isMapOpen" />
    </Overlay>
  </div>
</template>

<script>
import { setMeta } from '@/settings/meta'

// Components
import Intro from '@/components/home/Intro'
import Advantages from '@/components/home/Advantages'
import News from '@/components/home/News'
import Gallery from '@/components/home/Gallery'
import Contacts from '@/components/home/Contacts'
import Subscribe from '@/components/home/Subscribe'

// Resources
import { advantages } from '@/resources/advantages'
import { gallery } from '@/resources/gallery'
import { news } from '@/resources/news'
import { contacts } from '@/resources/contacts'
import Overlay from '@/components/app/Overlay';
import Map from '@/components/home/Map';

export default {
  name: 'Home',
  metaInfo: setMeta('Главная'),
  components: {
    Map,
    Overlay,
    Subscribe,
    Contacts,
    Gallery,
    News,
    Advantages,
    Intro
  },
  data() {
    return {
      isMapOpen: false,
      advantages,
      gallery,
      news,
      contacts
    }
  },
  methods: {
    openMap() {
      this.isMapOpen = true
      document.body.style.overflow = 'hidden'
    },
    closeMap() {
      this.isMapOpen = false
      document.body.style.overflow = 'auto'
    }
  }
}
</script>
