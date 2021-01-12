<template>
  <div id="app" class="app">
    <bs-header/>
    <router-view/>
    <bs-footer/>
  </div>
</template>

<script>
import BsHeader from "@/components/app/bsHeader";
import BsFooter from "@/components/app/bsFooter";

export default {
  components: {
    BsFooter,
    BsHeader
  }
}
</script>

<style lang="scss">
@import "scss/index.scss";
</style>
