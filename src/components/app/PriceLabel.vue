<template>
  <div class="label">
    <div class="price">{{ price }} ₽</div>
    <Button class="btn" @click="$emit('buy')">
      Купить
    </Button>
  </div>
</template>

<script>
import Button from '@/components/app/Button'

export default {
  name: 'PriceLabel',
  components: { Button },
  props: {
    price: Number
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  width: 100%;
  max-width: 240px;
}

.price {
  flex-grow: 1;
  background-color: #E4E4E4;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
