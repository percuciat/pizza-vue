<template>
    <div v-if="modalShow"
         class="modal"
         @click="close()"
         tabindex="-1"
         role="dialog"
         aria-labelledby="myModalLabel">
        <transition name="modal">
            <div class="modal-dialog"
                 @click.stop
                 role="document">
                <div class="modal-content">
                    <button v-show="status !== 'load'"
                            @click="close()"
                            class="close"
                            title="Close modal"
                            data-dismiss="modal"
                            aria-label="Close">
                        <span>×</span>
                    </button>
                    <modal-app-body :status="status"></modal-app-body>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
  import { defineComponent } from "vue";
  import { mapActions, mapState } from "vuex";
  import ModalAppBody from "./modal-app-body.vue"

  export default defineComponent({
    name: "modal-app",
    components: {
      ModalAppBody
    },
    mounted() {
      document.addEventListener('keydown', this.handleKeyDown)
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.handleKeyDown)
    },
    data() {
      return {
        isOpen: false,
      }
    },
    computed: {
      ...mapState('common', {
        modalShow: 'modalShow',
        status: 'status'
      }),
    },
    methods: {
      ...mapActions('common', {
        modalAction: 'modalAction',
      }),
      open() {
        this.modalAction(true)
      },
      close() {
        if(this.status !== 'load'){
          this.modalAction(false)
        }
      },
      handleKeyDown(e) {
        if (this.modalShow && e.key === 'Escape') {
          this.close();
        }
      }
    },
  })
</script>
<style>
    .modal-enter {
        opacity: 1;
    }

    .modal-leave-active {
        opacity: 0;
    }

    .modal-enter .modal-dialog,
    .modal-leave-active .modal-dialog {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
</style>