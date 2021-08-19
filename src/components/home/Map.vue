<template>
  <iframe
    class="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1668.5381620938924!2d30.32271215257088!3d59.938513133662056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1609519876453!5m2!1sru!2sru"
    style="border:0;"
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0"
    :class="{ active: isOpen }"
  />
</template>

<script>
export default {
  name: "Map",
  props: {
    isOpen: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.map {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  right: 0;
  left: 0;
  z-index: 130;
  width: 80%;
  height: 80%;
  margin: 0 auto;
  visibility: hidden;
  opacity: 0;

  &.active {
    visibility: visible;
    opacity: 1;
  }
}
</style>
