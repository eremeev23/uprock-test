<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "App",

  methods: {
    ...mapActions(['USER_REQUEST'])
  },

  created() {
    const isAuthorized = window.localStorage.getItem('uprock-authenticated');

    if (isAuthorized) {
      const userId = window.localStorage.getItem('uprock-id');

      this.USER_REQUEST(userId)
          .then(() => {
            this.$router.push({path: `/account/${userId}`, replace: true});
            console.log(123123)
          })
    } else {
      this.$router.push({path: `/sign-in`, replace: true});
    }
  }
}
</script>
