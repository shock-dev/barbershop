<template>
  <div class="item">
    <div class="title">{{ title }}</div>
    <p class="text">{{ body }}</p>
  </div>
</template>

<script>
export default {
  name: 'AdvantagesItem',
  props: {
    title: String,
    body: String
  }
}
</script>

<style lang="scss" scoped>
.item {
  margin-bottom: 80px;
}

.title {
  font-size: 30px;
  line-height: 42px;
  padding-bottom: 45px;
  margin-bottom: 15px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    background-color: #F7F4F1;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    transform: rotate(45deg);
  }
}

.text {
  padding: 0 15px;
}

@media (max-width: 840px) {
  .item {
    margin-bottom: 25px;

    &:last-child {
      margin-bottom: 50px;
    }
  }

  .text {
    max-width: 600px;
  }
}
</style>
