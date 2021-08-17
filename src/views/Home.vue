<template>
  <main class="main">
    <div class="container">
      <Intro />
      <Advantages />
      <div class="main-section-wrapper bottom-line">
        <News />
        <Gallery />
      </div>
      <div class="main-section-wrapper">
        <ContactInfo />
        <Subscribe />
      </div>
    </div>
  </main>
</template>

<script>
import Intro from "@/components/home/Intro";
import Advantages from "@/components/home/Advantages";
import News from "@/components/home/News";
import Gallery from "@/components/home/Gallery";
import ContactInfo from "@/components/home/ContactInfo";
import Subscribe from "@/components/home/Subscribe";
import { setMeta } from '@/settings/meta';

export default {
  name: 'Home',
  metaInfo: setMeta('Главная'),
  components: {
    Subscribe,
    ContactInfo,
    Gallery,
    News,
    Advantages,
    Intro
  }
}
</script>
