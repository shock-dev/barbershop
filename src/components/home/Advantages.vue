<template>
  <section class="advantages">
    <AdvantagesItem
      v-for="(item, index) in list"
      :key="index"
      :title="item.title"
      :body="item.body"
    />
  </section>
</template>

<script>
import AdvantagesItem from '@/components/home/AdvantagesItem'

export default {
  name: "Advantages",
  components: { AdvantagesItem },
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.advantages {
  display: flex;
  justify-content: space-between;
  text-align: center;
  color: #F7F4F1;
}

@media (max-width: 840px) {
  .advantages {
    flex-direction: column;
    align-items: center;
  }
}
</style>
