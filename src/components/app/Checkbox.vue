<template>
  <label class="label">
    <input
      class="real"
      type="checkbox"
      :name="name"
      v-model="model"
    >
    <span class="fake" />
    <span class="text">{{ text }}</span>
  </label>
</template>

<script>
export default {
  name: 'Checkbox',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    name: String,
    text: String,
    checked: Boolean
  },
  computed: {
    model: {
      get () {
        return this.checked
      },
      set (val) {
        this.$emit('change', val)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  cursor: pointer;

  &:not(.disabled):hover {
    .text {
      color: #663D15;
    }
  }

  &.disabled {
    pointer-events: none;
  }
}

.real {
  width: 1px;
  height: 1px;
  position: absolute;
  opacity: 0;
  appearance: none;

  &:checked + .fake:before,
  &:checked + .fake:after {
    display: block;
  }
}

.fake {
  flex: none;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  margin-right: 13px;
  position: relative;

  &:before,
  &:after {
    content: '';
    display: none;
    position: absolute;
    width: 14px;
    height: 2px;
    top: 7px;
    left: calc(50% - 7px);
    background-color: #000;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}

.text {
  line-height: 18px;
  transition: color .2s;
  user-select: none;
}
</style>
