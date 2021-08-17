<template>
  <div>
    <Intro />
    <Advantages :list="advantages" />
    <div class="main-section-wrapper bottom-line">
      <News :list="news" />
      <Gallery :list="gallery" />
    </div>
    <div class="main-section-wrapper">
      <Contacts :list="contacts" />
      <Subscribe />
    </div>
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

export default {
  name: 'Home',
  metaInfo: setMeta('Главная'),
  components: {
    Subscribe,
    Contacts,
    Gallery,
    News,
    Advantages,
    Intro
  },
  data() {
    return {
      advantages,
      gallery,
      news,
      contacts
    }
  }
}
</script>
