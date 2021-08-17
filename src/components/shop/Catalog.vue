<template>
  <div class="catalog">
    <div class="catalog__items">
      <Card
        v-for="(item, index) in list"
        :key="index"
        :title="item.title"
        :price="item.price"
        :file="item.file"
      />
    </div>
    <Pagination />
  </div>
</template>

<script>
// Components
import Pagination from "@/components/app/Pagination"
import Card from "@/components/app/Card"

export default {
  name: 'Catalog',
  components: { Card, Pagination },
  props: {
    list: Array
  }
}
</script>
