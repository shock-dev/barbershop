<template>
  <div class="overlay" :class="{ active: overlay }" @click="hideAll"></div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: "overlay",
  computed: {
    ...mapGetters(['overlay'])
  },
  methods: {
    ...mapMutations(['hideAll'])
  }
}
</script>
