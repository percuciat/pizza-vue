import { createStore } from 'vuex';
import common from './modules/common';
import product from './modules/product';
import cart from './modules/cart';
import filter from './modules/filter';

export default createStore({
  modules: {
    filter,
    product,
    cart,
    common
  }
});
