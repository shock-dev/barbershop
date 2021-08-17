<template>
  <div>
    <p class="main-section__text text">{{ body }}</p>
    <time class="date" datetime="2021-01-18">{{ date }}</time>
  </div>
</template>

<script>

export default {
  name: 'NewsItem',
  props: {
    body: String,
    date: String
  }
}
</script>

<style lang="scss" scoped>
.text {
  margin-bottom: 15px;
}

.date {
  display: block;
  margin-bottom: 20px;
}
</style>
