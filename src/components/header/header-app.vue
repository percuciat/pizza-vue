<template>
  <div class="header">
    <div class="container">
      <div class="header__logo">
        <router-link to="/">
          <img width="38" src="../../assets/img/pizza-logo.svg" alt="Pizza logo" />
        </router-link>
        <div>
          <h1>Vue Pizza</h1>
          <p>самая вкусная пицца во вселенной</p>
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

            img {
                margin-right: 15px;
            }

            h1 {
                color: #181818;
                font-size: 24px;
                letter-spacing: 1%;
                text-transform: uppercase;
                font-weight: 800;
            }

            p {
                color: #7b7b7b;
            }
        }
       /* &__cart{
            display: flex;
            background-color: #42B983;
            padding: .6rem .7rem;
            align-items: center;
            border-radius: .8rem;
            font-weight: 500;
            cursor: pointer;
            span{
                color: white;
            }
            svg{
                margin-right: .3rem;
            }
        }*/
    }

</style>
