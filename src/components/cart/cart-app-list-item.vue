<template>
        <li class="cart__item"
            v-for="cartItem in elCart"
            :key="cartItem.idP">
            <div class="cart__item-img">
                <img
                        class="pizza-block__image"
                        :src="cartItem.imageUrl"
                        :alt="cartItem.name"
                />
            </div>
            <div class="cart__item-info">
                <p>{{cartItem.typeProduct}} тесто, {{cartItem.sizeProduct}} см.</p>
            </div>
            <div class="cart__item-count">
                <button class="button button--circle button--circle-minus"
                        title="minus product"
                        @click="minus(cartItem)">
                    <svg  class="button-icon"
                          viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                              fill="#EB5A1E"/>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                              fill="#EB5A1E"/>
                    </svg>
                </button>

                    <b>{{cartItem.countSame}}</b>

                <button class="button button--circle button--circle-plus"
                        title="plus product"
                        @click="plus(cartItem)">
                    <svg class="button-icon"
                         viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z"
                              fill="#EB5A1E"/>
                        <path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z"
                              fill="#EB5A1E"/>
                    </svg>
                </button>
            </div>
            <div class="cart__item-price">
                <span class="textBtnMob">Цена: </span>
                <b>{{cartItem.sum}} ₽</b>
            </div>
            <div class="cart__item-remove ">
                <button class="button button--transparent button--reset"
                        title="Remove"
                        @click="remove(cartItem)">
                    <svg class="button-icon button-icon--cross"
                         viewBox="0 0 10 10"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg" data-v-3a58eb73="">
                        <path d="M5.92001 3.84V5.76V8.64C5.92001 9.17016 5.49017 9.6 4.96001 9.6C4.42985 9.6 4.00001 9.17016 4.00001 8.64L4 5.76L4.00001 3.84V0.96C4.00001 0.42984 4.42985 0 4.96001 0C5.49017 0 5.92001 0.42984 5.92001 0.96V3.84Z" fill="#EB5A1E" data-v-3a58eb73=""></path><path d="M5.75998 5.92001L3.83998 5.92001L0.959977 5.92001C0.429817 5.92001 -2.29533e-05 5.49017 -2.29301e-05 4.96001C-2.2907e-05 4.42985 0.429817 4.00001 0.959977 4.00001L3.83998 4L5.75998 4.00001L8.63998 4.00001C9.17014 4.00001 9.59998 4.42985 9.59998 4.96001C9.59998 5.49017 9.17014 5.92001 8.63998 5.92001L5.75998 5.92001Z" fill="#EB5A1E" data-v-3a58eb73=""></path>
                    </svg>
                    <span class="button-text">Убрать</span>
                </button>
            </div>
        </li>
</template>

<script>
  import {defineComponent} from "vue";
  import {mapActions} from "vuex";

  export default defineComponent({
    name: "cart-app-list-item",
    props: {
      elCart: {
        type: Object,
        required: true
      }
    },
    methods: {
      ...mapActions('cart', {
        plusProduct: 'plusProduct',
        minusProduct: 'minusProduct',
        removeProduct: 'removeProduct'
      }),
      plus(product) {
        this.plusProduct(product)
      },
      minus(product) {
        this.minusProduct(product)
      },
      remove(obj) {
        this.removeProduct(obj)
      }
    }
  });
</script>
