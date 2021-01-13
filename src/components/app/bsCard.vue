<template>
  <div class="catalog__item card">
    <router-link class="card__img" to="/product">
      <img :src="imageUrl" :alt="title">
    </router-link>
    <h3 class="card__title">{{ title }}</h3>
    <div class="card__footer">
      <div class="card__price">2 900 ₽</div>
      <button class="btn btn-reset card__btn">Купить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "bsCard",
  props: {
    title: String,
    price: Number,
    imageUrl: String
  }
}
</script>
