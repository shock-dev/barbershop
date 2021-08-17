<template>
  <iframe
    class="map"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1668.5381620938924!2d30.32271215257088!3d59.938513133662056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca145cc1%3A0x42b32648d8238007!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LzgsINCh0LDQvdC60YIt0J_QtdGC0LXRgNCx0YPRgNCzLCAxOTExODY!5e0!3m2!1sru!2sru!4v1609519876453!5m2!1sru!2sru"
    style="border:0;"
    allowfullscreen=""
    aria-hidden="false"
    tabindex="0"
    :class="{ active: map }"
  />
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "Map",
  computed: {
    ...mapGetters(['map'])
  }
}
</script>
