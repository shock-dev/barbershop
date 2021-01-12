<template>
  <main class="main">
    <div class="container">
      <bs-intro/>
      <bs-advantages/>
      <div class="main-section-wrapper bottom-line">
        <bs-news/>
        <bs-gallery/>
      </div>
      <div class="main-section-wrapper">
        <bs-contact-info/>
        <bs-subscribe/>
      </div>
    </div>
  </main>
</template>

<script>
import BsIntro from "@/components/home/bsIntro";
import BsAdvantages from "@/components/home/bsAdvantages";
import BsNews from "@/components/home/bsNews";
import BsGallery from "@/components/home/bsGallery";
import BsContactInfo from "@/components/home/bsContactInfo";
import BsSubscribe from "@/components/home/bsSubscribe";

export default {
  name: 'Home',
  components: {
    BsSubscribe,
    BsContactInfo,
    BsGallery,
    BsNews,
    BsAdvantages,
    BsIntro
  }
}
</script>
