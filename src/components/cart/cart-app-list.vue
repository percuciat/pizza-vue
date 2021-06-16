<template>
    <main>
        <ul class="content__items">
           <cart-app-list-item
                    v-for="[id, cartItems] in  Object.entries(cart)"
                    :key="id"
                    :elCart="cartItems"/>
        </ul>
    </main>
</template>

<script>
  import { defineComponent } from "vue";
  import CartAppListItem from "@/components/cart/cart-app-list-item.vue";
  import {mapState} from "vuex";

  export default defineComponent({
    name: "cart-app-list",
    components: {
      CartAppListItem
    },
    computed: {
      ...mapState('cart', {
        cart: 'cart'
      })
    }
  });
</script>

<style scoped>

</style>