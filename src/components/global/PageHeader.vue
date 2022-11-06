<template>
  <header class="header">
    <nav class="container header__nav">
      <button
        @click="logout"
        class="header__nav-logout button"
        aria-label="Log out"
        title="Log out"
      >
        Log out
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "PageHeader",

  methods: {
    logout() {
      window.localStorage.removeItem('uprock-authenticated');
      this.$router.push('/sign-in');
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/vars.scss";

.header {
  margin-bottom: 80px;
  border-bottom: 3px solid $black;

  &__nav {
    height: 100%;
    display: flex;
    justify-content: flex-end;

    &-logout {
      margin-bottom: -1px;
      padding: 15px 20px;
      height: 100%;
      font-size: 20px;
      line-height: 140%;
      font-weight: 600;
      border-right: 3px solid $black;
      border-left: 3px solid $black;
    }
  }

  @media screen and (max-width: 768px) {
    margin-bottom: 40px;

    &__nav {
      padding: 0;

      &-logout {
        padding: 10px 15px;
        border-right: none;
      }
    }
  }
}
</style>