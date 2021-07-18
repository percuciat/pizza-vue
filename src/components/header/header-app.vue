<template>
  <div class="header">
      <div class="header__logo">
        <router-link to="/">
          <img width="38" src="../../assets/img/pizza-logo.svg" alt="Pizza logo" />
        </router-link>
        <div class="header__logo-hero">
          <h1 class="hero-title">Vue Pizza</h1>
          <p class="hero-subtitle">самая аппетитная пицца во вселенной</p>
        </div>
      </div>
      <div class="header__cart">
        <header-app-button />
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

