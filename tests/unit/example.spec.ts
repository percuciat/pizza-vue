

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
  it('RESET_CART', () => {
    const state = {
      cart: {name: 'test'},
      totalPrice: 11,
      totalCount: 2
    };
    cartModule.mutations.RESET_CART(state, {});
    expect(state.cart).toEqual({});
    expect(state.totalPrice).toBe(0);
    expect(state.totalCount).toBe(0);
  });
  it('INCREASE_TOTAL', () => {
    const state = {
      cart: {name: 'test'},
      totalPrice: 11,
      totalCount: 2
    };
    cartModule.mutations.INCREASE_TOTAL(state, {
      price: 100,
      count: 1
    });
    expect(state.totalPrice).toBe(111);
    expect(state.totalCount).toBe(3);
  });
  it('DECREASE_TOTAL', () => {
    const state = {
      cart: {name: 'test'},
      totalPrice: 110,
      totalCount: 8
    };
    cartModule.mutations.DECREASE_TOTAL(state, {
      price: 100,
      count: 1
    });
    expect(state.totalPrice).toBe(10);
    expect(state.totalCount).toBe(7);
  });
});

