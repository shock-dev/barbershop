<template>
  <div id="app" class="app">
    <!--  Main content  -->
    <Header/>
    <router-view/>
    <Footer/>

    <!--  Additional  -->
    <overlay/>
    <ModalLogin/>
    <Map/>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import Header from "@/components/app/Header"
import Footer from "@/components/app/Footer"
import ModalLogin from "@/components/app/ModalLogin"
import Overlay from "@/components/app/Overlay"
import Map from "@/components/home/Map"

export default {
  components: {
    Map,
    Overlay,
    ModalLogin,
    Footer,
    Header
  },
  computed: {
    ...mapGetters(['overlay', 'map'])
  },
  methods: {
    ...mapMutations(['hideAll'])
  }
}
</script>
