<template>
  <button class="submit-button button" :disabled="disabled">
    SIGN IN
  </button>
</template>

<script>
export default {
  name: "SubmitButton",

  props: {
    disabled: {
      type: Boolean,
      default: () => true
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.submit-button {
  margin-top: 20px;
  padding: 15px 0;
  width: 100%;
  border: 3px solid $black;

  @media screen and (max-width: 768px) {
    margin-top: 15px;
    padding: 12px 0;
  }
}
</style>