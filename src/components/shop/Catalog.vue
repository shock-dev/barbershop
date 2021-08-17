<template>
  <div class="catalog">
    <div class="catalog__items">
      <Card
        v-for="({ title, price, imageUrl }, index) in products"
        :key="index"
        :title="title"
        :price="price"
        :imageUrl="imageUrl"
      />
    </div>
    <Pagination/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Pagination from "@/components/app/Pagination";
import Card from "@/components/app/Card";

export default {
  name: "Catalog",
  components: { Card, Pagination },
  computed: {
    ...mapGetters(['products'])
  }
}
</script>
