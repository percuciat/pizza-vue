<template>
    <button class="button button--add"
            @click="addProduct(product)">
        <svg class="button-icon"
             viewBox="0 0 12 12"
             fill="none"
             xmlns="http://www.w3.org/2000/svg"
        >
            <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
            />
        </svg>
        <span class="button-text">Добавить</span>
        <i v-show="countProduct">{{countProduct}}</i>
    </button>
</template>

<script>
  export default {
    name: "content-app-product-button",
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        countProduct: '',
      }
    },
    methods: {
      addProduct(chosenOption) {
        this.countProduct = +this.countProduct + 1;
        this.$emit('addProductToCart', chosenOption)
      }
    }
  }
</script>
