<template>
  <div>
    <p class="title">{{ title }}:</p>
    <ul class="list">
      <li
        v-for="(item, index) in list"
        :key="index"
        class="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ProductTools',
  props: {
    title: String,
    list: Array
  }
}
</script>

<style lang="scss" scoped>
.title {
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 24px;
  max-width: 300px;
}

.list {
  margin-bottom: 50px;
}

.item {
  padding-left: 20px;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 8px;
    height: 8px;
    background-color: #000;
    left: 0;
    top: 50%;
    transform: translateY(-50%) rotate(45deg);
  }
}
</style>
