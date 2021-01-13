<template>
  <div class="catalog">
    <div class="catalog__items">
      <bs-card
        v-for="({ title, price, imageUrl }, index) in products"
        :key="index"
        :title="title"
        :price="price"
        :imageUrl="imageUrl"
      />
    </div>
    <bs-pagination/>
  </div>
</template>

<script>
import BsPagination from "@/components/app/bsPagination";
import BsCard from "@/components/app/bsCard";
import { mapGetters } from 'vuex'

export default {
  name: "bsCatalog",
  components: {
    BsCard,
    BsPagination
  },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>
