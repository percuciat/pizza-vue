<template>
    <div class="cart cart--empty">
        <h2 class="hero-title">Корзина пустая 😕</h2>
        <p class="subtitle">
            Вероятней всего, вы не заказывали ещё пиццу.<br />
            Для того, чтобы заказать пиццу, перейдите на главную страницу.
        </p>
        <img src="../../assets/img/empty-cart.png" alt="Empty cart" />
        <router-link to="/" class="button button--black">
            <span>Вернуться назад</span>
        </router-link>
    </div>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "cart-app-empty"
  })
</script>