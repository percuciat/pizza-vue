<template>
    <div v-if="modalShow"
         class="modal"
         @click="close()"
         tabindex="-1"
         role="dialog"
         aria-labelledby="myModalLabel">
        <div class="modal-dialog"
             :class="{hide: isFade}"
             @click.stop
             role="document">
            <div class="modal-content clearfix">
                <button @click="close()"
                        class="close"
                        title="Close modal"
                        data-dismiss="modal"
                        aria-label="Close">
                    <span>×</span>
                </button>
                <div class="modal-body">
                    <h3 class="title">Оформление заказа</h3>
                    <form @submit.prevent
                          @submit="checkForm"
                          class="form-modal">
                        <div class="form-modal__block">
                            <label class="form-modal__radio">
                                <input class="form-modal__input"
                                       type="radio"
                                       checked
                                       value="tel"
                                       v-model="picked"
                                       name="contact">
                                <span class="text text--radio button button--cart">Телефон</span>
                            </label>
                            <label class="form-modal__radio">
                                <input class="form-modal__input"
                                       type="radio"
                                       v-model="picked"
                                       value="mail"
                                       name="contact">
                                <span class="text text--radio button button--cart">Эл. почта</span>
                            </label>
                        </div>
                        <div class="form-modal__block">
                            <label class="form-modal__label">
                                <span class="form-modal__error" v-show="isError">Заполните, пожалуйста, поле.</span>
                                <input class="form-modal__input--text"
                                       type="text"
                                       required
                                       v-model="contactText"
                                       :placeholder="switchContact">
                            </label>
                        </div>
                        <div class="form-modal__block--grid">
                            <span class="text text--alt">Комментарий к заказу</span>
                            <label>
                                <textarea class="form-modal__textarea" name="comment" placeholder="Ваши пожелания..."></textarea>
                            </label>
                        </div>
                        <div class="form-modal__block--grid">
                            <span class="text text--alt">Детали заказа</span>
                            <ul class="form-modal__detail-list">
                                <li class="detail-item">Всего пицц: <span class="mark-text text--alt">{{totalCount}} ШТ</span> </li>
                                <li class="detail-item">Сумма заказа <span class="mark-text text--alt">{{totalPrice}} ₽</span> </li>
                            </ul>
                        </div>
                        <button class="form-modal__btn button button--black">
                            <span>Заказать</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { defineComponent } from "vue";
  import { mapActions, mapState } from "vuex";

  export default defineComponent({
    name: "modal-app",
    mounted() {
      document.addEventListener('keydown', this.handleKeyDown)
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.handleKeyDown)
    },
    data() {
      return {
        isFade: false,
        contactText: null,
        isError: false,
        picked: '',
        TEXT_PLACEHOLDER_PHONE: 'Телефон',
        TEXT_PLACEHOLDER_MAIL: 'Эл. почта',
      }
    },
    computed: {
      ...mapState('common', {
        modalShow: 'modalShow'
      }),
      ...mapState('cart', {
        totalPrice: 'totalPrice',
        totalCount: 'totalCount'
      }),
      switchContact(){
        return this.picked === 'tel' ?
          this.TEXT_PLACEHOLDER_PHONE :
          this.TEXT_PLACEHOLDER_MAIL
      },
    },
    methods: {
      ...mapActions('common', {
        modalAction: 'modalAction',
        sendModalForm: 'sendModalForm'
      }),
      ...mapActions('cart', {
        resetCart: 'resetCart',
      }),

      close() {
        this.isFade = true;
        setTimeout(() => {
          this.isFade = false;
          this.modalAction(false)
        }, 200)
      },

      reset() {
        this.resetCart();
      },

      checkForm() {
        if(this.contactText.trim().length >= 11){
          this.sendModalForm(true);
          this.reset()
        } else {
          this.isError = true;
        }
      },

      handleKeyDown(e) {
        if (this.modalShow && e.key === 'Escape') {
          this.close();
        }
      }
    }
  })
</script>