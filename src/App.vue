<template>
  <div id="app">
    <bs-header/>
    <router-view/>
  </div>
</template>

<script>
import BsHeader from "@/components/app/bsHeader";

export default {
  components: {
    BsHeader
  }
}
</script>

<style lang="scss">
@import "scss/index.scss";
</style>
