<template>
  <ul class="pagination">
    <li class="item">
      <a class="link" href="#">1</a>
    </li>
    <li class="item active">
      <a class="link" href="#">2</a>
    </li>
    <li class="item">
      <a class="link" href="#">3</a>
    </li>
    <li class="item">
      <a class="link" href="#">4</a>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Pagination'
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  padding-bottom: 50px;
}

.item:not(:last-child) {
  margin-right: 8px;
}

.item.active .link {
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  pointer-events: none;
}

.link {
  padding: 12px 16px;
  color: #fff;
  line-height: 1;
  background-color: #000;
  transition: background-color .2s;
  outline: none;

  &:hover,
  &:focus {
    background-color: #663D15;
  }
}
</style>
