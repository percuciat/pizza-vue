<template>
    <content-loader
            class="pizza-block"
            :speed=2
            :width=280
            :height=460
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
    >
        <circle cx="139" cy="139" r="134" />
        <rect x="5" y="297" rx="2" ry="2" width="276" height="25" />
        <rect x="7" y="331" rx="2" ry="2" width="271" height="73" />
        <rect x="8" y="429" rx="2" ry="2" width="98" height="25" />
        <rect x="152" y="415" rx="21" ry="21" width="125" height="41" />
    </content-loader>
</template>

<script>
  import { defineComponent } from "vue";
  import { ContentLoader } from 'vue-content-loader'
  export default defineComponent({
    name: "content-app-product-loading",
    components: {
      ContentLoader
    },
    data() {
      return {
        speed: 2,
        width: 280,
        height: 460
      }
    }
  });
</script>

<style scoped>

</style>