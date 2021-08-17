<template>
  <div class="catalog__item card">
    <router-link class="card__img" to="/product">
      <img :src="require(`@/assets/img/products/${file}`)" :alt="title">
    </router-link>
    <h3 class="card__title">{{ title }}</h3>
    <div class="card__footer">
      <div class="card__price">{{ price }} ₽</div>
      <Button class="card__btn">
        Купить
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/app/Button'

export default {
  name: "Card",
  components: { Button },
  props: {
    title: String,
    price: Number,
    file: String
  }
}
</script>
