<template>
  <div class="catalog">
    <div class="catalog__items">
      <bs-card v-for="i in 6" :key="i"/>
    </div>
    <bs-pagination/>
  </div>
</template>

<script>
import BsPagination from "@/components/app/bsPagination";
import BsCard from "@/components/app/bsCard";

export default {
  name: "bsCatalog",
  components: {
    BsCard,
    BsPagination
  }
}
</script>
