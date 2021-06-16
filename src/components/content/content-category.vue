<template>
    <div class="categories">
        <ul>
            <li :class="{active: catItem.id === categoryActive}"
                v-for="catItem in dataCategory"
                @click="chooseCategory(catItem)"
                :key="catItem.id">{{catItem.name}}</li>
        </ul>
    </div>
</template>

<script>
  import { defineComponent } from "vue";
  import {mapGetters, mapState} from "vuex";
  export default defineComponent({
    name: "content-category",
    data() {
      return {
        dataCategory: [
          {id: null, name: 'Все'},
          {id: 0, name: 'Мясные'},
          {id: 1, name: 'Вегетарианская'},
          {id: 2, name: 'Гриль'},
          {id: 3, name: 'Острые'},
          {id: 4, name: 'Закрытые'}
          ],
      }
    },
    computed: {
      ...mapState('filter', {
        categoryActive: 'categoryActive',
      })
    },
    methods: {
      chooseCategory({id, name}) {
        this.$store.dispatch('filter/setChosenCategory', {
          amount: id,
          name
        });
        this.$store.dispatch('product/getProductsApi', {
          category: id
        })
      }
    },
  });
</script>

<style scoped>

</style>