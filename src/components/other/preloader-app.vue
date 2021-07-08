<template>
    <div class="backdrop">
        <div class="middle">
            <span class="loading-text">
                Ваш заказ формируется...
            </span>
            <div class="bar bar1"></div>
            <div class="bar bar2"></div>
            <div class="bar bar3"></div>
            <div class="bar bar4"></div>
            <div class="bar bar5"></div>
            <div class="bar bar6"></div>
            <div class="bar bar7"></div>
            <div class="bar bar8"></div>
        </div>
    </div>

</template>

<script>
  import { defineComponent } from "vue";
  export default defineComponent({
    name: "preloader-app"
  })
</script>

<style scoped>

</style>