<template>
    <content-loader
            class="pizza-block"
            :speed="speed"
            :width="width"
            :height="height"
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
    mounted() {
     if (window.matchMedia("(max-width: 450px)").matches) {
        this.width = 280;
        this.height = 480;
      } else if (window.matchMedia("(max-width: 1200px)").matches) {
       this.width = 200;
       this.height = 300;
     }
    },
    beforeDestroy() {

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
