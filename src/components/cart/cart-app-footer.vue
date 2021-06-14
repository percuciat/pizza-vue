<template>
    <footer class="cart__bottom">
        <div class="cart__bottom-details">
            <span> Всего пицц: <b>{{totalCount}} шт.</b> </span>
            <span> Сумма заказа: <b>{{totalPrice}} ₽</b> </span>
        </div>
        <div class="cart__bottom-buttons">
            <router-link to="/" class="button button--outline button--add go-back-btn">
                <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

                <span>Вернуться назад</span>
            </router-link>
            <div class="button pay-btn">
                <span>Оплатить сейчас</span>
            </div>
        </div>
    </footer>
</template>

<script>
  import {defineComponent} from "vue";
  import { mapState } from "vuex";
  export default defineComponent({
    name: "cart-app-footer",
    computed: {
      ...mapState('cart', {
        totalPrice: 'totalPrice',
        totalCount: 'totalCount'
      })
    }
  })
</script>

<style scoped>

</style>