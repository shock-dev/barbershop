<template>
  <ul v-if="list.length" class="list">
    <li
      v-for="(item, index) in list"
      :key="index"
      class="item"
    >
      <router-link
        v-if="item.url"
        :to="item.url"
      >
        {{ item.title }}
      </router-link>
      <span v-else>
        {{ item.title }}
      </span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.list {
  display: flex;
  margin-bottom: 20px;
  overflow-x: auto;
  padding: 20px 0;
}

.item {
  white-space: nowrap;

  span {
    color: #ABA9A7;
  }

  &:not(:last-child) {
    margin-right: 16px;
    position: relative;
    padding-right: 22px;

    &:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      background-color: #000;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      right: 0;
    }
  }
}
</style>
