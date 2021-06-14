<template>
    <div class="cart">
        <cart-app-header/>
        <cart-app-list/>
        <cart-app-footer/>
    </div>
</template>

<script>
  import { defineComponent } from "vue";
  import CartAppHeader from "@/components/cart/cart-app-header.vue";
  import CartAppFooter from "@/components/cart/cart-app-footer.vue";
  import CartAppList from "@/components/cart/cart-app-list.vue";

  export default defineComponent({
    name: "cart-app",
    components: {
      CartAppHeader,
      CartAppList,
      CartAppFooter
    }
  });
</script>

<style scoped>

</style>