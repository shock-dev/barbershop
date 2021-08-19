<template>
  <label class="label">
    <input
      class="real"
      type="radio"
      :name="name"
      :value="value"
    >
    <span class="fake" />
    <span class="text">{{ text }}</span>
  </label>
</template>

<script>
export default {
  name: 'Radio',
  props: {
    name: String,
    text: String,
    value: String
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.real {
  width: 1px;
  height: 1px;
  position: absolute;
  opacity: 0;
  appearance: none;
}

.real:checked + .fake:after {
  display: block;
}

.fake {
  flex: none;
  width: 20px;
  height: 20px;
  border: 2px solid #000;
  margin-right: 24px;
  position: relative;
  border-radius: 50%;

  &:after {
    content: '';
    display: none;
    position: absolute;
    width: 8px;
    height: 8px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background-color: #000;
  }
}

.text {
  line-height: 18px;
  transition: color .2s;
}
</style>
