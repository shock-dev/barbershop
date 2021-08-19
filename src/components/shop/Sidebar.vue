<template>
  <aside class="sidebar" :class="{ active: isOpen }">
    <button class="sidebar__cancel" @click="$emit('close')" />
    <div class="sidebar__title">Производители:</div>
    <div class="sidebar__group">
      <Checkbox
        v-for="(item, index) in manufacturers"
        :key="index"
        style="margin-bottom: 14px"
        name="manufacturers"
        :text="item.title"
        v-model="item.checked"
      />
    </div>
    <div class="sidebar__group">
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

  &__title {
    font-size: 24px;
    line-height: 30px;
    margin-bottom: 20px;
  }

  &__cancel {
    display: none;
  }

  &__group {
    margin-bottom: 50px;
  }

  &__label {

    &:not(.disabled):hover {
      .sidebar__checkbox-text {
        color: #663D15;
      }

      .sidebar__radio-text {
        color: #663D15;
      }
    }

    &.disabled {
      pointer-events: none;
    }
  }

  .disabled {
    opacity: .3;
  }
}
</style>
