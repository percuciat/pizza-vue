<template>
    <div>
        <!--<transition name="component-fade" mode="out-in">-->
            <cart-app-empty v-if="isEmptyCart" />
            <cart-app v-else/>
        <!--</transition>-->
    </div>
</template>
<script>
  import { defineComponent } from "vue";
  import CartApp from "@/components/cart/cart-app.vue";
  import CartAppEmpty from "@/components/cart/cart-app-empty.vue";
  import { mapGetters } from "vuex";

  export default defineComponent({
    name: "Cart",
    components: {
      CartApp,
      CartAppEmpty
    },
    computed: {
      ...mapGetters('cart', {
        isEmptyCart: 'isEmptyCart',
      }),
    }
  })
</script>

<style scoped>
    .component-fade-enter-active, .component-fade-leave-active {
        transition: opacity 1s ease;
    }
    .component-fade-enter, .component-fade-leave-to {
        opacity: 0;
    }
</style>