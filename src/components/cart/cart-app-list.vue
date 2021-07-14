<template>
    <main>
        <ul class="cart__commonList">
                <li class="cart__commonList-item"
                    v-for="[key, cartItemCollection] in Object.entries(cartVuex)"
                     :key="key">
                    <h3>{{key}}</h3>
                    <ul class="content__items">
                        <cart-app-list-item
                                :key="cartItemCollection.id"
                                :elCart="cartItemCollection"/>
                    </ul>
                </li>
        </ul>
    </main>
</template>

<script>
  import { defineComponent } from "vue";
  import CartAppListItem from "@/components/cart/cart-app-list-item.vue";

  export default defineComponent({
    name: "cart-app-list",
    components: {
      CartAppListItem
    },
    data() {
      return {
        cartVuex: this.$store.state.cart
      }
    }
  });
</script>

<style scoped>

</style>