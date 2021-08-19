<template>
  <div
    class="overlay"
    :class="{ active: isOpen }"
    @click="$emit('click')"
  >
    <div @click.stop>
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Overlay',
  props: {
    isOpen: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss">
.overlay {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(#000, .6);
  z-index: 99;
  opacity: 0;
  visibility: hidden;
  transition: opacity .3s;
  display: flex;
  justify-content: center;
  align-items: center;

  &.active {
    visibility: visible;
    opacity: 1;
  }
}
</style>
