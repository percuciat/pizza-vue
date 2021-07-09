

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
    // mock state
    const state = {
      cart: {},
    };
    // get the result from the getter
    const result = cartModule.getters.isEmptyCart(state);
    // assert the result
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



/*
import { shallowMount } from '@vue/test-utils';
import { createStore } from 'vuex';
import ContentCategory from '@/components/content/content-category.vue'
import filterModule from '@/store/modules/filter'


const store = createStore( {
  modules: {
    filter: {
      namespaced: true,
      state: {
        categoryActive: null
      },
      actions: {
        setChosenCategory: jest.fn()
      },
      mutations: {
        CHANGE_CATEGORY(state: any) {
          state.count += 1
        }
      }
    },
    product: {
      namespaced: true,
      actions: {
        getProductsApi: jest.fn()
      },
    }
  },
});

function factory(fakeStore: any) {
  return shallowMount(ContentCategory, {
    global: {
      plugins: [store],
      mocks: {
        fakeStore
      }
    }
  })
}

describe('ContentCategory', () => {
  test('вызывает действие "chooseCategory" при выборе категории', () => {
    const paramsStore = {
      state: {
        categoryActive: null
      },
      commit: jest.fn()
    };
    const wrapper = factory(paramsStore);
    const button = wrapper.find('li');
    button.trigger('click');
    expect(filterModule.actions.setChosenCategory(, {amount: 0, name: 'Мясные'})).toHaveBeenCalled()
  })

});

*/

/*const factory = (values = {}) => {
  return shallowMount(HeaderApp, {
    data () {
      return {
        ...values
      }
    }
  })
};*/


// jest.mock('axios', () => ({
//   get: Promise.resolve({ data: 'value' })
// }))
// describe('HeaderApp', () => {
//   it('first test', () => {
//     const wrapper = factory();
//     expect(wrapper.find('.hero-title').text()).toEqual('Vue Pizza')
//   })
// });




