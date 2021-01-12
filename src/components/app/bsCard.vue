<template>
  <div class="catalog__item card">
    <router-link class="card__img" to="#">
      <img src="~@/assets/img/card-img-1.jpg" alt="">
    </router-link>
    <h3 class="card__title">Набор для путешествий «Baxter of California»</h3>
    <div class="card__footer">
      <div class="card__price">2 900 ₽</div>
      <button class="btn btn-reset card__btn">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "bsCard"
}
</script>
