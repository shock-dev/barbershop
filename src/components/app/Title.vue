<template>
  <h1 v-if="type === 1">
    <slot />
  </h1>
  <h2 v-else-if="type === 2">
    <slot />
  </h2>
  <h3 v-else>
    <slot />
  </h3>
</template>

<script>
export default {
  name: 'Title',
  props: {
    type: Number
  }
}
</script>

<style lang="scss" scoped>
h1, h2, h3 {
  font-size: 30px;
  line-height: 42px;
}
</style>
