<template>
    <div class="wrapper">
        <header-app/>
        <main>
            <router-view v-slot="{ Component }">
                <transition name="slide-fade">
                    <component :is="Component" />
                </transition>
            </router-view>
        </main>
        <footer>

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
    data() {
      return {
        transitionName: 'slide-right'
      }
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
    .slide-fade-enter-active {
        transition: all .1s ease;
    }
    .slide-fade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateY(60px);
        opacity: 0;
    }
</style>
