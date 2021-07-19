<template>
    <div class="wrapper">
        <header-app/>
        <main>
            <router-view/>
        </main>
        <footer>
            this is footer
        </footer>
        <modal-app />
        <preloader-app v-if="loader"/>
    </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { mapActions, mapState } from 'vuex';
  import HeaderApp from '@/components/header/header-app.vue';
  import ModalApp from '@/components/other/modal-app.vue';
  import PreloaderApp from '@/components/other/preloader-app.vue';

  export default defineComponent({
    name: 'App',
    components: {
      HeaderApp,
      ModalApp,
      PreloaderApp
    },
    mounted() {
      //this.$store.commit('cart/INIT_LOCAL_STORAGE')
      this.initStorage();
    },
    computed: {
      ...mapState('common', {
        loader: 'loader'
      })
    },
    methods: {
      ...mapActions('cart', {
        initLocalStorageCart: 'initLocalStorageCart'
      }),
      initStorage() {
        this.initLocalStorageCart()
      }
    }
  });
</script>

<style lang="scss">
    @import './assets/scss/app';
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }
</style>
