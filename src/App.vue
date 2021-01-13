<template>
  <div id="app" class="app">
    <!--  Main content  -->
    <bs-header/>
    <router-view/>
    <bs-footer/>

    <!--  Additional  -->
    <overlay/>
    <bs-modal-login/>
    <bs-map/>
  </div>
</template>

<script>
import BsHeader from "@/components/app/bsHeader";
import BsFooter from "@/components/app/bsFooter";
import BsModalLogin from "@/components/app/bsModalLogin";
import { mapGetters, mapMutations } from 'vuex';
import Overlay from "@/components/app/overlay";
import BsMap from "@/components/home/bsMap";

export default {
  components: {
    BsMap,
    Overlay,
    BsModalLogin,
    BsFooter,
    BsHeader
  },
  computed: {
    ...mapGetters(['overlay', 'map'])
  },
  methods: {
    ...mapMutations(['hideAll'])
  }
}
</script>

<style lang="scss">
@import "scss/index.scss";
</style>
