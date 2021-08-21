<template>
  <div class="modal" :class="{ active: isOpen }">
    <button class="close" @click="$emit('onClose')">
      <svg>
        <use href="~@/assets/img/[icons].svg#close-icon"></use>
      </svg>
    </button>
    <div v-if="title" class="title">
      {{ title }}
    </div>
    <p v-if="text" class="text">
      {{ text }}
    </p>
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: { type: Boolean, default: false },
    title: { type: String },
    text: { type: String }
  }
}
</script>

<style lang="scss" scoped>
.modal {
  position: relative;
  max-width: 460px;
  width: 100%;
  background-color: #fff;
  padding: 50px 80px;
  background-image: url('~@/assets/img/main-section-bg.jpg');
  opacity: 1;
}

.close {
  position: absolute;
  width: 17px;
  height: 17px;
  top: 10px;
  right: -32px;
  outline: none;

  svg {
    width: 100%;
    height: 100%;
    fill: #999999;
    transition: fill .2s;
  }

  &:hover,
  &:focus {
    svg {
      fill: #fff;
    }
  }
}

.title {
  font-size: 30px;
  line-height: 42px;
}

.text {
  margin: 15px 0 12px;
}

@media (max-width: 600px) {
  .close {
    top: 15px;
    right: 15px;
  }
}

@media (max-width: 500px) {
  .modal {
    padding: 50px;
  }
}

@media (max-width: 380px) {
  .modal {
    padding: 30px;
    font-size: 13px;
  }
}
</style>
