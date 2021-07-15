

import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import Cart from '@/views/Cart.vue'
import ContentCategory from '@/components/content/content-category.vue'
import cartModule from '@/store/modules/cart'
import filterModule from '@/store/modules/filter'

// create the module with our mocks
const store = createStore( {
  modules: {
    filter: {
      namespaced: true,
    },
    product: {
      namespaced: true,
    },
    cart: {
      namespaced: true,
    }
  },
});

describe('getters', () => {
  it('isEmptyCart', () => {
    const state = {
      cart: {},
    };
    const result = cartModule.getters.isEmptyCart(state);
    expect(result).toBe(true)
  })
});

describe('mutationsCart', () => {

});

