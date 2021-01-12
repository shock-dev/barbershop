<template>
  <main class="page">
    <div class="container">
      <h2 class="page__title">набор для путешествий «Baxter of California»</h2>

      <bs-breadcrumbs/>

      <div class="product__wrapper">
        <div class="product__images">
          <div class="product__images-big">
            <img src="~@/assets/img/product-main-img.png" alt="">
          </div>
          <div class="product__images-min">
            <div class="product__images-min__item">
              <img src="~@/assets/img/product-1.jpg" alt="">
            </div>
            <div class="product__images-min__item">
              <img src="~@/assets/img/product-2.jpg" alt="">
            </div>
            <div class="product__images-min__item">
              <img src="~@/assets/img/product-3.jpg" alt="">
            </div>
          </div>
        </div>
        <div class="product__info">
          <div class="product__info-head">
            <div class="product__info-head__available">Есть в наличии</div>
            <div class="product__info-head__art">Артикул: dexter-ae</div>
          </div>
          <p class="product__info-text">
            Travel Kit – необходимый аксессуар во время любого
            путешествия. В аккуратной кожаной сумке находится все, что нужно для бритья и ухода за кожей во время рабочей поездки
            или отдыха: средство для умывания, увлажняющий крем, крем
            для бритья, крем после бритья, шампунь. Набор также может
            стать отличным подарком.
          </p>
          <div class="product__info-buy">
            <div class="product__info-buy__price">2 900 ₽</div>
            <button class="btn btn-reset">КУПИТЬ</button>
          </div>
          <p class="product__info-list-title">В набор входят:</p>
          <ul class="product__info-list">
            <li class="product__info-list__item">Средство для умывания (50 мл)</li>
            <li class="product__info-list__item">Увлажняющий крем (50 мл)</li>
            <li class="product__info-list__item">Крем для бритья (50 мл)</li>
            <li class="product__info-list__item">Крем после бритья, шампунь (50 мл)</li>
            <li class="product__info-list__item">Удобная кожаная косметичка</li>
          </ul>

        </div>
      </div>
    </div>
  </main>
</template>

<script>
import BsBreadcrumbs from "@/components/app/bsBreadcrumbs";

export default {
  name: "Product",
  components: {
    BsBreadcrumbs
  }
}
</script>
