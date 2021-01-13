import Vue from 'vue'
import Vuex from 'vuex'

import helpers from "@/store/modules/helpers";
import products from "@/store/modules/products";

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    helpers,
    products
  }
})
