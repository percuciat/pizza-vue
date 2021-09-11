<template>
    <main>
        <ul class="cart__list">
            <li class="cart__list-item"
                v-for="[collectionItemName, collectionItemCart] in Object.entries(cartVuex)"
                 :key="collectionItemName">
                <h3 class="title">{{collectionItemName}}</h3>
                <ul class="list">
                    <cart-app-list-item :elCart="collectionItemCart"/>
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
        cartVuex: this.$store.state.cart.cart
      }
    }
  });
</script>
