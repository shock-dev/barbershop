<template>
  <div class="catalog">
    <div class="items">
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

<style lang="scss" scoped>
.catalog {
  width: 100%;
}

.items {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;
  padding-bottom: 50px;
}
</style>
