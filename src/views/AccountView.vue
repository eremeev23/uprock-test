<template>
  <div>
    <PageHeader />
    <main class="account container">
      <h1 class="account__title">
        Welcome back, <span>{{ user.username }}</span>!
      </h1>
      <div class="account__info">
        <div class="account__info-block">
          <p>
            Your email:
          </p>
          <span>{{ user.email }}</span>
        </div>
        <div class="account__info-block">
          <p>
            Your password:
          </p>
          <span>{{ user.password }}</span>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { mapState } from "vuex";
import PageHeader from '@/components/global/PageHeader';

export default {
  name: "AccountView",

  components: {
    PageHeader
  },

  computed: {
    ...mapState({
      user: state => state.users.user
    })
  }
}
</script>

<style lang="scss" scoped>
.account {
  &__title {
    font-size: 36px;
    margin-bottom: 40px;

    span {
      font-style: italic;
      text-decoration: underline;
    }
  }
  &__info {
    display: flex;
    flex-direction: column;
    gap: 15px;

    &-block {
      display: flex;
      gap: 7px;
      font-size: 18px;

      span {
        font-weight: 600;
      }
    }
  }

  @media screen and (max-width: 1360px) {
    &__title {
      font-size: 32px;
      margin-bottom: 30px;
    }
  }

  @media screen and (max-width: 540px) {
    &__title {
      font-size: 28px;
      margin-bottom: 20px;
    }

    &__info {
      gap: 7px;

      &-block {
        gap: 4px;
        font-size: 16px;
      }
    }
  }
}
</style>
