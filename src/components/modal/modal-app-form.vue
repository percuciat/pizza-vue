<template>
    <form @submit.prevent
          @submit="checkForm"
          class="form-modal">
        <div class="form-modal__block">
            <label class="form-modal__radio" v-for="inputItem in inputs">
                <input class="form-modal__input"
                       type="radio"
                       :checked="picked === inputItem.value"
                       :value="inputItem.value"
                       v-model="picked"
                       name="contact">
                <span class="text text--radio button button--cart">{{inputItem.name}}</span>
            </label>
        </div>
        <div class="form-modal__block">
            <label class="form-modal__label">
                <transition name="fade">
                    <span class="form-modal__error"
                          v-show="isError">Заполните, пожалуйста, поле. (больше 11 символов)</span>
                </transition>
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
            <span class="button-text">Заказать</span>
        </button>
    </form>
</template>

<script>
  import { defineComponent } from "vue";
  import {mapActions, mapState} from "vuex";

  export default defineComponent({
    name: "modal-app-form",
    computed: {
      switchContact(){
        return this.picked === 'tel' ?
          this.TEXT_PLACEHOLDER_PHONE :
          this.TEXT_PLACEHOLDER_MAIL
      },
      ...mapState('cart', {
        totalPrice: 'totalPrice',
        totalCount: 'totalCount'
      }),
    },
    data() {
      return {
        inputs: [
          {name: 'Телефон', value: 'tel'}, {name: 'Эл. почта', value: 'mail'}
        ],
        contactText: null,
        picked: 'tel',
        isError: false,
        TEXT_PLACEHOLDER_PHONE: 'Телефон',
        TEXT_PLACEHOLDER_MAIL: 'Эл. почта',
      }
    },
    methods: {
      ...mapActions('common', {
        modalAction: 'modalAction',
        sendModalForm: 'sendModalForm'
      }),
      ...mapActions('cart', {
        resetCart: 'resetCart',
      }),

      checkForm() {
        if(this.contactText.trim().length >= 11){
          this.sendModalForm();
          this.resetCart();
        } else {
          this.isError = true;
          setTimeout(() => {
            this.isError = false;
          }, 1000)
        }
      },
    },
    watch: {
      picked() {
        this.contactText = ''
      }
    }
  })
</script>

<style scoped>
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to /* .fade-leave-active до версии 2.1.8 */ {
        opacity: 0;
    }
</style>