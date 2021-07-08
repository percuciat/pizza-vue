<template>
    <div class="content__top">
        <content-category />
        <content-sort :sortData="sortData"
                      @chooseOption="chooseSort"
                        :activeOpt="sortActive">
        </content-sort>
    </div>
    <h2 class="content__title">{{categoryNameActive}} пиццы</h2>
    <ul class="content__items">
        <content-app-product-loading
                v-if="isLoad"
                v-for="f in fakeArr"
                :key="f"
        />
        <content-app-product v-else
            v-for="prodItem in products"
            :key="prodItem.id"
            :product="prodItem">{{products}}</content-app-product>
    </ul>
</template>

<script>
  import { defineComponent } from "vue";
  import { mapGetters, mapState } from "vuex";
  import ContentCategory from "./content-category.vue";
  import ContentSort from "./content-sort.vue";
  import ContentAppProduct from "./content-app-product.vue";
  import ContentAppProductLoading from "./content-app-product-loading.vue";

  export default defineComponent({
    name: "content-app",
    components: {
      ContentCategory,
      ContentSort,
      ContentAppProduct,
      ContentAppProductLoading
    },
    beforeCreate() {
      this.$store.dispatch('product/getProductsApi')
    },
    data() {
      return {
        fakeArr: [1,2,3,4,5,6,7,8,9,10],
        sortData: [
          {
            id: 1,
            name: 'популярности',
            type: 'rating',
            order: 'desc'
          },
          {
            id: 1323,
            name: 'цене',
            type: 'price',
            order: 'desc'
          },
          {
            id: 16723,
            name: 'алфавиту',
            type: 'name',
            order: 'asc'
          },
        ],
      }
    },
    computed: {
      ...mapState('filter', {
        categoryNameActive: 'categoryNameActive',
      }),
      ...mapGetters('product', {
        isLoad: 'isLoad',
        products: 'products',
      }),
      ...mapState('filter', {
        sortActive: 'sortActive'
      }),
    },
    methods: {
      chooseSort({type, order}) {
        this.$store.dispatch('filter/setChosenSort', {
          type,
          order
        });
        this.$store.dispatch('product/getProductsApi');
      },
    }
  })
</script>

<style lang="scss">

</style>
