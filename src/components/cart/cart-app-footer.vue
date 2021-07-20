<template>
    <footer class="cart__bottom">
        <div class="cart__bottom-details">
            <span class="cart__bottom-details-count"> Всего пицц: <b>{{totalCount}} шт.</b> </span>
            <span class="cart__bottom-details-price"> Сумма заказа: <b>{{totalPrice}} ₽</b> </span>
        </div>
        <div class="cart__bottom-buttons">
            <router-link to="/" class="button button--transparent">
                <svg class="button-icon"
                     viewBox="0 0 8 14"
                     fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 13L1 6.93015L6.86175 1" stroke="#D3D3D3" stroke-width="1.5" stroke-linecap="round"
                          stroke-linejoin="round"/>
                </svg>
                <span class="button-text">Вернуться назад</span>
            </router-link>
            <button class="button button--add button--modal"
                    title="pay"
                    @click="openModal()">
                <span class="button-text">Оплатить сейчас</span>
            </button>
        </div>
    </footer>
</template>

<script>
  import {defineComponent} from "vue";
  import {mapActions, mapState} from "vuex";

  export default defineComponent({
    name: "cart-app-footer",
    methods: {
      ...mapActions('common', {
        modalAction: 'modalAction'
      }),
      openModal() {
        this.modalAction(true)
      },
    },
    computed: {
      ...mapState('cart', {
        totalPrice: 'totalPrice',
        totalCount: 'totalCount'
      })
    }
  })
</script>