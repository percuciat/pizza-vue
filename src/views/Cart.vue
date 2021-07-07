<template>
  <div class="container--cart">
    <cart-app-empty v-if="isEmptyCart" />
    <cart-app v-else/>
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

<style lang="scss">

</style>