<template>
  <button class="burger" @click="$emit('click')">
    <span />
    <span />
    <span />
  </button>
</template>

<script>
export default {
  name: 'Burger'
}
</script>

<style lang="scss" scoped>
.burger {
  margin-left: auto;
  width: 40px;
  height: 25px;
  display: none;
  flex-direction: column;
  justify-content: space-between;

  span {
    display: block;
    background-color: #fff;
    height: 3px;
    width: 100%;
  }
}

@media (max-width: 570px) {
  .burger {
    display: flex;
  }
}
</style>
