<template>
  <div class="header">
    <div class="container">
      <div class="header__logo">
        <router-link to="/">
          <img width="38" src="../../assets/img/pizza-logo.svg" alt="Pizza logo" />
        </router-link>
        <div class="hero">
          <h1 class="hero-title">Vue Pizza</h1>
          <p class="hero-subtitle">самая аппетитная пицца во вселенной</p>
        </div>
      </div>
      <div class="header__cart">
        <header-app-button />
      </div>
    </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import HeaderAppButton from './header-app-button.vue'
  export default defineComponent({
    name: "header-app",
    components: {
      HeaderAppButton
    }
  });
</script>

<style lang="scss">
    @import '../../assets/scss/variables';
    .header {
        border-bottom: 1px solid $gray-line;
        padding: 40px 0;

        .container {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &__logo {
            display: flex;
            align-items: center;

            img {
                margin-right: 15px;
            }
        }
    }


</style>
