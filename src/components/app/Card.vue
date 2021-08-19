<template>
  <div class="card">
    <router-link class="pic" to="/product">
      <img :src="require(`@/assets/img/products/${file}`)" :alt="title">
    </router-link>
    <h3 class="title">{{ title }}</h3>
    <div class="footer">
      <div class="price">{{ price }} ₽</div>
      <Button class="btn">
        Купить
      </Button>
    </div>
  </div>
</template>

<script>
import Button from '@/components/app/Button'

export default {
  name: 'Card',
  components: { Button },
  props: {
    title: String,
    price: Number,
    file: String
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: #fff;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px #888;
  width: calc(100% / 12 * 4 - 20px);
  margin: 10px;
}

.pic img {
  width: 100%;
}

.title {
  font-size: 14px;
  line-height: 18px;
  padding: 12px 16px 0;
}

.footer {
  padding: 16px;
  display: flex;
  margin-top: auto;
}

.price {
  flex-grow: 1;
  background-color: #E4E4E4;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  padding: 15px 20px;
}

@media (max-width: 950px) {
  .card {
    width: calc(100% / 12 * 6 - 20px);
    margin: 10px;
  }
}

@media (max-width: 500px) {
  .card {
    width: calc(100% - 20px);
    margin: 10px;
  }
}
</style>
