<template>
  <div class="input-block" :class="{'valid': valid, 'error': error}">
    <input
      class="input-block__input"
      @blur="!value ? valid = false : valid = true"
      v-model="inputVal"
      :type="inputData.type ? inputType : 'text'"
      :id="inputData.id"
      :name="inputData.name"
      autocomplete="off"
    />
    <label :for="inputData.id" class="input-block__label">
      {{ inputData.placeholder }}
    </label>
    <button
      @click.prevent="toggleInputType"
      v-if="inputData.type === 'password'"
      class="input-block__type-toggle-button"
    >
      <svg v-if="inputType === 'password'" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 7C14.76 7 17 9.24 17 12C17 12.65 16.87 13.26 16.64 13.83L19.56 16.75C21.07 15.49 22.26 13.86 22.99 12C21.26 7.61 16.99 4.5 11.99 4.5C10.59 4.5 9.25 4.75 8.01 5.2L10.17 7.36C10.74 7.13 11.35 7 12 7ZM2 4.27L4.28 6.55L4.74 7.01C3.08 8.3 1.78 10.02 1 12C2.73 16.39 7 19.5 12 19.5C13.55 19.5 15.03 19.2 16.38 18.66L16.8 19.08L19.73 22L21 20.73L3.27 3L2 4.27ZM7.53 9.8L9.08 11.35C9.03 11.56 9 11.78 9 12C9 13.66 10.34 15 12 15C12.22 15 12.44 14.97 12.65 14.92L14.2 16.47C13.53 16.8 12.79 17 12 17C9.24 17 7 14.76 7 12C7 11.21 7.2 10.47 7.53 9.8V9.8ZM11.84 9.02L14.99 12.17L15.01 12.01C15.01 10.35 13.67 9.01 12.01 9.01L11.84 9.02Z" fill="#333333"/>
      </svg>

      <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#333333"/>
      </svg>
    </button>
    <p v-if="error" class="input-block__error-text">
      {{ error }}
    </p>
  </div>
</template>

<script>
export default {
  name: "InputBlock",

  data() {
    return {
      error: false,
      valid: false,
      inputType: this.inputData.type,
    }
  },

  props: {
    inputData: {
      type: Object,
      default: () => {}
    },
    value: {
      type: String,
      default : "",
    },
    trigger: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    inputVal: {
      get() {
        return this.value;
      },
      set(val) {
        switch (this.inputData.type) {
          case 'email':
            this.$emit('input', val);
            if (/.+@.+\..+/i.test(val)) {
              this.error = null;
              this.valid = true;
            } else if (val.length) {
              this.valid = true;
              this.error = 'Incorrect email'
            } else {
              this.valid = false;
              this.error = 'Incorrect email'
            }
            break;
          case 'password':
            this.$emit('input', val);
            if (val.trim().length > 5) {
              this.error = null;
              this.valid = true;
            } else if (val.length) {
              this.valid = true;
              this.error = 'Password must be not less than 6 symbols'
            } else {
              this.valid = false;
              this.error = 'Password must be not less than 6 symbols'
            }
        }
      }
    },
  },

  watch: {
    trigger() {
      this.valid = false;
    },
  },

  methods: {
    toggleInputType() {
      this.inputType ? this.inputType = null : this.inputType = 'password'
    }
  },

  mounted() {
    switch (this.inputData.type) {
      case 'email':
        this.$emit('input', this.value);
        if (/.+@.+\..+/i.test(this.value)) {
          this.error = null;
          this.valid = true;
        } else if (this.value.length) {
          this.valid = true;
          this.error = 'Incorrect email'
        }
        break;
      case 'password':
        this.$emit('input', this.value);
        if (this.value.trim().length > 5) {
          this.error = null;
          this.valid = true;
        } else if (this.value.length) {
          this.valid = true;
          this.error = 'Password must be not less than 6 symbols'
        }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.input-block {
  position: relative;
  margin-bottom: 30px;
  padding: 5px 0 0;
  width: 280px;
  font-size: 20px;
  border-bottom: 2px solid $black;

  &__label {
    position: absolute;
    left: 0;
    bottom: 3px;
    font-size: 18px;
    color: rgba(23 23 23 / .5);
    pointer-events: none;
    transition: bottom .2s ease-in-out, font-size .2s ease-in-out, color .2s ease-in-out;
  }

  &__input {
    width: 100%;
    font-size: 18px;
    transition: background-color 1000000s ease;

    &:focus + label {
      bottom: 25px;
      font-size: 12px;
      color: $black;
      font-weight: 600;
    }
  }

  &.valid {
    .input-block__label {
      bottom: 25px;
      font-size: 12px;
      color: $black;
      font-weight: 600;
    }
  }

  &__type-toggle-button {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 24px;
    width: 24px;
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      height: 20px;
      width: 20px;
    }
  }

  &__error-text {
    position: absolute;
    bottom: -18px;
    font-size: 12px;
    font-weight: 600;
    color: $red;
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 25px;
    font-size: 18px;

    &__label, &__input {
      font-size: 16px;
    }

    &__input {
      &:focus + label {
        bottom: 20px;
        font-size: 10px;
      }
    }

    &.valid {
      .input-block__label {
        bottom: 20px;
        font-size: 10px;
      }
    }
  }

  @media screen and (max-width: 540px) {
    width: 100%;
  }
}
</style>