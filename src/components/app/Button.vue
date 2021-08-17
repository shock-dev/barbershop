<template>
  <button
    class="btn"
    :class="generateClasses"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    full: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    generateClasses() {
      return {
        full: this.full
      }
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  background-color: #000;
  padding: 14px 34px;
  color: #fff;
  transition: background-color .2s;
  outline: none;

  &:hover,
  &:focus {
    background-color: #663D15;
  }

  &.full {
    width: 100%;
  }
}
</style>
