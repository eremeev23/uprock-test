<template>
  <form
    name="sign-in"
    class="sign-in-form"
    @submit.prevent="formSubmit"
  >
    <InputBlock
      v-for="input in inputs"
      :key="input.id"
      v-model="formData[input.name]"
      :input-data="input"
      :trigger="trigger"
      :value="formData[input.name]"
    />
    <SubmitButton :disabled="!formValid"/>
  </form>
</template>

<script>
import InputBlock from './InputBlock';
import SubmitButton from './SubmitButton';
import ErrorModal from '../modals/ErrorModal';
import { mapActions, mapState } from 'vuex';

export default {
  name: "SignInForm",

  components: {
    InputBlock,
    SubmitButton,
    ErrorModal
  },

  data: () => ({
    inputs: [
      {
        type: 'email',
        name: 'email',
        id: 'sign_in_email',
        placeholder: 'E-mail',
        defaultValue: ''
      },
      {
        type: 'password',
        name: 'password',
        id: 'sign_in_password',
        placeholder: 'Password',
        defaultValue: ''
      },
    ],
    formData: {},
    trigger: false,
  }),

  computed: {
    ...mapState({
      users: state => state.users.users
    }),

    formValid() {
      return !!this.formData.email
              && /.+@.+\..+/i.test(this.formData.email)
              && !!this.formData.password
              && this.formData.password.length > 5;
    }
  },

  methods: {
    ...mapActions(['SIGN_IN']),

    formSubmit() {
      if (this.formValid) {
        this.SIGN_IN(this.formData)
            .then(({status, data}) => {
              if (status === 401) {
                this.$modal.show(ErrorModal, {
                  text: data,
                }, {
                  height: 200,
                  width: 400
                })
              } else {
                this.formData = {};
                this.trigger = !this.trigger;
                this.$router.push(`/account/${data.id}`)
              }
            })
      }
    }
  },
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.sign-in-form {
  padding: 35px;
  border: 3px solid $black;
  background-color: rgba(255 255 255 / .5);
  backdrop-filter: blur(5px);

  @media screen and (max-width: 768px) {
    padding: 30px 20px;
    max-width: 100%;
  }

  @media screen and (max-width: 540px) {
    padding: 40px 15px;
    min-height: 100vh;
    width: 100%;
    border: none;
  }
}
</style>