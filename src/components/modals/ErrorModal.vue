<template>
  <div class="error-modal">
    <button
      class="error-modal__close"
      @click="$modal.hideAll()"
    >
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 17L1 1M17 1L1 17" stroke="#333" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <p class="error-modal__text">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ErrorModal",

  props: {
    text: {
      type: String,
      default: ""
    }
  }
}
</script>

<style lang="scss" scoped>
.error-modal {
  position: relative;
  padding: 35px 20px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &__close {
    position: absolute;
    right: 20px;
    top: 20px;

    svg {
      height: 12px;
      width: 12px;
    }
  }

  &__text {
    font-size: 18px;
    font-weight: 600;
    text-align: center;
  }
}
</style>