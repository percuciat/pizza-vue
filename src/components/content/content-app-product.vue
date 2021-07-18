<template>
    <li class="pizza-block">
        <img
            class="pizza-block__image"
            :src=product.imageUrl
            :alt=product.name
        />
        <h4 class="pizza-block__title">{{product.name}}</h4>
        <div class="pizza-block__selector">
            <ul>
                <li :class="{active: product.types[activeType] == ind,
                            disable: product.types.findIndex(el => el == ind) < 0 }"
                    @click="chooseType(ind)"
                    v-for="[ind, type] in Object.entries(availableTypes)">
                            {{type}}
                </li>
            </ul>
            <ul>
                <li :class="{active: activeSize == ind}"
                    v-for="[ind, size] in Object.entries(product.sizes)"
                    @click="chooseSize(ind)">{{size}} см.</li>
            </ul>
        </div>
        <div class="pizza-block__bottom">
            <div class="pizza-block__price">от {{product.price}} ₽</div>
            <content-app-product-button @addProductToCart="addProductToCart"
                                        :product="product"/>
        </div>
    </li>
</template>

<script>
  import {defineComponent} from "vue";
  import { mapActions } from "vuex";
  import ContentAppProductButton from "./content-app-product-button";
  export default defineComponent({
    name: "content-app-product",
    props: {
      product: {
        type: Object,
        required: true
      }
    },
    components: {
      ContentAppProductButton
    },
    data() {
      return {
        // countProduct: '',
        activeSize: 0,
        activeType: 0,
        availableSizes: [26, 30, 40],
        availableTypes: ['тонкое', 'традиционное']
      }
    },
    methods: {
      chooseType(vSort) {
        this.activeType = vSort
      },
      chooseSize(vSize) {
        this.activeSize = vSize
      },
      ...mapActions('cart',{
        addProduct: 'addProduct'
      }),
      addProductToCart(productChosen) {
        this.addProduct({
          idP: productChosen.name,
          id: Date.now(),
          imageUrl: productChosen.imageUrl,
          sizeProduct: this.availableSizes[this.activeSize],
          typeProduct: this.availableTypes[this.activeType],
          price: productChosen.price
        });
      }
    }
  })
</script>
