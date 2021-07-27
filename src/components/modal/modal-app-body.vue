<template>
    <div class="modal-body">
        <h3 class="title">
            {{titleH3}}
        </h3>
        <modal-app-form v-if="status === 'form'"/>
        <modal-app-loading v-else-if="status === 'load'"/>
        <modal-app-thank v-else/>
    </div>
</template>

<script>
  import ModalAppForm from "./modal-app-form.vue"
  import ModalAppLoading from "./modal-app-loading.vue"
  import ModalAppThank from "./modal-app-thank.vue"
  import {defineComponent} from "vue";
  export default defineComponent({
    name: "modal-app-body",
    components: {
      ModalAppForm,
      ModalAppLoading,
      ModalAppThank
    },
    props: {
      status: {
        type: String,
        required: true
      }
    },
    data() {
      return {
        textTitle: {
          form: 'Оформление Заказа',
          load: 'Заказ формируется...',
          thank: 'Спасибо!'
        }
      }
    },
    computed: {
      titleH3() {
        return this.textTitle[this.status]
      }
    }
  })
</script>
