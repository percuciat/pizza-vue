import { createStore } from 'vuex';
import filter from './modules/filter';
import product from './modules/product';

export default createStore({
  modules: {
    filter,
    product
  }
})
/*
* import Vue from 'vue';
import Vuex from 'vuex';
import common from './modules/common';
import menu from './modules/menu';
import tournament from './modules/tournament';
import event from './modules/event';
Vue.use(Vuex);



export default new Vuex.Store({
    modules: {
        common,
        menu,
        tournament,
        event
    }
});
*  */