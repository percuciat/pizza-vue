<template>
    <h3>Ваш номер заказа <span>{{randomNum}}</span></h3>
</template>

<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "modal-app-thank",
    computed: {
      randomNum(){
        return +(this.number + (Math.random() * 10000).toFixed(0))
      }
    },
    data(){
      return {
        number: 1
      }
    }
  })
</script>
