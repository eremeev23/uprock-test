<template>
  <main class="home">
    <SignInForm />
  </main>
</template>

<script>
import SignInForm from "@/components/forms/SignInForm";

export default {
  name: 'HomeView',

  components: {
    SignInForm
  }
}
</script>

<style lang="scss" scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("@/assets/images/background.webp") center;
  background-size: cover;
}
</style>
