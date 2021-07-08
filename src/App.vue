<template>
    <div class="wrapper">
        <header-app/>
        <main>
            <div class="container">
                <router-view/>
            </div>
        </main>
        <modal-app />
        <preloader-app v-if="loader"/>
    </div>
</template>

<script>
  import { defineComponent } from 'vue';
  import { mapActions, mapState } from 'vuex';
  import HeaderApp from '@/components/header/header-app.vue';
  import ModalApp from '@/components/other/modal-app.vue';
  import PreloaderApp from '@/components/other/preloader-app.vue';

  export default defineComponent({
    name: 'App',
    components: {
      HeaderApp,
      ModalApp,
      PreloaderApp
    },
    mounted() {
      //this.$store.commit('cart/INIT_LOCAL_STORAGE')
      this.initStorage();
    },
    computed: {
      ...mapState('common', {
        loader: 'loader'
      })
    },
    methods: {
      ...mapActions('cart', {
        initLocalStorageCart: 'initLocalStorageCart'
      }),
      initStorage() {
        this.initLocalStorageCart()
      }
    }
  });
</script>

<style lang="scss">
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    @import './assets/scss/fonts';
    @import './assets/scss/variables';
    @import './assets/scss/libs/normalize';

    @import './assets/scss/components/all';

    body {
        background-color: $background;
    }

    main {
        padding: 3rem 0;
    }

    .wrapper {
        height: 100%;
        background-color: #fff;
        margin: 50px auto;
        display: grid;
        border-radius: 10px;
        max-width: 1400px;
    }

    .cartInfo {
        display: flex;
        align-items: center;
    }

    .hero-title {
        color: #181818;
        font-size: 24px;
        text-transform: uppercase;
        font-weight: 800;
    }

    .hero-subtitle {
        color: #7b7b7b;
    }

    .content {
        padding: 40px 0;

        &__title {
            margin: 35px 0;
        }

        &__items {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap: 5rem;
            grid-column-gap: 5rem;
            grid-row-gap: 2rem;
            row-gap: 2rem;
        }

        &__top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }

    .container {
        width: $container-width;
        margin: 0 auto;

        &--cart {
            max-width: 820px;
            margin: 0 auto;

            .content__title {
                margin: 0;
            }
        }
    }

    .cart {
        &__top {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .content__title {
            display: flex;
            align-items: center;
            font-size: 32px;

            svg {
                position: relative;
                top: -2px;
                width: 30px;
                height: 30px;
                margin-right: 10px;

                path {
                    stroke: $black;
                    stroke-width: 1.9;
                }
            }
        }

        &__clear {
            display: flex;
            align-items: center;
            cursor: pointer;
            @include noselect();

            span {
                display: inline-block;
                margin-left: 7px;
                color: #b6b6b6;
                font-size: 18px;
            }

            span,
            svg,
            path {
                transition: all $duration ease-in-out;
            }

            &:hover {
                svg {
                    path {
                        stroke: darken($color: #b6b6b6, $amount: 50);
                    }
                }

                span {
                    color: darken($color: #b6b6b6, $amount: 50);
                }
            }
        }

        &__item {
            display: flex;
            width: 100%;
            border-top: 1px solid $gray-line;
            padding: 1rem 0;

            &-img {
                display: flex;
                align-items: center;
                width: 10%;

                img {
                    width: 80px;
                    height: 80px;
                }
            }

            &-info {
                display: flex;
                flex-direction: column;
                justify-content: center;
                width: 40%;

                h3 {
                    font-weight: bold;
                    font-size: 22px;
                    line-height: 27px;
                    letter-spacing: 0.01em;
                }

                p {
                    font-size: 18px;
                    color: #8d8d8d;
                }
            }

            &-count {
                display: flex;
                align-items: center;
                justify-content: space-between;
                width: 13%;

                &-minus {
                    svg {
                        path:first-of-type {
                            display: none;
                        }
                    }
                }

                b {
                    font-size: 22px;
                }
            }

            &-price {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 33%;

                b {
                    font-weight: bold;
                    font-size: 22px;
                    letter-spacing: 0.01em;
                }
            }

            &-remove {
                display: flex;
                align-items: center;
                justify-content: flex-end;
                width: 4%;

                .button {
                    border-color: darken($color: $gray-line, $amount: 10);
                }

                svg {
                    transform: rotate(45deg);

                    path {
                        fill: darken($color: $gray-line, $amount: 15);
                    }
                }

                .button {
                    svg {
                        width: 11.5px;
                        height: 11.5px;
                        position: relative;
                    }

                    &:hover,
                    &:active {
                        border-color: darken($color: $gray-line, $amount: 80);
                        background-color: darken($color: $gray-line, $amount: 80);
                    }
                }
            }
        }

        &__bottom {
            margin: 50px 0;

            &-details {
                display: flex;
                justify-content: space-between;

                span {
                    font-size: 22px;

                    &:last-of-type {
                        b {
                            color: $teal;
                        }
                    }
                }
            }

            &-buttons {
                display: flex;
                justify-content: space-between;
                margin-top: 40px;

                .go-back-btn {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 210px;

                    border-color: darken($color: $gray-line, $amount: 10);

                    span {
                        color: darken($color: $gray-line, $amount: 20);
                        font-weight: 500;
                    }

                    &:hover {
                        background-color: darken($color: $gray-line, $amount: 90);
                        border-color: darken($color: $gray-line, $amount: 90);

                        span {
                            color: $gray-line;
                        }
                    }

                    svg {
                        margin-right: 12px;

                        path {
                            fill: transparent;
                            stroke-width: 2;
                        }
                    }
                }

                .pay-btn {
                    font-size: 16px;
                    font-weight: 600;
                    width: 210px;
                    padding: 16px;
                }
            }
        }

        &--empty {
            margin: 0 auto;
            width: 560px;
            text-align: center;

            .hero-title {
                margin-bottom: 10px;
            }


            p {
                font-size: 18px;
                line-height: 145.4%;
                letter-spacing: 0.01em;
                color: #777777;
            }

            .icon {
                position: relative;
                top: 2px;
            }

            img {
                display: block;
                width: 300px;
                margin: 45px auto 60px;
            }
        }
    }

    .button--black {
        padding: 12px 0 14px;
        width: 230px;
        margin: 0 auto;
        font-weight: 600;
        font-size: 18px;
    }

    .cart__commonList {
        padding: 2.2rem 0;
        display: grid;
        row-gap: 2rem;
        grid-row-gap: 2rem;
    }

    .cart__commonList-item {
        display: grid;
        row-gap: .8rem;
        grid-row-gap: .8rem;

        .content__items {
            grid-template-columns: 1fr;
            grid-row-gap: 1rem;
            row-gap: 1rem;
        }

        .textBtnMob {
            display: none;
        }
    }

    .modal {
        position: fixed;
        top: 0;
        right: 0;
        width: 100%;
        bottom: 0;
        background: rgba(0, 0, 0, .3);
        display: block;
        padding-left: 0;
    }

    .modal-dialog.hide{
        animation: hideModalAnimation .3s ease-in;
    }
    .modal-dialog {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 550px;
        animation: showModalAnimation .3s ease-in;
    }

    .form-modal {
        display: grid;
        padding: 2rem 0 0;
        row-gap: 1rem;
        &__error{
            padding: .5rem 0;
            display: block;
            color: red;
            text-align: left;
        }
        &__block {
            display: flex;
            column-gap: 1rem;
        }

        &__block--grid {
            display: grid;
            row-gap: .7rem;
            justify-content: start;
            .text{
                text-align: left;
            }
        }

        &__textarea {
            padding: .4rem;
            width: 270px;
            height: 100px;
            resize: none;
            border-radius: 10px;
            border: 2px solid $teal;
            &::placeholder{

            }
        }

        &__detail-list{
            grid-row-gap: .3rem;
            display: grid;

        }
        .detail-item{
            text-align: left;
            color: black;
        }
        .mark-text{
            font-weight: 700;
            color: $teal;
        }
        .text {
            display: block;
            width: 100%;
            height: 100%;
            background: white;
            color: $teal;
            font-size: 1rem;
            font-weight: 700;
            &--alt{
                color: black;
            }
            &--radio {
                border: 3px solid $teal;
            }
        }

        .form-modal__input:checked + .text {
            color: white;
            background: $teal;
        }

        &__radio {
            background: white;
            font-weight: 300;
            font-size: 15px;
            line-height: 22px;
            color: #000;
            cursor: pointer;
        }

        &__input {
            position: absolute;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            width: 1px;
            height: 1px;
            overflow: hidden;
            clip: rect(0 0 0 0);
            &--text{
                width: 270px;
                padding: 12px .6rem;
                border-radius: 10px;
                border: 2px solid #42B983;
            }
        }
        &__btn{
            margin: 1rem auto 0;
            line-height: 23px;
            padding: 12px 25px;
        }
    }

    .modal-dialog {
        .modal-content {
            background: white;
            text-align: center;
            border-radius: 20px;

            .modal-body {
                padding: 60px 30px 50px;

                .title {
                    color: black;
                    font-size: 32px;
                    line-height: 32px;
                    font-weight: 500;
                    text-transform: capitalize;
                    margin: 0 0 10px;
                }

                .description {
                    color: #fff;
                    font-size: 14px;
                    letter-spacing: 0.5px;
                    margin: 0 0 30px;
                }
            }

            .close {
                z-index: 2;
                position: absolute;
                right: 20px;
                top: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                height: 25px;
                width: 25px;
                color: black;
                font-size: 40px;
                background: white;
                border: none;
                line-height: 25px;
                transition: all 0.3s ease 0s;
                cursor: pointer;

                span {
                    margin-top: -10px;
                }

                &:hover {
                    color: #fff;
                }

                &:focus {
                    outline: none;
                }

            }
        }

    }

    @media screen and (max-width: 1060px) {
        .wrapper {
            max-width: 900px;
        }
        .content__items {
            grid-template-columns: repeat(2, 1fr);
        }
    }

    @media screen and (max-width: 760px) {
        main {
            padding: 1rem 0;
        }
        .wrapper {
            max-width: 600px;
        }
        .content__items {
            column-gap: 2rem;
            grid-column-gap: 2rem;
        }
        .cart--empty {
            width: 100%;

            img {
                width: 220px;
            }

            .button--black {
                padding: 5px 10px;
                width: 220px;
                margin: 0 auto;
                font-weight: 600;
                font-size: 18px;
            }

            .subtitle {
                font-size: .8rem;
            }
        }
        .cart__bottom {
            margin-top: 0;
        }
        .hero-title {
            font-size: 18px;
        }
        .cart__commonList-item {
            .cart__item {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                row-gap: 1rem;
                grid-row-gap: 1rem;
                column-gap: 1rem;
                grid-column-gap: 1rem;

            }

            .cart__item-remove,
            .cart__item-img,
            .cart__item-info,
            .cart__item-count,
            .cart__item-price {
                width: 100%;
            }

            .cart__item-remove {
                grid-column-start: 3;
            }

            .cart__item-img img {
                width: 100px;
                height: 100px;
            }

            .textBtnMob {
                display: inline-block;
                margin-right: .2rem;
            }
        }
        .cart .content__title {
            font-size: 1.3rem;
        }
        .cart__bottom-details span {
            font-size: 1.1rem;
        }
        .cart__item-price b,
        .cart__item-info p,
        .textBtnMob {
            font-size: 0.9rem;
        }

        .cart__bottom-buttons {

            .go-back-btn,
            .pay-btn {
                max-width: 150px;
                font-size: 13px;
            }
        }
        .hero-subtitle {
            display: none;
        }

    }

    @media screen and (max-width: 500px) {
        .cart--empty {
            .hero-title {
                font-size: 1rem;
            }
        }

        .modal-dialog {
            width: 95%;
        }


    }

    @media screen and (max-width: 450px) {
        .content__items {
            grid-template-columns: 1fr;
        }
        .cart__bottom-buttons {
            display: grid;
            row-gap: 1rem;
            grid-row-gap: 1rem;
            justify-content: center;

            .pay-btn {
                order: 1;
            }

            .go-back-btn {
                order: 2;
            }
        }
        .cart__commonList-item {
            .cart__item-count {
                grid-area: 1 / 2  / 2 / 4;
                justify-content: space-evenly;
            }

            .cart__item-price {
                grid-area: 2 / 1  / 3 / 2;
            }

            .cart__item-info {
                grid-area: 2 / 2  / 3 / 3;
            }
        }
        .cart__clear span {
            font-size: .9rem;
        }
        .cart__bottom-details span {
            font-size: .9rem;
        }
    }

    @media screen and (max-width: 400px) {
        .button--cart {
            display: grid;
            row-gap: .3rem;
            grid-row-gap: .3rem;

            .button__delimiter {
                display: none;
            }
        }
    }


</style>
