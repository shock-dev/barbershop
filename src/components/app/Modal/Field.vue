<template>
  <div class="field-wrapper" :class="{ [icon]: !!icon }">
    <input
      class="field"
      :type="type"
      :placeholder="placeholder"
      :aria-label="aria"
    >
  </div>
</template>

<script>
export default {
  name: 'Field',
  props: {
    type: { type: String, default: 'text' },
    placeholder: { type: String, default: '' },
    aria: { type: String, default: '' },
    icon: { type: String, default: '' }
  }
}
</script>

<style lang="scss" scoped>
.field {
  display: block;
  outline: none;
  height: 42px;
  border: 2px solid #000;
  width: 100%;
  padding: 0 50px 0 15px;

  &::placeholder {
    text-transform: uppercase;
  }

  &-wrapper {
    margin-bottom: 10px;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 25px;
    }

    &.login:after {
      width: 12px;
      height: 11px;
      background-image: url('~@/assets/img/login-icon.png');
    }

    &.password:after {
      width: 12px;
      height: 15px;
      background-image: url('~@/assets/img/lock-icon.png');
    }
  }

  &:focus {
    border-color: #663D15;
  }

  &::placeholder {
    color: #000;
  }
}
</style>
