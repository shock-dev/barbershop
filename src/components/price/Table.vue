<template>
  <div class="table">
    <div
      v-for="(item, index) in list"
      :key="index"
      class="row"
    >
      <div class="col">{{ item.title }}</div>
      <div class="col">{{ item.price }} ₽</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Table',
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.table {
  border-top: 2px solid #000;
  border-left: 2px solid #000;
  margin-bottom: 60px;
}

.row {
  display: flex;
}

.col {
  width: 50%;
  padding: 15px;
  border-bottom: 2px solid #000;
  border-right: 2px solid #000;

  &:last-child {
    text-align: center;
  }
}

@media (max-width: 580px) {
  .table {
    margin-bottom: 35px;
  }
}
</style>
