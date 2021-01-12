<template>
  <section class="main-section gallery">
    <h3 class="main-section__title gallery__title">ФОТОГАЛЕРЕЯ</h3>

    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="~@/assets/img/gallery-img.jpg" alt="">
        </div>
      </div>
      <div class="swiper-buttons">
        <button class="btn btn-reset swiper-button-prev">НАЗАД</button>
        <button class="btn btn-reset swiper-button-next">ВПЕРЕД</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "bsGallery"
}
</script>
