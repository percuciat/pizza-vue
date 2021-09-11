<template>
    <div class="categories">
        <ul class="dots">
            <li :class="{active: catItem.id === categoryActive}"
                v-for="catItem in dataCategory"
                @click="chooseCategory(catItem)"
                :key="catItem.id">{{catItem.name}}</li>
        </ul>
        <div class="labelMob">
            <content-sort :sortData="dataCategory"
                          @chooseOption="chooseCategory"
                          :activeOpt="categoryActive"/>
        </div>
    </div>
</template>

<script>
  import { defineComponent } from "vue";
  import { mapState, mapActions } from "vuex";
  import ContentSort from "./content-sort.vue";

  export default defineComponent({
    name: "content-category",
    components: {
      ContentSort,
    },
    data() {
      return {
        dataCategory: [
              {id: null, name: 'Все', type: null,},
              {id: 0, name: 'Мясные', type: 0,},
              {id: 1, name: 'Вегетарианские', type: 1,},
              {id: 2, name: 'Гриль', type: 2,},
              {id: 3, name: 'Острые', type: 3,},
              {id: 4, name: 'Закрытые', type: 4,}
        ],
      }
    },
    computed: {
      ...mapState('filter', {
        categoryActive: 'categoryActive',
      })
    },
    methods: {
      ...mapActions('filter',{
        setChosenCategory: 'setChosenCategory'
      }),
      chooseCategory({id, name}) {
        this.setChosenCategory({
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
