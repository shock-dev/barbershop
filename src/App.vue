<template>
  <div id="app" class="app">
    <bs-header
      :burger="burgerMenu"
      @showOverlay="overlay = true"
      @openBurger="burgerMenu = true"
      @openModal="modal = true"
      @hideAll="hideAll"
      @openModalFromBurgerMenu="openModalFromBurgerMenu"
    />
    <router-view/>
    <bs-footer/>

    <div
      @click="hideAll"
      class="overlay"
      :class="{ active: overlay }"
    ></div>

    <bs-modal-login
      :modal="modal"
      @closeModal="hideAll"
    />

  </div>
</template>

<script>
import BsHeader from "@/components/app/bsHeader";
import BsFooter from "@/components/app/bsFooter";
import BsModalLogin from "@/components/app/bsModalLogin";

export default {
  components: {
    BsModalLogin,
    BsFooter,
    BsHeader
  },
  data: () => ({
    overlay: false,
    burgerMenu: false,
    modal: false
  }),
  methods: {
    hideAll() {
      this.overlay = this.burgerMenu = this.modal = false
    },
    openModalFromBurgerMenu() {
      this.hideAll()

      setTimeout(() => {
        this.overlay = this.modal = true
      }, 300)
    }
  }
}
</script>

<style lang="scss">
@import "scss/index.scss";
</style>
