<template>
  <div class="container container--cart">
    <cart-app-empty v-if="!cart.length" />
    <cart-app v-else/>
  </div>
</template>
<script>
  import { defineComponent } from "vue";
  import CartApp from "@/components/cart/cart-app.vue";
  import CartAppEmpty from "@/components/cart/cart-app-empty.vue";
  import { mapState } from "vuex";

  export default defineComponent({
    name: "Cart",
    components: {
      CartApp,
      CartAppEmpty
    },
    computed: {
      ...mapState('cart', {
        cart: 'cart',
      })
    }
  })
</script>

<style lang="scss">

</style>