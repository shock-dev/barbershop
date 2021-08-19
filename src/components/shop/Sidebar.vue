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
