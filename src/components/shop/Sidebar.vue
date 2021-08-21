<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <button class="cancel" @click="$emit('close')" />
    <div class="title">Производители:</div>
    <div class="group">
      <Checkbox
        v-for="(item, index) in manufacturers"
        :key="index"
        style="margin-bottom: 14px"
        name="manufacturers"
        :text="item.title"
        v-model="item.checked"
      />
    </div>
    <div class="group">
      <Radio
        v-for="(item, index) in types"
        :key="index"
        style="margin-bottom: 14px"
        name="types"
        :text="item.title"
      />
    </div>
  </aside>
</template>

<script>
import Checkbox from '@/components/app/Checkbox'
import Radio from '@/components/app/Radio'

export default {
  name: 'Sidebar',
  components: { Radio, Checkbox },
  props: {
    manufacturers: Array,
    types: Array,
    isOpen: Boolean
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  width: 240px;
  padding-right: 20px;
  margin-right: 50px;
}

.title {
  font-size: 24px;
  line-height: 30px;
  margin-bottom: 20px;
}

.cancel {
  display: none;
}

.group {
  margin-bottom: 50px;
}

@media (max-width: 750px) {
  .sidebar {
    position: fixed;
    left: 0;
    bottom: 0;
    top: 0;
    max-width: 300px;
    width: 100%;
    background-color: #fff;
    padding: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transform: translateX(-100%);
    transition: transform .3s;
    z-index: 200;

    &.active {
      transform: translateX(0);
    }
  }

  .group {
    margin-bottom: 0;
  }

  .group:not(:last-child) {
    margin-bottom: 50px;
  }
}

@media (max-width: 420px) {
  .sidebar {
    max-width: 100%;
  }

  .cancel {
    display: block;
    position: absolute;
    top: 25px;
    right: 25px;
    width: 40px;
    height: 40px;

    &:before,
    &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-50%, -50%);
      height: 3px;
      width: 100%;
      background-color: #000;
    }

    &:before {
      transform: rotate(45deg);
    }

    &:after {
      transform: rotate(-45deg);
    }

  }
}
</style>
